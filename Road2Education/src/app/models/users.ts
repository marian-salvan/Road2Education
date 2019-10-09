export interface BaseUser {
    email: string;
    password: string;
}

export interface User extends BaseUser {
    uid: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    type: string;
    validated: boolean;
}
