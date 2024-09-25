import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import Box from "../components/Box";

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
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="search party name, code or area"
          style={styles.input}
        />
        <Image source={require("../assets/Search.png")} style={styles.search} />
      </View>
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
    fontWeight: "700",
    color: "#000000",
  },
  Medium: {
    fontSize: 12,
    fontWeight: "500",
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
  inputContainer: {
    width: "90%",
    position: "relative",
  },
  input: {
    marginTop: 10,
    width: "100%",
    height: 46,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 30,
    paddingHorizontal: 45,
  },
  search: {
    position: "absolute",
    top: 22,
    marginLeft: 15,
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
