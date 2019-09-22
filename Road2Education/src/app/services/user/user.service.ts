import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _db: AngularFirestore) { }
}
