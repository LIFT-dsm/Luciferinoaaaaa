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
import { Colors } from "react-native/Libraries/NewAppScreen";

function Login(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#000000" : "#FFFFFF",
    flex: 1,
  };

  const handleLogin = () => {
    Alert.alert("알림", "로그인 버튼 클릭됨", [
      { text: "확인", onPress: () => console.log("확인 눌림") },
    ]);
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/Logo.png")} style={styles.image} />
      </View>
      <View style={styles.midMargin}></View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>로그인</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.loginInput}
          placeholder="아이디"
          placeholderTextColor="#757575"
        />
        <TextInput
          style={[styles.loginInput, styles.inputMargin]}
          placeholder="비밀번호"
          placeholderTextColor="#757575"
          secureTextEntry={true}
        />
        <View style={styles.midMargin}></View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        <View style={styles.rowContainer}>
          <Text style={styles.announceText}>계정이 아직 없으신가요? </Text>
          <Text style={styles.signinText}>회원가입</Text>
        </View>
      </View>
      <View style={styles.bottomMargin}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    marginTop: 80,
    width: 250,
    height: 250,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 20,
    marginLeft: -30,
  },
  textContainer: {
    alignItems: "center",
    marginRight: 290,
  },
  inputContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  loginInput: {
    width: "90%",
    height: 48,
    borderColor: "#757575",
    borderRadius: 25,
    paddingHorizontal: 15,
    backgroundColor: "white",
    shadowColor: "#757575", // iOS 그림자
    shadowOffset: { width: 0, height: 2 }, // iOS 그림자
    shadowOpacity: 0.25, // iOS 그림자
    shadowRadius: 3.84, // iOS 그림자
    elevation: 5, // Android 그림자
  },
  inputMargin: {
    marginTop: 16,
  },
  button: {
    width: "80%",
    height: 48,
    backgroundColor: "#000000",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  announceText: {
    fontSize: 13,
    color: "#868686",
  },
  signinText: {
    fontSize: 13,
    color: "#FECD32",
  },
  midMargin: {
    marginBottom: 45,
  },
  bottomMargin: {
    marginBottom: 140,
  },
  rowContainer: {
    flexDirection: "row",
    marginTop: 24,
  },
});

export default Login;
