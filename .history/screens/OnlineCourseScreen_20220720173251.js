import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const OnlineCourseScreen = () => {
  return (
    <SafeAreaView style={styles.container} className="flex flex-1">
      <WebView source={{ uri: "https://ugvedu.com/" }} />
      <View className="absolute bottom-20">
        <Text>Hello Home page</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default OnlineCourseScreen;
