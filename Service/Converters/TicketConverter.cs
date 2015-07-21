﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dmn = Domain;
using Dto = Service.Dto;

namespace Service.Converters
{
    public static class TicketConverter
    {
        public static Dto.Ticket ToDto(Dmn.Ticket domain)
        {
            return new Dto.Ticket()
            {
                Id = domain.Id,
                Title = domain.Title,
                Content = domain.Content,
                CategoryId = domain.CategoryId,
                Category = domain.Category.Name,
                CreatorId = domain.CreatorId,
                Creator = domain.Creator.FirstName + ' ' + domain.Creator.LastName,
                Priority = domain.Priority,
                Status = domain.Status,
                DateCreated = domain.DateCreated,
                LastEdited = domain.LastEdited
            };
        }
    }
}