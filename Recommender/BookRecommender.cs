using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAPI.Models;


namespace Recommender
{
    public class BookRecommender
    {
        private List<Book> _books;

        public BookRecommender(List<Book> books)
        {
            _books = books;
        }

        public List<Book> RecommendBooks(Book targetBook, int numberOfRecommendations = 5)
        {
            return _books
                .Where(b => b.BookId != targetBook.BookId) // Exclude the target book
                .Select(b => new { Book = b, Similarity = ComputeCosineSimilarity(targetBook, b) })
                .OrderByDescending(b => b.Similarity)
                .Take(numberOfRecommendations)
                .Select(b => b.Book)
                .ToList();
        }

        public static double ComputeCosineSimilarity(Book book1, Book book2)
        {
            var allFeatures = new HashSet<string>(book1.Genres.Concat(book1.Tags));
            allFeatures.UnionWith(book2.Genres);
            allFeatures.UnionWith(book2.Tags);

            var vector1 = allFeatures.Select(f => (book1.Genres.Contains(f) || book1.Tags.Contains(f)) ? 1 : 0).ToArray();
            var vector2 = allFeatures.Select(f => (book2.Genres.Contains(f) || book2.Tags.Contains(f)) ? 1 : 0).ToArray();

            double dotProduct = vector1.Zip(vector2, (x, y) => x * y).Sum();
            double magnitude1 = Math.Sqrt(vector1.Sum(x => x * x));
            double magnitude2 = Math.Sqrt(vector2.Sum(x => x * x));

            if (magnitude1 == 0 || magnitude2 == 0)
            {
                return 0;
            }

            return dotProduct / (magnitude1 * magnitude2);
        }
    }
}
