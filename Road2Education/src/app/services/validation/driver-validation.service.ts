import { Injectable } from '@angular/core';

import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { FileUploadService } from '../uploads/upload.service';
import { DriverValidationRequest } from 'src/app/models/validation-request';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DriverValidationService {

    constructor(private uploadService: FileUploadService,
                private firestore: AngularFirestore) { }

    async registerRequest(request: DriverValidationRequest): Promise<DocumentReference> {
        const drivingLicenseId = await this.uploadService.upload(request.drivingLicense);
        const driverPhotoId = await this.uploadService.upload(request.driverPhoto);

        return this.firestore.collection('validation-requests').add({
            user_id: 'request.user.id', // TODO: replace
            user_type: 'driver', // TODO: replace with constant from user
            driverPhotoId,
            drivingLicenseId,
        });
    }
}
