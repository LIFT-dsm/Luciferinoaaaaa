import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

import AlarmBox from "../components/AlarmBox";

function Alram(){
  return(
    <View style={styles.fullContainer}>
      <Text style={styles.Bold25}>알림</Text>
      <View style={styles.PartyBoxContainer}>
        <AlarmBox/>
        <AlarmBox/>
        <AlarmBox/>
        <AlarmBox/>
        <AlarmBox/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  fullContainer:{
    alignItems: "center",
  },
  Bold25 :{
    marginTop: 20,
    marginBottom: 30,
    color: "#000000",
    fontWeight: "bold",
    fontSize: 25,
  },
  PartyBoxContainer: {
    gap: 10,
  }

})

export default Alram;