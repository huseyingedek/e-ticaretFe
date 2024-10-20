//Login
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const USER_INFO = "USER_INFO";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address?: {
        addressLine1: string;
        addressLine2?: string;
        city: string;
        postalCode: string;
    };
    orders?: {
        orderNumber: string;
        productName: string;
        orderDate: string;
    }[];
}