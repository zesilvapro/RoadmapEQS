using AutoMapper;
using BackEnd.Context;
using BackEnd.Dtos;
using BackEnd.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;




namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public UsersController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;

        }

        [HttpGet]
        [Route("GetAllUsers")]
        public async Task<ActionResult<IEnumerable<UserDto>>> GetUsers()
        {
            try
            {
                var users = await _context.Users.ToListAsync();
                var userDtos = _mapper.Map<List<UserDto>>(users);

                if (userDtos.Count > 0)
                {
                    return Ok(userDtos);
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
        public async Task<ActionResult<UserDto>> Login([FromBody] LoginModel loginModel)
        {
            try
            {
                if (loginModel == null || string.IsNullOrEmpty(loginModel.Email) || string.IsNullOrEmpty(loginModel.Password))
                {
                    return BadRequest(new { message = "Invalid email or password." });
                }

                // Find user by email
                var user = await _context.Users.SingleOrDefaultAsync(u => u.Email == loginModel.Email);

                // Check if user exists and password matches
                if (user != null && user.Password == loginModel.Password)
                {
                    var userDto = _mapper.Map<UserDto>(user);
                    return Ok(userDto);
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
        public async Task<ActionResult> RegisterUser([FromBody] UserDto userDto)
        {
            try
            {
                if (userDto == null)
                {
                    return BadRequest(new { message = "Invalid user data." });
                }

                // Validate email format using regular expression
                if (!IsValidEmail(userDto.Email))
                {
                    return BadRequest(new { message = "Invalid email format." });
                }

                // Check if a user with the same username already exists
                var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Username == userDto.Username);
                if (existingUser != null)
                {
                    return Conflict(new { message = "A user with the same username already exists." });
                }

                var user = _mapper.Map<User>(userDto);
                _context.Users.Add(user);
                await _context.SaveChangesAsync();

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