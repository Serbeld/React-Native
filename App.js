import "react-native-gesture-handler";
import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navigation/NavigationStack";
import NavigationTab from "./src/navigation/NavigationTabs";
import NavigationDrawer from "./src/navigation/NavigationDrawer";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <NavigationContainer>
      {/* <NavigationStack/> */}
      {/* <NavigationTab /> */}
      <NavigationDrawer />
      {/* <HomeScreen /> */}
    </NavigationContainer>
  );
}