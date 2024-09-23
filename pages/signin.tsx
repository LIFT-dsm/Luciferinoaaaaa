import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  Text,
  Image,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

function Signin(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  const [selectedImage, setSelectedImage] = useState(null);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#000000" : "#FFFFFF",
    flex: 1,
  };

  const handleSignin = () => {
    Alert.alert("알림", "회원가입 버튼 클릭됨", [
      { text: "확인", onPress: () => console.log("확인 눌림") },
    ]);
  };

  const handleImageSelect = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        includeBase64: false,
      },
      (response) => {
        if (response.didCancel) {
          console.log("사용자가 취소했습니다.");
        } else if (response.errorMessage) {
          console.log("에러: ", response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setSelectedImage(response.assets[0].uri);
        }
      }
    );
  };

  const handleImagePress = () => {
    if (selectedImage) {
      Alert.alert(
        "이미지 삭제",
        "선택한 이미지를 삭제하시겠습니까?",
        [
          {
            text: "취소",
            style: "cancel",
          },
          {
            text: "삭제",
            style: "destructive",
            onPress: () => setSelectedImage(null),
          },
        ],
        { cancelable: true }
      );
    } else {
      handleImageSelect();
    }
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <View style={styles.content}>
        <TouchableOpacity onPress={handleImagePress}>
          <Image
            source={
              selectedImage
                ? { uri: selectedImage }
                : require("../assets/pictureAdd.png")
            }
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={styles.text}>프로필 추가</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.textStyle}>회원가입</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="이름" style={styles.inputStyle}></TextInput>
          <TextInput placeholder="성별" style={styles.inputStyle}></TextInput>
          <TextInput
            placeholder="사는 지역"
            style={styles.inputStyle}
          ></TextInput>
          <TextInput placeholder="아이디" style={styles.inputStyle}></TextInput>
          <TextInput
            placeholder="비밀번호"
            style={styles.inputStyle}
          ></TextInput>
        </View>
        <View style={styles.midMargin}></View>
        <TouchableOpacity style={styles.button} onPress={handleSignin}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    marginTop: 100,
    width: 180,
    height: 180,
    borderRadius: 90,
  },
  text: {
    color: "#BDBDBD",
    marginTop: 10,
    fontSize: 15,
  },
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 20,
    marginRight: 270,
  },
  inputStyle: {
    width: "80%",
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
    marginBottom: 18,
  },
  midMargin: {
    marginTop: 50,
  },
  button: {
    width: "80%",
    height: 48,
    backgroundColor: "#000000",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 170,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default Signin;
