﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class User : Account
    {
        public User(string firstName, string lastName, string email, string password, int businessId)
        {
            this.FirstName = FormatName(firstName);
            this.LastName = FormatName(lastName);
            this.Email = email;
            this.Password = password;
            this.BusinessId = businessId;
            this.TicketUpdates = 0;
            this.LastActive = null;
        }

        public User() { }

        public string FirstName { get; private set; }
        public string LastName { get; private set; }
        public int BusinessId { get; private set; }
        public int TicketUpdates { get; private set; }
        public DateTime? LastActive { get; private set; }
        public virtual Business Business { get; private set; }

        public User UpdateUser(string firstName, string lastName, int ticketUpdates, string email, string password)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.TicketUpdates = ticketUpdates;
            this.Email = email;
            this.Password = password;
            return this;
        }
    }
}
