import {
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
  Image,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import WebView from "react-native-webview";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View className="bg-gray-200 w-full flex  items-center">
        <Image
          source={{ uri: "https://ugv.edu.bd/images/webimage/ugv-logo.png" }}
          className="w-11/12 h-14 object-contain"
        />
      </View>

      <WebView source={{ uri: "https://webportal.ugv.edu.bd" }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
export default ProfileScreen;
