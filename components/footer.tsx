import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  Text,
  View,
  Image,
} from "react-native";

function Footer(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#000000" : "#FFFFFF",
    color: isDarkMode ? "#FFFFFF" : "#000000",
    flex: 1,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <View style={styles.footerContainer}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footerContainer: {
    width: "100%",
    height: 80,
    borderWidth: 1,
    borderColor: "#6B6B6B",
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});

export default Footer;
