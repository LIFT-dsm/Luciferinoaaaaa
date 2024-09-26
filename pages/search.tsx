import React from "react";
import {
  StyleSheet,
  View
} from "react-native";

import Input from "../components/Input";
import PartyBox from "../components/PartyBox";

function Search(){
  return(
    <View style={styles.fullContainer}>
      <View style={styles.inputMargin}>
        <Input/>
      </View>
      <View style={styles.PartyBoxContainer}>
        <PartyBox/>
        <PartyBox/>
        <PartyBox/>
        <PartyBox/>
        <PartyBox/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  fullContainer: {
    alignItems: 'center',
  },
  inputMargin: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 70,
  },
  PartyBoxContainer: {
    gap: 10,
  },
})

export default Search;