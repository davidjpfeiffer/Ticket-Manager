using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Account
    {
        public Account(string firstName, string lastName, string email, string password, bool admin, int businessId)
        {
            this.FirstName = this.FormatName(firstName);
            this.LastName = this.FormatName(lastName);
            this.Email = email;
            this.Password = password;
            this.BusinessId = businessId;
            this.Admin = admin;
            this.TicketUpdates = 0;
            this.LastActive = null;
        }

        public Account() { }

        [Required]
        public int Id { get; protected set; }
        [Required]
        public string Email { get; protected set; }
        [Required]
        public string Password { get; protected set; }
        [Required]
        public string FirstName { get; private set; }
        [Required]
        public string LastName { get; private set; }
        [Required]
        public bool Admin { get; private set; }
        [Required]
        public int BusinessId { get; private set; }
        [Required]
        public int TicketUpdates { get; private set; }
        public DateTime? LastActive { get; private set; }
        public virtual Business Business { get; private set; }

        public Account UpdateAccount(string firstName, string lastName, int ticketUpdates, string email, string password, bool admin)
        {
            this.FirstName = this.FormatName(firstName);
            this.LastName = this.FormatName(lastName);
            this.TicketUpdates = ticketUpdates;
            this.Email = email;
            this.Password = password;
            this.Admin = admin;
            return this;
        }

        public string FormatName(string name)
        {
            if (name == null)
            {
                return null;
            }
            else
            {
                return char.ToUpper(name[0], CultureInfo.CurrentCulture) + name.Substring(1).ToLower();
            }
        }
    }
}