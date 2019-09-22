import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import { take, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleAuthentificationGuard implements CanActivate {

  constructor(private _auth: AuthenticationService,  private _router: Router) { 
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    let expectedRole = route.data.expectedRole;

    return this._auth.user.pipe(
      take(1),
      map(user => {
        return user !== null && user.type == expectedRole;
      }),
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this._router.navigate(['/login']);
        }
      })
    );
  }
}
