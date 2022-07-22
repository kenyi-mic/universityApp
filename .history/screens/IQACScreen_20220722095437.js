import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import WebView from "react-native-webview";

const IQACScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <WebView source={{ uri: "https://webportal.ugv.edu.bd" }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default IQACScreen;
