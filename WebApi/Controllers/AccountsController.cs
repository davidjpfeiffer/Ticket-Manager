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
    [RoutePrefix("accounts")]
    public class AccountsController : WebApi.Controllers.BaseController
    {
        [Route]
        public IHttpActionResult Get()
        {
            return this.Ok(this.Context.Users.ToList().Select(i => AccountConverter.ToDto(i)));
        }

        [Route("{accountId:int}")]
        public IHttpActionResult Get(int accountId)
        {
            Account existingUser = this.Context.Users.ToList().FirstOrDefault(i => i.Id == accountId);
            if (existingUser == null)
            {
                return this.NotFound();
            }
            else
            {
                return this.Ok(AccountConverter.ToDto(existingUser));
            }
        }

        [Route]
        public IHttpActionResult Get(string email, string password)
        {
            Account existingUser = this.Context.Users.ToList().FirstOrDefault(i => (i.Email == email) && (i.Password == password));
            if (existingUser == null)
            {
                return this.NotFound();
            }
            else
            {
                return this.Ok(AccountConverter.ToDto(existingUser));
            }
        }

        [Route]
        public IHttpActionResult Post(Dto.Account account)
        {
            if (account == null)
            {
                return this.BadRequest();
            }
            else
            {
                Business existingBusiness = this.Context.Businesses.ToList().FirstOrDefault(i => i.Id == account.BusinessId);
                if (existingBusiness == null)
                {
                    return this.BadRequest();
                }
                else
                {
                    Account newUser = existingBusiness.CreateNewAccount(account.FirstName, account.LastName, account.Email, account.Password, account.Admin);
                    this.Context.Users.Add(newUser);
                    this.Context.SaveChanges();
                    return this.Created(this.Request.RequestUri.AbsolutePath + "/" + newUser.Id, AccountConverter.ToDto(newUser));
                }
            }
        }

        [Route("{accountId:int}")]
        public IHttpActionResult Put(int accountId, Dto.Account account)
        {
            if (account == null)
            {
                return this.BadRequest();
            }
            else
            {
                Account existingUser = this.Context.Users.ToList().FirstOrDefault(i => i.Id == accountId);
                if (existingUser == null)
                {
                    return this.NotFound();
                }
                else
                {
                    if ((account.Email == null) && (account.Password == null))
                    {
                        existingUser.UpdateAccount(account.FirstName, account.LastName, account.TicketUpdates, existingUser.Email, existingUser.Password, account.Admin);
                    }
                    else if (account.Email == null)
                    {
                        existingUser.UpdateAccount(account.FirstName, account.LastName, account.TicketUpdates, existingUser.Email, account.Password, account.Admin);
                    }
                    else if (account.Password == null)
                    {
                        existingUser.UpdateAccount(account.FirstName, account.LastName, account.TicketUpdates, account.Email, existingUser.Password, account.Admin);
                    }
                    else
                    {
                        existingUser.UpdateAccount(account.FirstName, account.LastName, account.TicketUpdates, account.Email, account.Password, account.Admin);
                    }
                    this.Context.SaveChanges();
                    return this.Ok(AccountConverter.ToDto(existingUser));
                }
            }
        }

        [Route("{accountId:int}")]
        public IHttpActionResult Delete(int accountId)
        {
            Account existingUser = this.Context.Users.ToList().FirstOrDefault(i => i.Id == accountId);
            if (existingUser == null)
            {
                return this.NotFound();
            }
            else
            {
                this.Context.Users.Remove(existingUser);
                this.Context.SaveChanges();
                return this.StatusCode(HttpStatusCode.NoContent);
            }
        }
    }
}
