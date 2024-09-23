import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  Text,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Login from "./pages/login";
// import Signin from "./pages/signin";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#000000" : "#FFFFFF",
    color: isDarkMode ? "#FFFFFF" : "#000000",
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Login />
        {/* <Signin /> */}
      </View>
    </SafeAreaView>
  );
}

export default App;
