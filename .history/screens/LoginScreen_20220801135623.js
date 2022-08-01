import {
  View,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { LockClosedIcon, UserIcon } from "react-native-heroicons/outline";

const { width, height } = Dimensions.get("window");
const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View className="flex items-center justify-center ">
          <Image
            style={styles.image}
            source={{ uri: "https://cutt.ly/wZnTjoI" }}
          />

          <Text className="text-xl text-blue-900 font-semibold">
            Enter your student details
          </Text>
          <View className="flex flex-row border border-gray-400 my-5 w-9/12 ">
            <UserIcon color={"blue"} size={40} />
            <TextInput className="text-lg w-3/4" placeholder="Student ID" />
          </View>
          <View className="flex flex-row border border-gray-400 w-9/12">
            <LockClosedIcon color={"blue"} size={40} />
            <TextInput
              className="text-xl font-bold "
              placeholder="........."
              secureTextEntry={true}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",

    height: height,
  },
  image: {
    width: 120,
    height: 120,
    marginVertical: 20,
  },
});

export default LoginScreen;
