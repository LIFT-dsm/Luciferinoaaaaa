import React from "react";
import {View, TextInput, StyleSheet, Image} from "react-native";

function Input(){
    return(
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="search party name, code or area"
          style={styles.input}
        />
        <Image source={require("../../assets/Search.png")} style={styles.search} />
        </View>
    )
}

const styles = StyleSheet.create({
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
  inputContainer: {
    width: "90%",
    position: "relative",
  },
})

export default Input;