import { Injectable } from '@angular/core';

import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { FileUploadService } from '../uploads/upload.service';
import { DriverValidationRequest } from 'src/app/models/validation-request';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from 'src/app/models/users';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverValidationService {

    constructor(private authService: AuthenticationService,
                private uploadService: FileUploadService,
                private firestore: AngularFirestore) { }

    async registerRequest(request: DriverValidationRequest): Promise<Subscription> {
        const drivingLicenseId = await this.uploadService.upload(request.drivingLicense);
        const driverPhotoId = await this.uploadService.upload(request.driverPhoto);

        return this.authService.user.subscribe((currentUser: User) => {
            this.firestore.collection('validation-requests').add({
                user_id: currentUser.uid,
                user_type: currentUser.type,
                driverPhotoId,
                drivingLicenseId,
            });
        });
    }
}
