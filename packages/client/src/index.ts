import {
  User,
  CreateUserInput,
  UpdateUserInput,
  Auth,
  LoginInput,
} from "~/apis/@types";
import { Backend, backend } from "./backend";

export const client = (baseURL?: string): Backend => {
  return backend(baseURL);
};

export type { User, CreateUserInput, UpdateUserInput, Auth, LoginInput };
