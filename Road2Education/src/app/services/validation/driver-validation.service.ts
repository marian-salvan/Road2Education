import { Injectable } from '@angular/core';

import { FileUploadService } from '../uploads/upload.service';
import { DriverValidationRequest, DriverSubmittedValidationRequest, ValidationRequestStatus } from 'src/app/models/validation-request';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from 'src/app/models/users';
import { Subscription, Observable } from 'rxjs';
import { Roles } from 'src/app/shared/constants/roles';

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
                status: ValidationRequestStatus.Pending
            });
        });
    }

    retrievePendingRequests(): Observable<DriverSubmittedValidationRequest[]> {
        const driversValidationRequests = this.firestore
            .collection<DriverSubmittedValidationRequest>(`validation-requests`,
                ref => ref.where('user_type', '==', Roles.Driver)
                .where('status', '==', ValidationRequestStatus.Pending));
        return driversValidationRequests.valueChanges();
    }

}
