using System;

namespace Toolbox.Data.RequestModels
{
    public class EditClassRequest
    {
        public Guid ClassroomId { get; set; }
        public string TeacherId { get; set; }
        public string Classname { get; set; }
    }
}