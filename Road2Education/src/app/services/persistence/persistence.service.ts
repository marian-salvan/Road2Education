import { Injectable } from '@angular/core';

import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
    constructor(private firestore: AngularFirestore) { }

    async post(collection: string, value: any) {
      await this.firestore.collection(collection).add(value);
    }
}
