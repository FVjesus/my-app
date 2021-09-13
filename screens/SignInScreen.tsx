import * as React from "react";
import { ReactElement, useContext, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Text, View } from "../components/Themed";
import { UserContext } from "../contexts/UserContext";
import { UserService } from "../services/UserService";

export const SignInScreen = (): ReactElement => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { updateUser } = useContext(UserContext);

  const handleSignIn = async () => {
    try {
      if (email && password) {
        const data = await UserService.login(email, password);
        updateUser(data.user);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#63C2D1",
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
    marginTop: 30,
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
});
