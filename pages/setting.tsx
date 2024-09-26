import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  useColorScheme,
  Linking,
  Platform,
  Switch,
  Alert,
} from "react-native";

function Setting(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  const [isEnabled, setIsEnabled] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#000000" : "#FFFFFF",
    color: isDarkMode ? "#FFFFFF" : "#000000",
    flex: 1,
  };

  const openSettings = () => {
    if (Platform.OS === "ios") {
      Linking.openURL("App-Prefs:root=General");
    } else if (Platform.OS === "android") {
      Linking.openSettings();
    }
  };

  const toggleSwitch = () => {
    setIsEnabled((previousState) => {
      const newState = !previousState;
      Alert.alert("알림", newState ? "알림이 켜졌습니다" : "알림이 꺼졌습니다");
      return newState;
    });
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <Text style={[styles.titleText, { color: backgroundStyle.color }]}>
        설정
      </Text>
      <View style={styles.Profile}>
        <View style={styles.textContainer}>
          <Text style={[styles.nickName, { color: backgroundStyle.color }]}>
            nickname
          </Text>
          <Text style={styles.subNickName}>subnickname</Text>
        </View>
        <View style={styles.profileImage}></View>
      </View>
      <View style={styles.backGroundMode}>
        <TouchableOpacity style={styles.darkModeButton} onPress={openSettings}>
          <View style={styles.darkContainer}>
            <Image
              source={require("../assets/moon.png")}
              style={styles.darkImage}
            />
            <Text style={styles.darkText}>dark{"\n"}mode</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.whiteModeButton} onPress={openSettings}>
          <View style={styles.whiteContainer}>
            <Image
              source={require("../assets/sun.png")}
              style={styles.lightImage}
            />
            <Text style={styles.whiteText}>light{"\n"}mode</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.buttons, styles.firstButton]}>
        <Text style={[styles.buttonsText, { color: backgroundStyle.color }]}>
          문제 신고
        </Text>
      </TouchableOpacity>
      <View style={[styles.buttons, styles.secondButton, styles.noBorderTop]}>
        <View style={styles.switchContainer}>
          <Text style={[styles.buttonsText, { color: backgroundStyle.color }]}>
            알림 설정
          </Text>
          <Switch
            trackColor={{
              false: isDarkMode ? "#757575" : "#FFFFFF",
              true: isDarkMode ? "#757575" : "#000000",
            }}
            thumbColor={
              isEnabled
                ? isDarkMode
                  ? "#FFFFFF"
                  : "#FFFFFF"
                : isDarkMode
                ? "#000000"
                : "#FFFFFF"
            }
            ios_backgroundColor="#FFFFFF"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[styles.buttons, styles.thirdButton, styles.noBorderTop]}
      >
        <Text style={[styles.buttonsText, { color: backgroundStyle.color }]}>
          비밀번호 변경
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomButton}>
        <Text style={styles.bottomText}>로그아웃</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomButton}>
        <Text style={styles.bottomText}>회원탈퇴</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    marginTop: 40,
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
  },
  Profile: {
    marginTop: 40,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    width: "90%",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  nickName: {
    fontSize: 20,
    fontWeight: "800",
    textAlign: "left",
  },
  subNickName: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: "500",
    color: "#6B6B6B",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#000000",
  },
  backGroundMode: {
    marginTop: 40,
    flexDirection: "row",
  },
  darkModeButton: {
    width: "45%",
    backgroundColor: "#000000",
    height: 250,
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 8,
    marginRight: 5,
    borderRadius: 20,
  },
  whiteModeButton: {
    width: "45%",
    backgroundColor: "#FFFFFF",
    height: 250,
    shadowColor: "#000000",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 8,
    marginLeft: 5,
    borderRadius: 20,
  },
  darkText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
    marginTop: 40,
  },
  whiteText: {
    fontSize: 28,
    fontWeight: "800",
    marginTop: 40,
  },
  darkImage: {
    width: 50,
    height: 50,
  },
  lightImage: {
    width: 50,
    height: 50,
  },
  darkContainer: {
    marginTop: 40,
    marginLeft: 30,
  },
  whiteContainer: {
    marginTop: 40,
    marginLeft: 30,
  },
  buttons: {
    width: "90%",
    height: 45,
    borderWidth: 1,
    borderColor: "#6B6B6B",
    justifyContent: "center",
    padding: 10,
  },
  noBorderTop: {
    borderTopWidth: 0,
  },
  firstButton: {
    marginTop: 35,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  secondButton: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  thirdButton: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  buttonsText: {
    fontSize: 17,
    paddingLeft: 10,
    fontWeight: "600",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  bottomButton: {
    marginTop: 20,
    width: "90%",
    height: 45,
    borderWidth: 1,
    borderColor: "#6B6B6B",
    justifyContent: "center",
    borderRadius: 8,
  },
  bottomText: {
    color: "#FF0000",
    fontSize: 17,
    fontWeight: "600",
    paddingLeft: 18,
  },
});

export default Setting;
