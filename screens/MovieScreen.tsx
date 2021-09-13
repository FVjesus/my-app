import * as React from "react";
import { ReactElement, useContext, useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Text, View } from "../components/Themed";
import { MovieContext } from "../contexts/MovieContext";
import { UserContext } from "../contexts/UserContext";
import { MovieService } from "../services/MovieService";
import { MovieBase } from "../types";

export const MovieScreen = (): ReactElement => {
  const [movie, setMovie] = useState<MovieBase>();

  const { user } = useContext(UserContext);
  const { id } = useContext(MovieContext);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        if (id && user) {
          const data = await MovieService.find(id);
          setMovie(data.movie);
        }
      } catch (e) {
        console.log(e);
      }
    };
    loadMovie();
  });

  return (
    <View style={styles.container}>
      <Text>{movie?.title}</Text>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4682B4",
  },
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  input: {
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: 300,
    height: 50,
    padding: 10,
  },
  button: {
    margin: 30,
    backgroundColor: "#B0E0E6",
    borderRadius: 20,
    width: 300,
    height: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  textDescriptionLink: {
    color: "#4B0082",
    fontSize: 14,
    fontWeight: "bold",
  },
});
