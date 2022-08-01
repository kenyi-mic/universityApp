import { View, Text, Platform, StatusBar, StyleSheet } from "react-native";
import React from "react";

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default LoginScreen;
