import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./Navigations/AuthStack";
import "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <AuthStack />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
