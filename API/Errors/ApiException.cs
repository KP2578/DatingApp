namespace API.Errors
{
    public class ApiException
    {
        public ApiException(int statusCode, string details = null, string messages = null)
        {
            StatusCode = statusCode;
            Details = details;
            Messages = messages;
        }

        public int StatusCode { get; set; }
        public string Details { get; set; }
        public string Messages { get; set; }
    }
}