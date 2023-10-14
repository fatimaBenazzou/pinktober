declare interface UserAuthI {
    username: string;
    password: string;
    stay: boolean;
}

declare interface UserBaseI extends Omit<UserAuthI, "stay"> {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
}
declare interface UserI extends Omit<UserAuthI, "password" | "stay"> {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;

    dateOfBirth: Date;
    enabled: boolean;
    deviceTokens: string[];
    address: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    };
    Accounts: {
        Current?: string;
        Savings?: string;
        Investment?: string;
        TermDeposit?: string;
    };
}
