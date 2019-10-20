import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of} from 'rxjs/';
import { AuthenticationService } from '../authentication/authentication.service';
import { take, tap, map, filter, flatMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { ValidationRequestStatus } from 'src/app/models/validation-request';

abstract class AbstractPendingValidationGuard implements CanActivate {
  constructor(
      private firestore: AngularFirestore,
      private auth: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.auth.user.pipe(
      take(1),
      map(user => {
        if (user === null) {
            return of(false);
        }

        return this.firestore.collection('validation-requests', ref => ref.where('user_id', '==', user.uid))
            .get().pipe(
                take(1),
                map(querySnapshot => {
                    return querySnapshot.docs
                        .map(doc => doc.get('status') === ValidationRequestStatus.Pending)
                        .reduce((sum, next) => sum || next, false);
                }));
      }),
      flatMap(result => result)
    );
  }
}


@Injectable({
    providedIn: 'root'
})
export class UserPendingValidationGuard extends AbstractPendingValidationGuard {

    constructor(
        firestore: AngularFirestore,
        auth: AuthenticationService,
        private router: Router) {
        super(firestore, auth);
    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return super.canActivate(route).pipe(take(1),
                tap(hasValidationRequest => {
                    if (!hasValidationRequest) {
                        this.router.navigate(['']);
                    }
                }));
    }

}

@Injectable({
    providedIn: 'root'
})
export class UserNoPendingValidationGuard extends AbstractPendingValidationGuard {

    constructor(
        firestore: AngularFirestore,
        auth: AuthenticationService,
        private router: Router) {
        super(firestore, auth);
    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return super.canActivate(route).pipe(take(1),
                map(hasValidationRequest => !hasValidationRequest),
                tap(noValidationRequest => {
                    if (!noValidationRequest) {
                        this.router.navigate(['account/pending']);
                    }
                }));
    }
}
