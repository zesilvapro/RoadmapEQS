using BackEnd.Context;
using BackEnd.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Controllers
{
    namespace BackEnd.Controllers
    {
        [Route("api/[controller]")]
        [ApiController]
        public class ProjectController : ControllerBase
        {
            private readonly AppDbContext _context;

            public ProjectController(AppDbContext context)
            {
                _context = context;
            }

            // GET: api/Project
            [HttpGet]
            public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
            {
                return await _context.Project.ToListAsync();
            }

            // GET: api/Project/5
            [HttpGet("{id}")]
            public async Task<ActionResult<Project>> GetProject(int id)
            {
                var project = await _context.Project.FindAsync(id);

                if (project == null)
                {
                    return NotFound();
                }

                return project;
            }

            // POST: api/Project
            [HttpPost]
            public async Task<ActionResult<Project>> PostProject(Project project)
            {
                _context.Project.Add(project);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetProject", new { id = project.ID }, project);
            }

            // PUT: api/Project/5
            [HttpPut("UpdateBy{id}")]
            public async Task<IActionResult> PutProject(int id, Project project)
            {
                if (id != project.ID)
                {
                    return BadRequest();
                }

                _context.Entry(project).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ProjectExists(id))
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

            // DELETE: api/Project/5
            [HttpDelete("DeleteBy{id}")]
            public async Task<IActionResult> DeleteProject(int id)
            {
                var project = await _context.Project.FindAsync(id);
                if (project == null)
                {
                    return NotFound();
                }

                _context.Project.Remove(project);
                await _context.SaveChangesAsync();

                return NoContent();
            }

            private bool ProjectExists(int id)
            {
                return _context.Project.Any(e => e.ID == id);
            }
        }
    }
}