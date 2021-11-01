using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
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

        [Authorize]
        [HttpPost("api/classroom")]     //https://localhost:5000/api/classroom
        public async Task<IActionResult> AddClass(AddClassRequest requestModel)
        {
            //TODO: flesh this out
            var classroom = new Classroom()
            {
                TeacherId = requestModel.TeacherId,
                ClassName = requestModel.ClassName,
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now
            };
            await _classroomService.AddClassAsync(classroom);
            
            _logger.Log(LogLevel.Information,"Classroom Created ");
            return Ok();
        }

        [Authorize]
        [HttpGet("api/classroom/{teacherId}")]
        public async Task<IActionResult> GetTeachersClasses(string teacherId)
        {
            //TODO: flesh this out and potentially rename to be less verbose
            var classes = await _classroomService.GetTeachersClassesAsync(teacherId);
            return Ok(classes);
        }

        [Authorize]
        [HttpPut("api/classroom")]
        public async Task<IActionResult> EditClass(EditClassRequest requestModel)
        {
            //get current Classroom data
            var currClassroom = await _classroomService.GetClassroom(requestModel.ClassroomId);
            //replace with new
            var oldClassname = currClassroom.ClassName;
            currClassroom.ClassName = requestModel.Classname;
            //save
            await _classroomService.EditClass(currClassroom);
            //log and return
            _logger.Log(LogLevel.Information, $"Classroom: {currClassroom.ClassId} changed name from {oldClassname} to {currClassroom.ClassName}");
            return Ok();
        }

        [Authorize]
        [HttpDelete("api/classroom/{classroomId}")]
        public async Task<IActionResult> DeleteClass(Guid classroomId)
        {
            await _classroomService.DeleteClassAsync(classroomId);
            _logger.Log(LogLevel.Information, $"classroom: {classroomId} was deleted");
            return Ok();
        }
        
        
    }
}