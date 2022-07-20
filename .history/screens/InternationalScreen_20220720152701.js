import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const InternationalScreen = () => {
  return (
    <SafeAreaView className="flex flex-1">
      <View style={styles.container}>
        <WebView source={{ uri: "https://int.ugv.edu.bd/" }} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default InternationalScreen;
