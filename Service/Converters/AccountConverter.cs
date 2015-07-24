using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dmn = Domain;
using Dto = Service.Dto;

namespace Service.Converters
{
    public static class AccountConverter
    {
        public static Dto.Account ToDto(Dmn.Account domain)
        {
            return new Dto.Account()
            {
                Id = domain.Id,
                FirstName = domain.FirstName,
                LastName = domain.LastName,
                Admin = domain.Admin,
                BusinessId = domain.BusinessId,
                TicketUpdates = domain.TicketUpdates
            };
        }
    }
}
