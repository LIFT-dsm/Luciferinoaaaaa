import React from "react";
import { SafeAreaView, StyleSheet, useColorScheme, Text } from "react-native";

function Partyadd(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

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
});

export default Partyadd;
