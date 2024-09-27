import React,{useState} from "react";
import { View, Modal, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CheckBox from "@react-native-community/checkbox";

function Modals(){
  const [modalVisible, setModalVisible] = useState(true);
  return(
    <Modal
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.modalLocation}>
        <View style={styles.container}>
            <View style={styles.Textcontainer}>
              <Text style={styles.Bold25}>로그아웃하시겠습니까?</Text>
              <Text style={styles.Medium15}>메인 화면에서 다시 로그인할 수 있습니다</Text>
              <CheckBox
                value={modalVisible}
                onValueChange={setModalVisible}
                tintColors={{ true: '#4CAF50', false: '#FF0000'}}
              />
            </View>
            <View style={styles.ButtonContainer}>
              <TouchableOpacity onPress={()=>setModalVisible(true)} style={styles.buttonW}><Text style={styles.Medium18B}>No, cancel</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>setModalVisible(true)} style={styles.buttonB}><Text style={styles.Medium18W}>Yes, Confirm</Text></TouchableOpacity>
            </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalLocation: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    backgroundColor: "#ffffff",
    elevation: 10,
    padding: 30,
    borderRadius: 20,
  },
  ButtonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 50,
  },
  Textcontainer: {
    height: 50,
    justifyContent: "space-between"
  },
  buttonW: {
    width: "45%",
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#4F4F4F",
    alignItems: "center",
  },
  buttonB: {
    width: "45%",
    backgroundColor: "#4F4F4F",
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
  },
  check: {
    width: 20,
    height: 20,
    backgroundColor: "#4F4F4F",
    borderRadius: 5,
  },
  Bold25: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4F4F4F",
  },
  Medium15: {
    fontSize: 12,
    fontWeight: "medium",
    color: "#B7B7B7",
  },
  Medium18B: {
    fontSize: 14,
    fontWeight: "medium",
    color: "#4F4F4F",
  },
  Medium18W: {
    fontSize: 14,
    fontWeight: "medium",
    color: "#FFFFFF",
  },
})

export default Modals;