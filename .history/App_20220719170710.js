import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AdmissionScreen from "./screens/AdmissionScreen";
import CoursesScreen from "./screens/CoursesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AuthStack from "./Navigations/AuthStack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <AuthStack />
      </TailwindProvider>
    </NavigationContainer>
  );
}
