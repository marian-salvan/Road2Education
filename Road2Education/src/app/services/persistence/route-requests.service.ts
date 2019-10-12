import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { RouteOffer, RouteRequest } from 'src/app/models/route';
import { User } from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class RouteRequestsService {

    constructor(private firestore: AngularFirestore) { }

    getAllRequests(): Observable<RouteRequest[]> {
        const offersCollection = this.firestore.collection<RouteRequest>(`route-requests`);
        return offersCollection.valueChanges();
    }

    getRequestsForStudent(user: User) {
        const offersOfUser = this.firestore.collection<RouteOffer>(`route-requests`,
                ref => ref.where('student', '==', user.uid));
        return offersOfUser.valueChanges();
    }
}
