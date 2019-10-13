import { firestore } from 'firebase';

export interface RoutePoint {
    description: string;
    place_id: string;
}

export interface RepeatingDay {
    repeating: boolean;
    day: string;
}

export interface RouteAssignation {
    assigned: boolean;
    assignee: string;
}

export interface BaseRoute {
    from: RoutePoint;
    to: RoutePoint;
    repeat: boolean;
    repeatDays: RepeatingDay[];
    routeTime: string;
    numberOfSeats: number;
    details: string;
    assignation?: RouteAssignation;
}

export interface RouteOffer extends BaseRoute {
    driver: string;
    routeDate: firestore.Timestamp;
}

export interface RouteRequest extends BaseRoute {
    student: string;
    returnRide: boolean;
    returnTime: string;
}
