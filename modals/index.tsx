import React, { useState } from 'react';
import { View, Modal, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

interface ModalsProps {
  type: 'partymake' | 'partydelete' | 'partyout' | 'out' | 'declaration' | null;
  partyName?: string;
  partyDate?: string;
  startTime?: string;
  endTime?: string;
  location?: string;
  title?: string;
  infoMessage?: string;
}

const Modals: React.FC<ModalsProps> = ({
  type,
  partyName = '',
  partyDate = '',
  startTime = '',
  endTime = '',
  location = '',
  title = '제목',
  infoMessage = '*내용',
}) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [a, setA] = useState(false);

  const renderTextWithAsterisk = (text: string) => {
    const parts = text.split('*');
    return (
      <Text style={styles.Medium15}>
        {parts.map((part, index) => (
          <Text key={index}>
            {part}
            {index < parts.length - 1 && <Text style={{ color: 'red' }}>*</Text>}
          </Text>
        ))}
      </Text>
    );
  };

  const handleConfirm = () => {
    if ((type === 'partyout' || type === 'out') && !a) {
    } else {
      setModalVisible(false);
    }
  };

  return (
    <Modal
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.modalLocation}>
        <View style={styles.container}>
          <View style={styles.Textcontainer}>
            <Text style={styles.Bold25}>{title}</Text>
            {renderTextWithAsterisk(infoMessage)}
          </View>

          {(type === 'partyout' || type === 'out') && (
            <View style={styles.checkboxcontainer}>
              <CheckBox
                value={a}
                onValueChange={setA}
                tintColors={{ true: '#4F4F4F', false: '#4F4F4F' }}
                style={styles.check}
              />
              <Text style={styles.Medium18B}>탈퇴합니다</Text>
            </View>
          )}

          {(!a && (type === 'partyout' || type === 'out')) && (
            <Text style={styles.notcheck}>Check box를 선택해주세요.</Text>
          )}
          {type === 'declaration' && (
            <TextInput
              style={styles.textArea}
              multiline={true}
              numberOfLines={12}
              placeholder=""
            />
          )}

          {(type === 'partymake' || type === 'partydelete') && (
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
                <Text style={styles.Medium20}>{partyName}님의 파티</Text>
                <Text style={styles.Medium20}>{partyDate}</Text>
                <Text style={styles.Medium20}>{startTime} ~ {endTime}</Text>
                <Text style={styles.Medium20}>{location}</Text>
              </View>
            </View>
          )}

          {/* <View>
            <Text style={styles.SemiBold10}>참여 중인 멤버</Text>
            <View>
              <View>
                <Image source={require('../assets/Profile.png')} />
              </View>
            </View>
          </View> */}

          <View style={styles.ButtonContainer}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.buttonW}>
              <Text style={styles.Medium18B}>No, cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleConfirm} style={styles.buttonB}>
              <Text style={styles.Medium18W}>Yes, Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

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
    gap: 6,
  },
  checkboxcontainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
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
  imagecontiner: {},
  Bold25: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4F4F4F",
  },
  SemiBold10: {
    fontSize: 10,
    fontWeight: "semibold",
    color: "#B7B7B7",
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
    color: "#4F4F4F",
  },
  notcheck: {
    fontSize: 10,
    color: "#FF0000",
    fontWeight: "medium",
    marginTop: -10,
  }
});

export default Modals;
