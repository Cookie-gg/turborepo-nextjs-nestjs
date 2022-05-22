import api from "~/apis/$api";
import aspida from "@aspida/axios";
import axios, { AxiosInstance } from "axios";

export const client = (baseURL?: string): AxiosInstance => {
  const client = axios.create({
    withCredentials: true,
    baseURL: baseURL || process.env.NEXT_PUBLIC_API_URL,
  });

  return client;
};

export const httpClient = (baseURL?: string) => api(aspida(client(baseURL)));

export type Client = ReturnType<typeof httpClient>;
