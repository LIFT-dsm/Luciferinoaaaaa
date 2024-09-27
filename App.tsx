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
import Signup from "./pages/signup";
import Setting from "./pages/setting";
import Partyadd from "./pages/partyadd";
import Main from "./pages/main";
import Search from "./pages/search";
import Alram from "./pages/alarm";
import Modals from "./modals";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#000000" : "#FFFFFF",
    color: isDarkMode ? "#FFFFFF" : "#000000",
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
        {/* <Login /> */}
        {/* <Signup /> */}
        {/* <Setting/> */}
        {/* <Partyadd/> */}
        {/* <Main/> */}
        {/* <Search/> */}
        {/* <Alram/> */}
        <Modals/>
    </View>
  );
}

export default App;
