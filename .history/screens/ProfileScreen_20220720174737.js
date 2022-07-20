import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import WebView from "react-native-webview";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <WebView source={{ uri: "" }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default ProfileScreen;
