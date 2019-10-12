import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { RouteOffer, RouteAssignation } from 'src/app/models/route';
import { User } from 'firebase';
import { take, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RouteOffersService {

    constructor(private firestore: AngularFirestore) { }

    getAllOffers(): Observable<RouteOffer[]> {
        const offersCollection = this.firestore.collection<RouteOffer>(`route-offers`);
        return offersCollection.valueChanges();
    }

    getOffersOfDriver(user: User) {
        const offersOfUser = this.firestore.collection<RouteOffer>(`route-offers`,
                ref => ref.where('driver', '==', user.uid));
        return offersOfUser.valueChanges();
    }

    /**
     * WARN: Not tested.
     *
     * It's supposed to check for all those fields to identify
     * the offer in firestore, and updated the document with the retrieved id.
     * Inspired from: https://stackoverflow.com/questions/48809632/angularfire-update-where
     *
     * @param student - the student who matched with the offer
     * @param offer - the matched offer
     */
    assignOfferToStudent(student: User, offer: RouteOffer) {
        const offerQuery = this.firestore.collection(`route-offers`, ref =>
                ref.where('driver', '==', offer.driver)
                    .where('from', '==', offer.from)
                    .where('to', '==', offer.to)
                    .where('routeDate', '==', offer.routeDate)
                    .where('routeTime', '==', offer.routeTime));
        const createdAssignation: RouteAssignation = {
            assigned: true,
            assignee: student.uid
        };

        offerQuery.snapshotChanges().pipe(
            take(1),
            map(changes => {
                changes.map(a => {
                    const id = a.payload.doc.id;
                    this.firestore.collection(`route-offers`).doc<RouteOffer>(id).update({
                        assignation: createdAssignation,
                    });
                });
            }));
    }
}
