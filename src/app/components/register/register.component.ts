import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { Password } from 'primeng/password';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Button, ButtonModule } from 'primeng/button';
import { LoginComponent } from '../login/login.component';
import { passwordMatchValidator } from '../../shared/password-match.directive';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CardModule, RouterOutlet, InputTextModule, ReactiveFormsModule, ButtonModule, RouterModule, FormsModule, LoginComponent, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent {
  
    fb = inject(FormBuilder);
    authService = inject(AuthService)


      registerForm = this.fb.group({
      fullName: ['',[Validators.required,Validators.pattern(/^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/)]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required],
          confirmPassword: ['',Validators.required]
    },
    {
      validators: passwordMatchValidator
    })
  



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


 submitDetails() { //INSERTA AL JSON LA DATA DEL REGISTER
  const postData = { ...this.registerForm.value};
  delete postData.confirmPassword; //BORRA EL CONFIRM PARA EL BACKEND
  this.authService.registerUser(postData as User).subscribe({
    next:() => {
      console.log('Very good bro')

    },
    error: (e: Error) =>{
      console.log(e.message);
    }

  })
 }
}
