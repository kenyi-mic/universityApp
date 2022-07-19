import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AdmissionScreen from "./screens/AdmissionScreen";
import CoursesScreen from "./screens/CoursesScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Admission" component={AdmissionScreen} />
          <Stack.Screen name="Courses" component={CoursesScreen} />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerTitle: "Student Portal",
            }}
          />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
