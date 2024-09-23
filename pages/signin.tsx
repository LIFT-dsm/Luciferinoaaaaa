import React from "react";
import { SafeAreaView, StyleSheet, useColorScheme, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function Signin(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <Text>asdf</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Signin;
