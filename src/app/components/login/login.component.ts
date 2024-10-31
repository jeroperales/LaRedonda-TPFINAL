import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { Password } from 'primeng/password';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Button, ButtonModule } from 'primeng/button';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, RouterOutlet, InputTextModule, ReactiveFormsModule, ButtonModule, RegisterComponent, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})



    export class LoginComponent {
      loginForm
      
      constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required]
        });
      }

      get email(){
       return this.loginForm.get('email');
      }

      get password(){
        return this.loginForm.get('password');
      }
    }
  
    
/* export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}
}
  
 */