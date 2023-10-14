import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//import { ParseQuery } from "functions";
export const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3400";
import { auth, tools, notifications, chat, predction } from "./endpoints";
import { BuilderI } from "@/types/redux";

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    credentials: 'include',
  }),
  endpoints: (builder: BuilderI) => ({
    ...auth(builder),
    ...tools(builder),
    ...notifications(builder),
    ...chat(builder),
    ...predction(builder),
    //...user(builder),
  }),
});

export default api;