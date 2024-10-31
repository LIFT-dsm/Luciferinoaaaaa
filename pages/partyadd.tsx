import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface PartyTime {
  startTime: number;
  endTime: number;
}

function Partyadd(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  const [partyTime, setPartyTime] = useState<PartyTime>({
    startTime: 0,
    endTime: 0,
  });
  const [isStartPickerVisible, setStartPickerVisibility] = useState(false);
  const [isEndPickerVisible, setEndPickerVisibility] = useState(false);

  const formatTime = (time: number) => {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}`;
  };

  const showStartPicker = () => {
    setStartPickerVisibility(true);
  };

  const showEndPicker = () => {
    setEndPickerVisibility(true);
  };

  const handleStartConfirm = (time: Date) => {
    setPartyTime((prev) => ({ ...prev, startTime: time.getTime() }));
    setStartPickerVisibility(false);
  };

  const handleEndConfirm = (time: Date) => {
    setPartyTime((prev) => ({ ...prev, endTime: time.getTime() }));
    setEndPickerVisibility(false);
  };
  const hideStartPicker = () => {
    setStartPickerVisibility(false);
  };

  const hideEndPicker = () => {
    setEndPickerVisibility(false);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#000000" : "#FFFFFF",
    flex: 1,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <Text style={styles.titleText}>파티를 만들어보세요</Text>
      <Text style={styles.subtitleText}>
        파티는 나와 함께할 사람을 모으는 공간입니다.{"\n"} 내 파티를 만들고
        대화를 시작해보세요.
      </Text>
      <View style={styles.midMargin} />
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>파티 이름</Text>
        <TextInput
          placeholder="파티 이름을 입력하세요"
          style={styles.inputStyle}
        />
        <Text style={styles.inputText}>날짜</Text>
        <TextInput
          placeholder="2024.04.09"
          style={styles.inputStyle}
          keyboardType="numeric"
        />
        <Text style={styles.inputText}>시간</Text>
        <View style={styles.timeContainer}>
          <TouchableOpacity onPress={showStartPicker} style={styles.timeView}>
            <Text>
              {partyTime.startTime
                ? formatTime(partyTime.startTime)
                : "시작 시간"}
            </Text>
          </TouchableOpacity>
          <Text style={styles.timeMid}>~</Text>
          <TouchableOpacity onPress={showEndPicker} style={styles.timeView}>
            <Text>
              {partyTime.endTime ? formatTime(partyTime.endTime) : "종료 시간"}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.inputText}>지역</Text>
        <TextInput style={styles.inputStyle} placeholder="지역을 입력하세요." />
        <View style={styles.bottonMargin} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>파티 만들기</Text>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isStartPickerVisible}
        mode="time"
        onConfirm={handleStartConfirm}
        onCancel={hideStartPicker}
        locale="ko_KR"
      />
      <DateTimePickerModal
        isVisible={isEndPickerVisible}
        mode="time"
        onConfirm={handleEndConfirm}
        onCancel={hideEndPicker}
        locale="ko_KR"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  titleText: {
    marginTop: 100,
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
  },
  subtitleText: {
    marginTop: 8,
    textAlign: "center",
    color: "#6B6B6B",
  },
  midMargin: {
    marginTop: 50,
  },
  inputText: {
    color: "#6B6B6B",
    marginBottom: 8,
    marginTop: 20,
    alignSelf: "flex-start",
    paddingLeft: 24,
    width: "90%",
  },
  inputStyle: {
    width: "90%",
    height: 48,
    borderColor: "#000000",
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  timeView: {
    width: "37%",
    height: 48,
    borderColor: "#000000",
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    textAlign: "center",
  },
  inputBox: {
    alignItems: "center",
    flex: 1,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  timeMid: {
    fontSize: 40,
  },
  button: {
    width: "90%",
    height: 45,
    borderWidth: 1,
    borderColor: "#6B6B6B",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    includeFontPadding: false, // Android 패딩 제거
    paddingVertical: 0,
  },
  bottonMargin: {
    marginTop: 120,
  },
});

export default Partyadd;
