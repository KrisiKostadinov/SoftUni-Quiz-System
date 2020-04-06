using Microsoft.AspNetCore.Mvc;

namespace Quiz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public abstract class ApiController : ControllerBase
    {
    }
}
