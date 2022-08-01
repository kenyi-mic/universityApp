import {
  View,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React from "react";

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Let's get started</Text>
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
