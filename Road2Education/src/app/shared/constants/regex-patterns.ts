// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
export const PASSWORD_REGEX : string = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
export const PHONE_REGEX : string = "[0-9]{1}[0-9]{9}";
