import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ForumComponent } from './components/forum/forum.component';
import { HeaderComponent } from './components/header/header.component';
import { EquiposComponent } from './components/equipos/equipos.component';
 import { AboutUsComponent } from './components/about-us/about-us.component'; 
import {  TablasComponent } from './components/tablas/tablas.component';
import { ListComponent } from './components/adminforms/list/list.component';


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
          path: 'equipos',
          component: EquiposComponent
        },

        { path:'about-us',
        component: AboutUsComponent 
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
          path: '', redirectTo: 'equipos', pathMatch: 'full'
        }

      ];
