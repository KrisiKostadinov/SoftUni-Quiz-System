using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Quiz.Controllers
{
    public class HomeController : ApiController
    {
        public HomeController()
        {
        }

        [Authorize]
        [Route("Index")]
        public IActionResult Get()
        {
            return Ok("Works");
        }
    }
}
