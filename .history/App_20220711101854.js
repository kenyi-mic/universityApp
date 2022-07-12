import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </TailwindProvider>
    </NavigationContainer>
  );
}
