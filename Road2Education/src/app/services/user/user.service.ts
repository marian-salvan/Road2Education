import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/users';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _db: AngularFirestore) { }

  getUser(userId: string): Observable<User> {
    let userDoc = this._db.doc<User>(`users/${userId}`);
    return userDoc.valueChanges();
  }

  addUser(userId: string, user: User) : Promise<void> {
    let result = this._db.collection('users').doc(userId).set({
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      type: user.type
    });

    return result;
  }
}
