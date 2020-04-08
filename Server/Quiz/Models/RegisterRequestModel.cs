using System.ComponentModel.DataAnnotations;

namespace Quiz.Models
{
    public class RegisterRequestModel
    {
        [MinLength(3, ErrorMessage = "Username must be 3 or more letters.")]
        public string UserName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        [MinLength(6)]
        public string Password { get; set; }

        [Compare(nameof(Password))]
        public string RepeatPassword { get; set; }
    }
}
