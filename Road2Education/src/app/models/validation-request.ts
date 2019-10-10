import { User } from './users';

interface BaseValidationRequest {
    user: User;
}

export interface DriverValidationRequest extends BaseValidationRequest {
    drivingLicense: File;
    driverPhoto: File;
}

export interface StudentValidationRequest extends BaseValidationRequest {
    school: string;
    class: string;
    schoolDocumentPhoto: File;
}
