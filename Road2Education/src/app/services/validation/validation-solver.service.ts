import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { BaseSubmittedValidationRequest, ValidationRequestStatus } from 'src/app/models/validation-request';

@Injectable({
  providedIn: 'root'
})
export class ValidationSolverService {
    constructor(private firestore: AngularFirestore) { }

    async post(collection: string, value: any) {
      await this.firestore.collection(collection).add(value);
    }

    accept(request: BaseSubmittedValidationRequest) {
        this.setStatus(request, ValidationRequestStatus.Approved);

        this.firestore.collection('users').doc(request.user_id).update({
            validated: true
        });
    }

    refuse(request: BaseSubmittedValidationRequest) {
        console.log(ValidationRequestStatus.Rejected);
        this.setStatus(request, ValidationRequestStatus.Rejected);
    }

    private setStatus(request: BaseSubmittedValidationRequest, status: string) {
        console.log(status);
        this.firestore.collection('validation-requests',
            ref => ref.where('user_id', '==', request.user_id)).get()
                .subscribe(queryResult => {
                    queryResult.docs
                        .map(snapshot => snapshot.ref)
                        .forEach(ref =>
                            ref.update({status}));
                });
    }
}
