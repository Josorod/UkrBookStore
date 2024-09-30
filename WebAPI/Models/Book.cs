namespace WebAPI.Models
{
    public class Book
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public List<string> Genres { get; set; }
        public List<string> Tags { get; set; }
    }

}
