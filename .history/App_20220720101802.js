import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStack from "./Navigations/AppStack";
import "react-native-gesture-handler";
import AuthStack from "./Navigations/AuthStack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <AppStack />
      </TailwindProvider>
    </NavigationContainer>
  );
}
