import * as React from "react";
import { ReactElement, useContext, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { MovieItem } from "../components/MovieItem";
import { View, Text } from "../components/Themed";
import { UserContext } from "../contexts/UserContext";
import { MovieService } from "../services/MovieService";
import { MovieBase } from "../types";

import logo2 from "../assets/images/logo2.png";

export const HomeScreen = ({ navigation }: any): ReactElement => {
  const [movies, setMovies] = useState<MovieBase[]>([]);
  const { user, updateUser } = useContext(UserContext);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        if (user) {
          const data = await MovieService.get(user.id);
          setMovies(data.movies);
        }
      } catch (e) {
        console.log(e);
      }
    };
    loadMovies();
  });

  return (
    <View style={styles.container}>
      <Image source={logo2} style={styles.logo} />
      <Text numberOfLines={2} style={styles.title}>
        Olá {user?.name}
      </Text>
      <TouchableOpacity style={styles.logout} onPress={() => updateUser(null)}>
        <Icon name="logout" size={25} color="white" />
      </TouchableOpacity>

      <View style={styles.listArea}>
        {movies.map((item, key) => (
          <MovieItem key={key} movie={item} navigation={navigation} />
        ))}
      </View>
      <TouchableOpacity
        style={styles.addMovie}
        onPress={() => navigation.navigate("RegisterMovie")}
      >
        <Icon name="add-circle" size={60} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#4682B4",
  },
  title: {
    top: 50,
    left: 50,
    width: 250,
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  listArea: {
    marginTop: 80,
    marginBottom: 20,
    backgroundColor: "#4682B4",
  },
  logout: {
    position: "absolute",
    top: 55,
    right: 20,
  },
  addMovie: {
    position: "absolute",
    left: 20,
    bottom: 40,
    elevation: 15,
  },
  logo: {
    position: "absolute",
    width: 60,
    height: 60,
    top: 35,
    left: 0,
  },
});
