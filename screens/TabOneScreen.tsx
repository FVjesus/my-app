import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import { UserContext } from "../contexts/UserContext";
import { StatusService } from "../services/StatusService";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [status, setStatus] = useState<string>();
  const { updateUser } = useContext(UserContext);

  useEffect(() => {
    const loadStatus = async () => {
      try {
        const data = await StatusService.checkStatus();
        setStatus(data[0]);
      } catch (e) {
        console.log(e);
      }
    };
    loadStatus();
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text>{status}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TouchableOpacity style={styles.button} onPress={() => updateUser(null)}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
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
});
