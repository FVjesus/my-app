import * as React from "react";
import { ReactElement, useContext, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Text, View } from "../components/Themed";
import { UserContext } from "../contexts/UserContext";
import { UserService } from "../services/UserService";

export const RegisterScreen = ({ navigation }: any): ReactElement => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [name, setName] = useState<string>("");
  const { updateUser } = useContext(UserContext);

  const handleRegister = async () => {
    try {
      if (email && password) {
        const data = await UserService.save(email, password, name);
        updateUser(data.user);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.textButton}>Criar conta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.textDescriptionLink}>Já tenho conta!</Text>
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
