import { Injectable } from '@angular/core';

import { FileUploadService } from '../uploads/upload.service';
import { StudentValidationRequest } from 'src/app/models/validation-request';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from 'src/app/models/users';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentValidationService {

    constructor(private authService: AuthenticationService,
                private uploadService: FileUploadService,
                private firestore: AngularFirestore) { }

    async registerRequest(request: StudentValidationRequest): Promise<Subscription> {
        const schoolDocumentId = await this.uploadService.upload(request.schoolDocumentPhoto);

        return this.authService.user.subscribe((currentUser: User) => {
            this.firestore.collection('validation-requests').add({
                user_id: currentUser.uid,
                user_type: currentUser.type,
                schoolDocumentId,
                school: request.school,
                class: request.class
            });
        });
    }
}
