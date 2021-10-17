using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Toolbox.Data.Models;
using Toolbox.Data.RequestModels;
using Toolbox.Services.Interfaces;

namespace Toolbox.Api.Controllers
{
    [ApiController]
    public class ClassroomController : ControllerBase
    {
        private readonly ILogger<ClassroomController> _logger;
        private readonly IClassroomService _classroomService;

        public ClassroomController(ILogger<ClassroomController> logger, IClassroomService classroomService)
        {
            _logger = logger;
            _classroomService = classroomService;
        }

        [HttpPost("api/classroom")]
        public async Task<IActionResult> AddClass(string teacherId)
        {
            //TODO: flesh this out
            var classroom = new Classroom()
            {
                TeacherId = teacherId
            };
            await _classroomService.AddClassAsync(classroom);
            
            return Ok();
        }

        public async Task<IActionResult> GetTeachersClasses(string teacherId)
        {
            //TODO: flesh this out and potentially rename to be less verbose
            var classes = await _classroomService.GetTeachersClassesAsync(teacherId);
            return Ok(classes);
        }

    }
}