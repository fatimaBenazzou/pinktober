import { CorsOptions } from "cors";
//import { ORIGINS } from "../config/CheckableEnv";

export const ProductionCors: CorsOptions = {
    origin: (origin, callback) => {
        /* const origin_accepted = origin && origin.match((ORIGINS ?? origin) + "$");
        if (origin_accepted) {
            callback(null, origin);
        } else {
            callback(new Error("Request's origin not accepted."));
        } */
        callback(null, origin);
    },
    credentials: true,
};
export const DevCors: CorsOptions = {
    origin: (origin, callback) => {
        callback(null, origin);
    },
    credentials: true,
};
