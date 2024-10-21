import React, { useState } from "react";
import {
  StyleSheet,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

function Navigation(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  const [isAlarmClicked, setIsAlarmClicked] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isHomeClicked, setIsHomeClicked] = useState(false);
  const [isPlusClicked, setIsPlusClicked] = useState(false);
  const [isSettingClicked, setISSettingClicked] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#000000" : "#FFFFFF",
  };

  const footerContainerStyle = {
    borderTopColor: isDarkMode ? "#FFFFFF" : "#000000",
  };

  const alarmImageSource = isAlarmClicked
    ? isDarkMode
      ? require("../assets/dark_click/alarm_dark_click.png")
      : require("../assets/click/alarm_click.png")
    : require("../assets/normal/alarm_normal.png");

  const searchImageSource = isSearchClicked
    ? isDarkMode
      ? require("../assets/dark_click/search_dark_click.png")
      : require("../assets/click/search_click.png")
    : require("../assets/normal/search_normal.png");

  const homeImageSource = isHomeClicked
    ? isDarkMode
      ? require("../assets/dark_click/home_dark_click.png")
      : require("../assets/click/home_click.png")
    : require("../assets/normal/home_normal.png");

  const plusImageSource = isPlusClicked
    ? isDarkMode
      ? require("../assets/dark_click/plus_dark_click.png")
      : require("../assets/click/plus_click.png")
    : require("../assets/normal/plus_normal.png");

  const settingImageSource = isSettingClicked
    ? isDarkMode
      ? require("../assets/dark_click/setting_dark_click.png")
      : require("../assets/click/setting_click.png")
    : require("../assets/normal/setting_normal.png");

  return (
    <View style={[backgroundStyle, styles.container]}>
      <View style={[styles.footerContainer, footerContainerStyle]}>
        <TouchableOpacity onPress={() => setIsHomeClicked(!isHomeClicked)}>
          <Image source={homeImageSource} style={styles.normalImage} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsSearchClicked(!isSearchClicked)}>
          <Image source={searchImageSource} style={styles.normalImage} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsPlusClicked(!isPlusClicked)}>
          <Image source={plusImageSource} style={styles.normalImage} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsAlarmClicked(!isAlarmClicked)}>
          <Image source={alarmImageSource} style={styles.normalalarmImage} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setISSettingClicked(!isSettingClicked)}
        >
          <Image source={settingImageSource} style={styles.normalImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 55,
    backgroundColor: "#FFFFFF",
    marginBottom: 22,
  },
  footerContainer: {
    width: "100%",
    height: 55,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 45,
  },
  normalImage: {
    width: 25,
    height: 25,
  },
  normalalarmImage: {
    width: 25,
    height: 30,
  },
});

export default Navigation;
