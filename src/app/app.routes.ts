import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ForumComponent } from './components/forum/forum.component';
import { InterfazComponent } from './components/interfaz/interfaz.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EquiposComponent } from './components/equipos/equipos.component';



export const routes: Routes = [
   
    {
    
        path:'forum', 
        component: ForumComponent 
        }, 
        
        { 
        path:'interfaz', 
        component: InterfazComponent 
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
