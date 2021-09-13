import { LoginReturn } from "../types";
import { Client } from "./Client";

export const UserService = {
  login: async (email: string, password: string): Promise<LoginReturn> => {
    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    return Client.post("/user/login", formData);
  },
};
