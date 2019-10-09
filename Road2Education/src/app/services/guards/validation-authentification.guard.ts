import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import { take, tap, map, flatMap } from 'rxjs/operators';
import { UserPendingValidationGuard } from './pending-validation.guard';

@Injectable({
  providedIn: 'root'
})
export class UserValidatedGuard implements CanActivate {

  constructor(private auth: AuthenticationService,  private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const validationPath = route.data.validationPath;

    return this.auth.user.pipe(
      take(1),
      map(user => {
        const validated = user !== null && user.validated;
        if (validated) {
          return of(true);
        }

        return of(user !== null && user.validated);
      }),
      flatMap(result => result),
      tap(isValidated => {
        if (!isValidated) {
          this.router.navigate([validationPath]);
        }
      })
    );
  }
}
