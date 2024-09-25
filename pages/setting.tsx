import React from "react";
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
} from "react-native";

function Setting(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

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

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <Text style={[styles.titleText, { color: backgroundStyle.color }]}>
        설정
      </Text>
      <View style={styles.Profile}>
        <View style={styles.textContainer}>
          <Text style={[styles.nickName, { color: backgroundStyle.color }]}>
            nickName
          </Text>
          <Text style={styles.subNickName}>subNickName</Text>
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
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
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
    borderRadius: 20,
    height: 250,
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 8, // 안드로이드용 그림자
    marginRight: 5,
  },
  whiteModeButton: {
    width: "45%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    height: 250,
    shadowColor: "#000000",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 8, //안드로이드용 그림자
    marginLeft: 5,
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
});

export default Setting;
