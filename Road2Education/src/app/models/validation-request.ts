import { User } from './users';

interface BaseValidationRequest {
    user: User;
}

export abstract class ValidationRequestStatus {
    static Pending = 'pending';
    static Rejected = 'rejected';
    static Approved = 'approved';
}

export interface DriverValidationRequest extends BaseValidationRequest {
    drivingLicense: File;
    driverPhoto: File;
}

export interface StudentValidationRequest extends BaseValidationRequest {
    school: string;
    class: string;
    gradebook: File;
}

export interface BaseSubmittedValidationRequest {
    user_id: string;
    user_type: string;
    status?: ValidationRequestStatus;
}

export interface DriverSubmittedValidationRequest extends BaseSubmittedValidationRequest {
    drivingLicenseId: string;
    driverPhotoId: string;
}

export interface StudentSubmittedValidationRequest extends BaseSubmittedValidationRequest {
    school: string;
    class: string;
    gradebookId: string;
}
