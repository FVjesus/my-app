import { Client } from "./Client";

export const StatusService = {
  checkStatus: async (): Promise<string[]> => {
    return Client.get("/status/status");
  },
};
