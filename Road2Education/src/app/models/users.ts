export interface BaseUser {
    email: string;
    password: string;
}

export interface User extends BaseUser {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    type: string;
}