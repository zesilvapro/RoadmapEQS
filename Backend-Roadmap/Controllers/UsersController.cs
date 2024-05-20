using BackEnd.Context;
using BackEnd.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;
using System.Text.RegularExpressions;




namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetAllUsers")]
        public ActionResult<IEnumerable<User>> GetUsers()
        {
            try
            {
                
                var userList = _context.Users.ToList();

                if (userList.Count > 0)
                {
                    return Ok(userList);
                }
                else
                {
                    return NotFound(new { message = "No users found." });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = "An error occurred while fetching users: " + ex.Message });
            }
        }


        [HttpPost]
        [Route("LoginUser")]
        public ActionResult<User> Login([FromBody] LoginModel loginModel)
        {
            try
            {
                if (loginModel == null || string.IsNullOrEmpty(loginModel.Email) || string.IsNullOrEmpty(loginModel.Password))
                {
                    return BadRequest(new { message = "Invalid email or password." });
                }

                // Find user by email
                var user = _context.Users.SingleOrDefault(u => u.Email == loginModel.Email);

                // Check if user exists and password matches
                if (user != null && user.Password == loginModel.Password)
                {
                    // If login successful, return user data
                    return Ok(user);
                }
                else
                {
                    // If user not found or password doesn't match, return unauthorized status
                    return Unauthorized(new { message = "Invalid email or password." });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = "An error occurred while logging in: " + ex.Message });
            }
        }


        [HttpPost]
        [Route("RegisterUser")]
        public ActionResult RegisterUser([FromBody] User newUser)
        {
            try
            {
                if (newUser == null)
                {
                    return BadRequest(new { message = "Invalid user data." });
                }

                // Validate email format using regular expression
                if (!IsValidEmail(newUser.Email))
                {
                    return BadRequest(new { message = "Invalid email format." });
                }

                // Check if a user with the same username already exists
                var existingUser = _context.Users.FirstOrDefault(u => u.Username == newUser.Username);
                if (existingUser != null)
                {
                    return Conflict(new { message = "A user with the same username already exists." });
                }

                _context.Users.Add(newUser);
                _context.SaveChanges();

                return Ok(new { message = "User registered successfully." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = "An error occurred while registering the user: " + ex.Message });
            }
        }

        private bool IsValidEmail(string email)
        {
           
            string pattern = @"^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$";
            return Regex.IsMatch(email, pattern);
        }
    }
}