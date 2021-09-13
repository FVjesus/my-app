import * as React from "react";
import { ReactElement, useContext, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { UserContext } from "../contexts/UserContext";
import { MovieService } from "../services/MovieService";

import logo1 from "../assets/images/logo1.png";

export const RegisterMovieScreen = ({ navigation }: any): ReactElement => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [image, setImage] = useState<string>();
  const [overview, setOverview] = useState<string>();

  const { user } = useContext(UserContext);

  const handleCreate = async () => {
    try {
      if (title && description && image && overview && user) {
        const data = await MovieService.create(
          title,
          description,
          image,
          overview
        );
        await MovieService.createFavorite(data.movie.id, user.id);
        navigation.navigate("Root");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo1} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Titulo"
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descição"
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Poster Url"
        onChangeText={setImage}
      />
      <TextInput
        style={styles.input}
        placeholder="Visão Geral"
        onChangeText={setOverview}
      />
      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.textButton}>Adicionar Filme</Text>
      </TouchableOpacity>
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
    fontSize: 20,
    position: "absolute",
    top: 40,
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
    fontSize: 12,
  },
  logo: {
    width: 250,
    height: 200,
  },
});
