using AutoMapper;
using BackEnd.Context;
using BackEnd.Dtos;
using BackEnd.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public TaskController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Task
        [HttpGet("GetallTasks")]
        public async Task<ActionResult<TaskDto>> GetTasks()
        {
            var tasks = await _context.Tasks.ToListAsync();
            var taskDtos = _mapper.Map<List<TaskDto>>(tasks);
            return Ok(taskDtos);
        }

        // GET: api/Task/5
        [HttpGet("GetTaskByID{id}")]
        public async Task<ActionResult<TaskDto>> GetTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);

            if (task == null)
            {
                return NotFound();
            }

            var taskDto = _mapper.Map<TaskDto>(task);
            return Ok(taskDto);
        }

        // POST: api/Task
        [HttpPost("CreateTask")]
        public async Task<ActionResult<TaskDto>> PostTask(TaskDto taskDto)
        {
            var task = _mapper.Map<Tasks>(taskDto);
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            var createdTaskDto = _mapper.Map<TaskDto>(task);
            return CreatedAtAction("GetTask", new { id = task.ID }, createdTaskDto);
        }

        // DELETE: api/Task/5
        [HttpDelete("DeleteTask/{id}")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null)
            {
                return NotFound();
            }

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // PUT: api/Task/5
        [HttpPut("UpdateTask/{id}")]
        public async Task<IActionResult> PutTask(int id, TaskDto taskDto)
        {
            if (id != taskDto.Id)
            {
                return BadRequest();
            }

            var task = _mapper.Map<Tasks>(taskDto);
            task.ID = id; // Ensure the entity has the correct ID
            _context.Entry(task).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaskExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private bool TaskExists(int id)
        {
            return _context.Tasks.Any(e => e.ID == id);
        }
    }
}