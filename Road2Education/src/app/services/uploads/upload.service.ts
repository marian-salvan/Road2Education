import { Injectable } from '@angular/core';

import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
    storageRef: AngularFireStorageReference;

    constructor(private storage: AngularFireStorage) { }

    async upload(file: File): Promise<string> {
        const id = Math.random().toString().substring(2);
        this.storageRef = this.storage.ref(id);
        await this.storageRef.put(file);

        return id;
    }
}
