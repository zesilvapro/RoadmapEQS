using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    public class ProjectsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
