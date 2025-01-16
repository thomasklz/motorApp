import { Routes } from '@angular/router';
import { PermissionGuard } from './guard/permission.guard';
import { LoginGuard } from './guard/login.guard';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome.page').then( m => m.WelcomePage),
    canActivate: [LoginGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage),
    canActivate: [LoginGuard],
  },
  {
    path: 'principal',
    loadComponent: () => import('./principal/principal.page').then( m => m.PrincipalPage)
  },
  {
    path: 'person',
    loadComponent: () => import('./person/person.page').then( m => m.PersonPage),
    canActivate: [PermissionGuard],
  },
 
];
