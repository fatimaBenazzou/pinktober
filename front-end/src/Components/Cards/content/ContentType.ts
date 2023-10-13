export default interface ContentType {
    congratulation: {
        congrats: string;
        error: string;
        link: string;
    };
    shipment: {
        error: string;
        name: string;
        sender: {
            BM: string;
            RAN: string;
        };
        phone: string;
        province: string;
        city: string;
        postalCode: string;
        addresses: string;
    };
    switch: string;
}
