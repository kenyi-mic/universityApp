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
          <View>
            <UserIcon color={"blue"} size={60} />
            <TextInput placeholder="Student ID" />
          </View>
          <View>
            <LockClosedIcon color={"blue"} size={60} />
            <TextInput placeholder="Student ID" />
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
