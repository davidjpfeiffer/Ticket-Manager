using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Business
    {
        public Business(string name)
        {
            this.Name = this.FormatName(name);
            this.ActiveAccount = true;
            this.Users = new List<Account>();
            this.Categories = new List<TicketCategory>();
            this.Tickets = new List<Ticket>();
        }
        
        public Business() { }

        public int Id { get; protected set; }
        public string Name { get; private set; }
        public bool ActiveAccount { get; private set; }

        public virtual ICollection<Account> Users { get; private set; }
        public virtual ICollection<TicketCategory> Categories { get; private set; }
        public virtual ICollection<Ticket> Tickets { get; private set; }

        public Account CreateNewAccount(string firstName, string lastName, string email, string password, bool admin)
        {
            return new Account(firstName, lastName, email, password, admin, this.Id);
        }

        public TicketCategory CreateNewTicketCategory(string name)
        {
            return new TicketCategory(name, this.Id);
        }

        public Ticket CreateNewTicket(string title, string content, int categoryId, TicketPriority priority, int creatorId)
        {
            return new Ticket(title, content, categoryId, creatorId, priority);
        }

        public Business UpdateBusiness(string name)
        {
            this.Name = this.FormatName(name);
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
