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
        <View>
          <View className="flex flex-row">
            <UserIcon color={"blue"} size={40} />
            <TextInput placeholder="Student ID" returnKeyType="text" />
          </View>
          <View>
            <LockClosedIcon color={"blue"} size={40} />
            <TextInput placeholder="Student ID" returnKeyType="password" /> />
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
