namespace WebAPI.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string Book_Name { get; set; }
        public string Author_Name { get; set; }
        public string Genre { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ImageUrl { get; set; }
        public string PdfUrl { get; set; }
        public int Quantity { get; set; }
    }
}
