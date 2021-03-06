import * as React from "react";
import { ReactElement } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { MovieContext } from "../contexts/MovieContext";

import { MovieBase } from "../types";
import { Text } from "./Themed";

export interface IMovieItemProps {
  movie: MovieBase;
  navigation: any;
}

export const MovieItem = ({
  movie,
  navigation,
}: IMovieItemProps): ReactElement => {
  const { updateMovie } = React.useContext(MovieContext);

  const handleClick = () => {
    updateMovie(movie.id);
    navigation.navigate("Movie");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <Image
        style={styles.movieImage}
        source={{
          uri: movie.image,
        }}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.description}>{movie.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: 280,
    borderRadius: 10,
    height: 80,
    elevation: 15,
    backgroundColor: "white",
  },
  movieImage: {
    width: 70,
    height: 70,
    borderRadius: 5,
    margin: 5,
  },
  title: {
    position: "absolute",
    left: 100,
    fontSize: 15,
    fontWeight: "bold",
  },
  description: {
    position: "relative",
    left: 85,
    top: -55,
    fontSize: 12,
    color: "grey",
  },
});
