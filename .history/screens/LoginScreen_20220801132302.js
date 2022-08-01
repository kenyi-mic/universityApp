import {
  View,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
import { LockClosedIcon, UserIcon } from "react-native-heroicons/outline";

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View className="justify-center ">
          <View className="flex flex-row border border-gray-400 my-5">
            <UserIcon color={"blue"} size={40} />
            <TextInput placeholder="Student ID" returnKeyType="text" />
          </View>
          <View className="flex flex-row border border-gray-400">
            <LockClosedIcon color={"blue"} size={40} />
            <TextInput placeholder="12345678" secureTextEntry={true} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default LoginScreen;
