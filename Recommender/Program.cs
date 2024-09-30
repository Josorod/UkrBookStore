using WebAPI.Models;

namespace Recommender
{
    class Program
    {
        static void Main(string[] args)
        {
            var books = new List<Book>
        {
            new Book { BookId = 1, Title = "Book 1", Author = "Author A", Genres = new List<string>{"Fantasy", "Adventure"}, Tags = new List<string>{"Magic", "Quest"}},
            new Book { BookId = 2, Title = "Book 2", Author = "Author B", Genres = new List<string>{"Fantasy", "Romance"}, Tags = new List<string>{"Magic", "Love"}},
            new Book { BookId = 3, Title = "Book 3", Author = "Author C", Genres = new List<string>{"Sci-Fi"}, Tags = new List<string>{"Space", "Future"}},
            new Book { BookId = 4, Title = "Book 4", Author = "Author A", Genres = new List<string>{"Adventure"}, Tags = new List<string>{"Quest", "Journey"}},
            new Book { BookId = 5, Title = "Book 5", Author = "Author D", Genres = new List<string>{"Romance"}, Tags = new List<string>{"Love", "Drama"}},
            new Book { BookId = 6, Title = "Book 6", Author = "Author E", Genres = new List<string>{"Historical Fiction"}, Tags = new List<string>{"War", "History"}},
            new Book { BookId = 7, Title = "Book 7", Author = "Author F", Genres = new List<string>{"Thriller", "Mystery"}, Tags = new List<string>{"Crime", "Detective"}},
            new Book { BookId = 8, Title = "Book 8", Author = "Author G", Genres = new List<string>{"Horror"}, Tags = new List<string>{"Ghost", "Supernatural"}},
            new Book { BookId = 9, Title = "Book 9", Author = "Author H", Genres = new List<string>{"Science Fiction", "Thriller"}, Tags = new List<string>{"Alien", "Space", "Action"}},
            new Book { BookId = 10, Title = "Book 10", Author = "Author I", Genres = new List<string>{"Fantasy", "Drama"}, Tags = new List<string>{"Magic", "Family"}},
            new Book { BookId = 11, Title = "Book 11", Author = "Author J", Genres = new List<string>{"Self-Help"}, Tags = new List<string>{"Motivation", "Success"}},
            new Book { BookId = 12, Title = "Book 12", Author = "Author K", Genres = new List<string>{"Biography"}, Tags = new List<string>{"Inspiration", "Leader"}},
            new Book { BookId = 13, Title = "Book 13", Author = "Author L", Genres = new List<string>{"Historical Fiction", "Adventure"}, Tags = new List<string>{"Pirates", "Sea"}},
            new Book { BookId = 14, Title = "Book 14", Author = "Author M", Genres = new List<string>{"Romance", "Drama"}, Tags = new List<string>{"Love", "Heartbreak"}},
            new Book { BookId = 15, Title = "Book 15", Author = "Author N", Genres = new List<string>{"Fantasy", "Epic"}, Tags = new List<string>{"Dragons", "Battle"}}
        };

            var recommender = new BookRecommender(books);
            var targetBook = books[0]; // For example, the user interacted with "Book 1"

            var recommendations = recommender.RecommendBooks(targetBook);

            Console.WriteLine("Recommendations based on: " + targetBook.Title);
            foreach (var book in recommendations)
            {
                Console.WriteLine($"{book.Title} by {book.Author}");
            }
        }
    }

}
