/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  RegisterMovie: undefined;
  Home: undefined;
  Movie: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  updated_at: string;
  created_at: string;
};

export type LoginReturn = {
  user: User;
};

export type MovieBase = {
  id: number;
  title: string;
  description: string;
  image: string;
  overview: string;
  updated_at: string;
  created_at: string;
};

export type CreateMovieReturn = {
  movie: MovieBase;
};

export type CreateFavoriteReturn = {
  id: number;
  fk_user: number;
  fk_movie: number;
  updated_at: string;
  created_at: string;
};

export type GetMoviesReturn = {
  movies: MovieBase[];
};

export type FindMovieReturn = {
  movie: MovieBase;
};
