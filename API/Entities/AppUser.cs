namespace API.Entities
{
    public class AppUser
    {
        // .net recognises Id as the primary key automatically to set up our databse and increment
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

    }
}