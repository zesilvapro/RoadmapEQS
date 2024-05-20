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

             
            [HttpGet("GellAllProjects")]
            public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
            {
                return await _context.Projects.ToListAsync();
            }

             
            [HttpGet("GetProjectsBy{id}")]
            public async Task<ActionResult<Project>> GetProject(int id)
            {
                var project = await _context.Projects.FindAsync(id);

                if (project == null)
                {
                    return NotFound();
                }

                return project;
            }

            [HttpPost("CreateProject")]
            public async Task<ActionResult<Project>> PostProject([FromBody] Project project)
            {
                _context.Projects.Add(project);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetProject", new { id = project.ID }, project);
            }

            
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
                var project = await _context.Projects.FindAsync(id);
                if (project == null)
                {
                    return NotFound();
                }

                _context.Projects.Remove(project);
                await _context.SaveChangesAsync();

                return NoContent();
            }

            private bool ProjectExists(int id)
            {
                return _context.Projects.Any(e => e.ID == id);
            }
        }
    }
}