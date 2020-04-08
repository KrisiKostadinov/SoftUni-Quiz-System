import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  errors: Array<any>;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService) {
    this.registerForm = this.fb.group({
      'username': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'repeatPassword': ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get repeatPassword() {
    var password = this.registerForm.get('password');
    var repeatPassword = this.registerForm.get('repeatPassword');
    if(password.value !== repeatPassword.value) {
      repeatPassword.setErrors({ 'notconsistent': true });
    }
    
    return this.registerForm.get('repeatPassword');
  }

  register() {
    if(this.registerForm.valid) {
      var user: any = {
        username: this.registerForm.value.username,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        repeatPassword: this.registerForm.value.repeatPassword,
      };

      this.registerForm.disable();

      this.authService.register(user).subscribe(data => {
        if(data === null) {
          this.registerForm.enable();
          this.registerForm.reset();
          this.errors = null;
        }
      }, error => {
        this.registerForm.enable();

        this.errors = error.error;

        console.log(error);
      });
    }
  }
}
