import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";

import Input from "../components/Input";
import Box from "../components/PartyBox";

export function Main() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/WhiteCurver.png")}
        style={styles.cover}
      />
      <View style={styles.user}>
        <View>
          <Text style={styles.Bold}>nickname</Text>
          <Text style={styles.Medium}>sub nickname</Text>
        </View>
        <Image
          source={require("../assets/Profile.png")}
          style={styles.profileImage}
        />
      </View>
      <Input/>
      <View style={styles.boxMargin}>
        <Text style={styles.Bold}>Join Party List</Text>
        <Box />
        <Box />
        <Box />
        <Box />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  cover: {
    width: "100%",
    height: 140,
  },
  user: {
    flexDirection: "row",
    justifyContent: "center",
  },
  Bold: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
  },
  Medium: {
    fontSize: 12,
    fontWeight: "medium",
    color: "#737373",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 24.5,
    borderWidth: 0.5,
    borderColor: "#000000",
    marginLeft: "50%",
  },
  textcontainer: {
    flexDirection: "column",
  },
  boxMargin: {
    marginTop: "15%",
    gap: 10,
  },
});

export default Main;
