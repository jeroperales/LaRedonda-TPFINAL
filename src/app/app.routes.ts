import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ForumComponent } from './components/forum/forum.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EquiposComponent } from './components/equipos/equipos.component';



export const routes: Routes = [
   
    {
    
        path:'forum', 
        component: ForumComponent 
        }, 
        
        { 
        path:'header', 
        component: HeaderComponent 
        },
        {
        path: 'register',
        component: RegisterComponent
        },
        {
          path: 'login',
          component: LoginComponent

        },
        {
          path: 'equipos',
          component: EquiposComponent
        },

        {
          path: '', redirectTo: 'equipos', pathMatch: 'full'
        }

      ];
