﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Dto
{
    public class Message
    {
        public int Id { get; set; }
        public int ChatLogId { get; set; }
        public int UserId { get; set; }
        public string Text { get; set; }
    }
}
