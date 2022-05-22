import { client } from "client";

export const backend = client(process.env.NEXT_PUBLIC_BASE_URL);
