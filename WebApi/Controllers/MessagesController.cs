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
        public IHttpActionResult GetConversation(int userId)
        {
            return this.Ok(this.Context.Messages.ToList().Where(i => (i.SenderId == userId) || (i.RecipientId == userId)).Select(j => MessageConverter.ToDto(j)));
        }

        [Route("{userOneId:int}/{userTwoId:int}")]
        public IHttpActionResult GetConversation(int userOneId, int userTwoId)
        {
            return this.Ok(this.Context.Messages.ToList().Where(i => ((i.SenderId == userOneId) && (i.RecipientId == userTwoId)) || ((i.RecipientId == userOneId) && (i.SenderId == userTwoId))).Select(j => MessageConverter.ToDto(j)));
        }

        [Route]
        public IHttpActionResult Post(Dto.Message message)
        {
            if (message == null)
            {
                return this.BadRequest();
            }
            else
            {
                Message newMessage = new Message(message.SenderId, message.RecipientId, message.Content);
                this.Context.Messages.Add(newMessage);
                this.Context.SaveChanges();
                newMessage = this.Context.Messages.FirstOrDefault(i => i.Id == newMessage.Id);
                return this.Created("", new {});
            }
        }
    }
}