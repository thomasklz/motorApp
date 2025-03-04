import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
   const idtu = localStorage.getItem('idtu');
    if (idtu !== "2") {
      this.router.navigate(['/principal']);
      return false;
    }
    return true;
    
  }
}
