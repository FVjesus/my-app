import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { StatusService } from "../services/StatusService";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [status, setStatus] = useState<string>();

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
});
