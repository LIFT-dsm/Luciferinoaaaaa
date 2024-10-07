import React,{useState} from "react";
import { View, Modal, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import CheckBox from "@react-native-community/checkbox";

function Modals(){
  const [modalVisible, setModalVisible] = useState(true);
  const [a,b] = useState(false)
  return(
    <Modal
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.modalLocation}>
        <View style={styles.container}>
            <View style={styles.Textcontainer}>
              {/*입력받는식으로 입력하는 예시도 2번째는 만약 "*"이 찍혀있으면 그 별은 빨간색으로 표시되게*/}
              <Text style={styles.Bold25}>로그아웃하시겠습니까?</Text>
              <Text style={styles.Medium15}>메인 화면에서 다시 로그인할 수 있습니다</Text>
              {/**안의 Text값을 입력받게 입력받는 예시도 바로 아래에 있는 Text도 한몸 선택 안됐는데 확인버튼 누르면 Check box를 선택해주세요. 나옴 */}
              <View style={styles.checkboxcontainer}>
                <CheckBox
                  value={a}
                  onValueChange={b}
                  tintColors={{ true: '#4F4F4F', false: '#4F4F4F'}}
                  style={styles.check}
                />
                <Text style={styles.Medium18B}>탈퇴합니다</Text>
              </View>
              <Text style={styles.notcheck}>Check box를 선택해주세요.</Text>
            </View>
            {/** */}
            <TextInput
              style={styles.textArea}
              multiline={true}
              numberOfLines={12}
              placeholder=""
            />
            <View style={styles.partycontainer}>
              <View style={styles.partyInfo}>
                <Text style={styles.Medium20}>파티 이름</Text>
                <Text style={styles.Medium20}>날짜</Text>
                <Text style={styles.Medium20}>시간</Text>
                <Text style={styles.Medium20}>지역</Text>
              </View>
              <View style={styles.partyInfo}>
                <Text style={styles.Medium20}>:</Text>
                <Text style={styles.Medium20}>:</Text>
                <Text style={styles.Medium20}>:</Text>
                <Text style={styles.Medium20}>:</Text>
              </View>
              <View style={styles.partyInfo}>
                <Text style={styles.Medium20}>이태윤님의 파티</Text>
                <Text style={styles.Medium20}>2024.10.02</Text>
                <Text style={styles.Medium20}>16:40 ~ 19:50</Text>
                <Text style={styles.Medium20}>대전광역시 유성구</Text>
              </View>
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
    width: "85%",
    backgroundColor: "#fafafa",
    elevation: 10,
    padding: 30,
    borderRadius: 20,
    justifyContent: "space-between",
  },
  ButtonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 30,
  },
  Textcontainer: {
    gap: 6
  },
  checkboxcontainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  partycontainer: {
    flexDirection: "row",
    gap: 3,
  },
  partyInfo: {
    gap: 10,
  },
  buttonW: {
    width: "45%",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#4F4F4F",
    alignItems: "center",
  },
  buttonB: {
    width: "45%",
    backgroundColor: "#4F4F4F",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  check: {
    marginLeft: -6,
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#4F4F4F",
    borderRadius: 5,
    marginTop: 10,
    padding: 12,
    textAlignVertical: 'top',
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
  Medium20: {
    fontSize: 15,
    fontWeight: "medium",
    color: "#4F4F4F"
  },
  notcheck: {
    fontSize: 10,
    color: "#FF0000",
    fontWeight: "medium",
    marginTop: -10,
  }
})

export default Modals;