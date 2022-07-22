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
      <WebView source={{ uri: "https://iqac.ugv.edu.bd/" }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default IQACScreen;
