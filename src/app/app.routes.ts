import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ForumComponent } from './components/forum/forum.component';
import { InterfazComponent } from './components/interfaz/interfaz.component';
import { GridComponent } from './components/grid/grid.component';

export const routes: Routes = [
   
   
    {
    
        path:'forum', 
        component: ForumComponent 
        },

        { 
        path:'grid',
         component: GridComponent 
        },

        { 
        path:'interfaz', 
        component: InterfazComponent 
        },



      ];
