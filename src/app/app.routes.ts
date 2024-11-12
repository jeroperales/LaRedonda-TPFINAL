import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ForumComponent } from './components/forum/forum.component';
import { HeaderComponent } from './components/header/header.component';
import { EquiposComponent } from './components/equipos/equipos.component';
 import { AboutUsComponent } from './components/about-us/about-us.component'; 
import { LoginComponent } from './components/login/login.component'; 
import { RegisterComponent } from './components/register/register.component';
import {  TablasComponent } from './components/tablas/tablas.component';
import { ListComponent } from './components/adminforms/list/list.component';
import { ModifyComponent } from './components/adminforms/modify/modify.component';
import { DetallesEquipoComponent } from './components/detalles-equipo/detalles-equipo.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
   
    {
    
        path:'forum', 
        component: ForumComponent 
        }, 

        { path: 'home',
          component: HomeComponent
        },
        
        { 
        path:'header', 
        component: HeaderComponent 
        },
        {
          path: 'equipos/:league',
          component: EquiposComponent
        },
        {
          path: 'detalles/:id',
          component: DetallesEquipoComponent
        },

        { path:'about-us',
        component: AboutUsComponent 
        },
      
         { path: 'login',
           component: LoginComponent },
         {
            path: 'register',
            component:RegisterComponent
         },
       
        {
          path: 'tablas',
          component: TablasComponent
        },
        {
          path: 'list',
          component: ListComponent
        },
        {
          path: 'update/:id',
          component: ModifyComponent
        },

        {
          path: '', redirectTo: 'home', pathMatch: 'full'
        },
        {
          path: '**', redirectTo: 'home', pathMatch: 'full'
        }

      ];
