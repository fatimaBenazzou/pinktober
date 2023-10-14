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

declare interface FormInfo {
    radius_mean: string;
    texture_mean: string;
    smoothness_mean: string;
    compactness_mean: string;
    concavity_mean: string;
    symmetry_mean: string;
    radius_se: string;
    texture_se: string;
    smoothness_se: string;
    compactness_se: string;
    concavity_se: string;
    concave_points_se: string;
    symmetry_se: string;
    fractal_dimension_se: string;
    smoothness_worst: string;
    compactness_worst: string;
    concavity_worst: string;
    concave_points_worst: string;
    symmetry_worst: string;
    fractal_dimension_worst: string;
    fractal_dimension_mean: string;
}
