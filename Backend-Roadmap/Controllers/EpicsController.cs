using AutoMapper;
using BackEnd.Context;
using BackEnd.Dtos;
using BackEnd.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class EpicController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public EpicController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("GetAllEpics")]
        public async Task<ActionResult<IEnumerable<EpicDto>>> GetAllEpics()
        {
            var epics = await _context.Epics.ToListAsync();
            var epicDtos = _mapper.Map<List<EpicDto>>(epics);
            return Ok(epicDtos);
        }

        [HttpPost]
        [Route("CreateEpic")]
        public async Task<ActionResult> CreateEpic([FromBody] EpicDto epicDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var epic = _mapper.Map<Epic>(epicDto);
            _context.Epics.Add(epic);
            await _context.SaveChangesAsync();

            var createdEpicDto = _mapper.Map<EpicDto>(epic);

            return CreatedAtAction(nameof(GetEpicById), new { id = createdEpicDto.Id }, createdEpicDto);
        }

        [HttpGet("GetEpicBy{id}")]
        public async Task<ActionResult<EpicDto>> GetEpicById(int id)
        {
            var epic = await _context.Epics.FindAsync(id);

            if (epic == null)
            {
                return NotFound();
            }

            var epicDto = _mapper.Map<EpicDto>(epic);
            return Ok(epicDto);
        }
    }
}
