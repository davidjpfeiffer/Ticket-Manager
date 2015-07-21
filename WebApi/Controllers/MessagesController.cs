using Domain;
using Service.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web.Http;
using Dto = Service.Dto;

namespace WebApi.Controllers
{
    [RoutePrefix("messages")]
    public class MessagesController : WebApi.Controllers.BaseController
    {
        [Route("{userId:int}")]
        public IHttpActionResult Get(int userId)
        {
            Ticket existingTicket = this.Context.Tickets.ToList().FirstOrDefault(i => i.Id == userId);
            if (existingTicket == null)
            {
                return this.NotFound();
            }
            else
            {
                return this.Ok(TicketConverter.ToDto(existingTicket));
            }
        }
        [Route]
        public IHttpActionResult Post(Dto.Ticket ticket)
        {
            if (ticket == null)
            {
                return this.BadRequest();
            }
            else
            {
                TicketCategory existingTicketCategory = this.Context.TicketCategories.ToList().FirstOrDefault(i => i.Id == ticket.CategoryId);
                Business existingBusiness = this.Context.Businesses.ToList().FirstOrDefault(i => i.Id == existingTicketCategory.BusinessId);
                User existingUser = this.Context.Users.ToList().FirstOrDefault(i => i.Id == ticket.CreatorId);
                if (existingTicketCategory == null || existingBusiness == null || existingUser == null)
                {
                    return this.BadRequest();
                }
                else
                {
                    Ticket newTicket = existingBusiness.CreateNewTicket(ticket.Title, ticket.Content, existingTicketCategory.Id, ticket.Priority, ticket.CreatorId);
                    this.Context.Tickets.Add(newTicket);
                    this.Context.SaveChanges();
                    return this.Created(this.Request.RequestUri.AbsolutePath + "/" + newTicket.Id, TicketConverter.ToDto(newTicket));
                }
            }
        }
    }
}