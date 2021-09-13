import React, { createContext, ReactElement, useState } from "react";

export interface IMovieContext {
  id: number | null;
  updateMovie: (id: number | null) => void;
}

export const MovieContext = createContext<IMovieContext>({
  id: null,
  updateMovie: () => null,
});

export const MovieProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [movie, setMovie] = useState<IMovieContext>({
    id: null,
    updateMovie: (id: number | null) => {
      setMovie((state) => ({ ...state, id }));
    },
  });
  return (
    <MovieContext.Provider value={movie}>{children}</MovieContext.Provider>
  );
};
