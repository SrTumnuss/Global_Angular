import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OceanComponent } from './components/ocean/ocean.component';

export const routes: Routes = [

{path: '', component: HomeComponent},
{path: 'ocean', component: OceanComponent}, 
{path: '**', component: HomeComponent}



];
