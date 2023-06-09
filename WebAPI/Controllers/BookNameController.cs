namespace Name.Controllers
{

    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    [ApiController]
    public class NameController : ControllerBase
    {
        [HttpGet("")]
        public IEnumerable<string> Getstrings() 
        {
            
            return new string [] {"Shevchenko","Kostenko"};
        }
    }
}