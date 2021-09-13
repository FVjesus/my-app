import {
  CreateFavoriteReturn,
  CreateMovieReturn,
  FindMovieReturn,
  GetMoviesReturn,
} from "../types";
import { Client } from "./Client";

export const MovieService = {
  create: async (
    title: string,
    description: string,
    image: string,
    overview: string
  ): Promise<CreateMovieReturn> => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("overview", overview);

    return Client.post("/movie/create", formData);
  },
  createFavorite: async (
    movieId: number,
    userId: number
  ): Promise<CreateFavoriteReturn> => {
    const formData = new FormData();

    formData.append("movieId", movieId.toString());
    formData.append("userId", userId.toString());

    return Client.post("/movie/create-favorite", formData);
  },
  get: async (userId: number): Promise<GetMoviesReturn> =>
    Client.get(`/movie/get-movies`, { userId }),
  find: async (id: number): Promise<FindMovieReturn> =>
    Client.get("/movie/find", { id }),
};
