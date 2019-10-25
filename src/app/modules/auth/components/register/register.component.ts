import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });
  
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit() { }

  onRegister() {
    const email: string = this.registerForm.controls['email'].value;
    const password: string = this.registerForm.controls['password'].value;
    const confirmPassword: string = this.registerForm.controls['confirmPassword'].value;

    if (password !== confirmPassword) {
      return;
    }

    this.authService.register(email, password)
      .subscribe(() => {
        this.router.navigate(['/busses']);
      });
  }
}
