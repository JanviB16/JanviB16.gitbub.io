using Microsoft.AspNetCore.Mvc;
using omas.Models;
using System.Diagnostics;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Runtime.CompilerServices;

namespace omas.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Classes()
        {
            return View();
        }

        public IActionResult Instructors()
        {
            return View();
        }
        public IActionResult Additionalprograms()
        {
            return View();
        }
        public IActionResult Gallery()
        {
            return View();
        }
        public IActionResult Contact()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult Thankyouformessage()
        {
            return View();
        }
        public IActionResult sendmessage()
        {
            var name = Request.Form["name"];
            var email = Request.Form["email"];
            var phone = Request.Form["phone"];
            var message = Request.Form["message"];

            SendEmail(name, email, phone, message);

            return RedirectToAction ("Thankyouformessage");
        }
        public void SendEmail(string name, string email, string phone, string message)
        {
            message = "Visitor Name: " + name + "<br/> Email: " + email + "<br/> Phone: "  + phone + "<br/> Message: " + message;   

            string sendGridApiKey = "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";
            if (string.IsNullOrEmpty(sendGridApiKey))
            {
                throw new Exception("The 'SendGridApiKey' is not configured");
            }

            var client = new SendGridClient(sendGridApiKey);
            var msg = new SendGridMessage()
            {
                From = new EmailAddress("support@basicmathapp.com", "Message from " + name),
                Subject = "hi",
                PlainTextContent = message,
                HtmlContent = message
            };
            msg.AddTo(new EmailAddress("16janvibhavsar@gmail.com"));

            var response = client.SendEmailAsync(msg);
           
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}