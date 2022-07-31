import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import "react-native-gesture-handler";
import AppStack from "./Navigations/AppStack";

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
