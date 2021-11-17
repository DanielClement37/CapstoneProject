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
    [Produces("application/json")]
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
        public async Task<IActionResult> AddClass([FromBody] AddClassRequest requestModel)
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
        [HttpPut("api/classroom/{classroomId}")]
        public async Task<IActionResult> EditClass([FromBody]EditClassRequest requestModel, Guid classroomId)
        {
            var classroom = new Classroom()
            {
                ClassName = requestModel.Classname
            };
            //save
            await _classroomService.EditClass(classroom, classroomId);
            //log and return
            _logger.Log(LogLevel.Information, $"Classroom: {classroom.ClassId} updated");
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

        [Authorize]
        [HttpPost("api/classroom/student")]
        public async Task<IActionResult> AddStudent([FromBody] AddStudentRequest requestModel)
        {
            var student = new Student()
            {
                ClassroomId = requestModel.ClassroomId,
                FirstName = requestModel.FirstName,
                LastName = requestModel.LastName,
                Gender = requestModel.Gender,
                IsPresent = false,
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now
            };
            await _classroomService.AddStudentAsync(student);
            
            _logger.Log(LogLevel.Information, $"Student added: {student.StudentId}");
            return Ok();
        }

        [Authorize]
        [HttpPut("api/classroom/student/{studentId}")]
        public async Task<IActionResult> EditStudent([FromBody] EditStudentRequest requestModel, Guid studentId)
        {
            var student = new Student()
            {
                FirstName = requestModel.FirstName,
                LastName = requestModel.LastName,
                Gender = requestModel.Gender
            };
            await _classroomService.EditStudentAsync(student, studentId);

            return Ok();
        }

        [Authorize]
        [HttpGet("api/classroom/students/{classroomId}")]
        public async Task<IActionResult> GetClassroomStudents(Guid classroomId)
        {
            var students = await _classroomService.GetClassroomStudents(classroomId);
            return Ok(students);
        }

        [Authorize]
        [HttpDelete("api/classroom/student/{studentId}")]
        public async Task<IActionResult> DeleteStudent(Guid studentId)
        {
            await _classroomService.DeleteStudentAsync(studentId);
            return Ok();
        }

        [Authorize]
        [HttpGet("api/classroom/student/{classroomId}")]
        public async Task<IActionResult> GetRandomStudent(Guid classroomId)
        {
            var student = await _classroomService.GetRandomStudentAsync(classroomId);
            return Ok(student);
        }

        [Authorize]
        [HttpGet("api/classroom/studentsgrouped/{classroomId}")]
        public async Task<IActionResult> GroupStudents(Guid classroomId)
        {
            var groupedstudents = await _classroomService.GroupStudentsAsync(new GroupStudentsOptions(), classroomId);
            return Ok(groupedstudents);
        }
    }
}