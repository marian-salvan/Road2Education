import { User } from './users';

interface BaseValidationRequest {
    user: User;
}

export interface DriverValidationRequest extends BaseValidationRequest {
    drivingLicense: File;
    driverPhoto: File;
}
