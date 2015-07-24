using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Message
    {
        public Message(int senderId, int recipientId, string content)
        {
            this.SenderId = senderId;
            this.RecipientId = recipientId;
            this.Content = content;
            this.DateSent = DateTime.Now;
        }

        public Message() { }

        public int Id { get; private set; }
        public int SenderId { get; private set; }
        public virtual Account Sender { get; protected set; }
        public int RecipientId { get; private set; }
        public virtual Account Recipient { get; protected set; }
        public string Content { get; private set; }
        public DateTime DateSent { get; private set; }
    }
}
