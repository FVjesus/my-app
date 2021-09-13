import { LoginReturn } from "../types";
import { Client } from "./Client";

export const UserService = {
  login: async (email: string, password: string): Promise<LoginReturn> => {
    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    return Client.post("/user/login", formData);
  },
  save: async (
    email: string,
    password: string,
    name: string
  ): Promise<LoginReturn> => {
    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);
    formData.append("name", name);

    return Client.post("/user/save-user", formData);
  },
};
