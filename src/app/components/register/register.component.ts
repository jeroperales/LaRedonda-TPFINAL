import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { Password } from 'primeng/password';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Button, ButtonModule } from 'primeng/button';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CardModule, RouterOutlet, InputTextModule, ReactiveFormsModule, ButtonModule, RouterModule, FormsModule, LoginComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent {
 registerForm

  constructor(private fb: FormBuilder){
    this.registerForm = this.fb.group({
      fullName: ['',[Validators.required,Validators.pattern(/^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/)]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required],
          confirmPassword: ['',Validators.required]
    })
  }
 get fullname(){
  return this.registerForm.controls['fullName'];
 }
 get email(){
  return this.registerForm.controls['email'];
 }

 get password(){
  return this.registerForm.controls['password'];
 }
 get confirmPassword(){
  return this.registerForm.controls['confirmPassword'];
 }
}
