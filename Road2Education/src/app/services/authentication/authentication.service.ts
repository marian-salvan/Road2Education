import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { User } from 'src/app/models/users';
import { BaseUser } from 'src/app/models/users';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: Observable<User>;

  constructor(private _afAuth: AngularFireAuth,
              private _db: AngularFirestore,
              private _userService: UserService) { 
    this.user = this._afAuth.authState.pipe( 
      switchMap(user => {
        if (user) {
          let test = this._db.doc<User>(`users/${user.uid}`).valueChanges();
          return test;
        } else {
          return of(null);
        }
      })
    )
  }

  public async emailLogin(user: BaseUser): Promise<firebase.auth.UserCredential> {

    try {
      let userCredential = await this._afAuth.auth.signInWithEmailAndPassword(user.email, user.password);     
      return userCredential;                                                            
    } catch (error) {
      throw error;
    }
  }

  public async emailRegister(user: User): Promise<firebase.auth.UserCredential> {
    try {
      let userCredential = await this._afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      
      await this._userService.addUser(userCredential.user.uid, user);

      return userCredential;
    } catch (error) {
      throw error;
    }
  }

  public async logOut(): Promise<void> {
    try {
      return await this._afAuth.auth.signOut();
    } catch (error) {
      throw error;
    }
  }
}
