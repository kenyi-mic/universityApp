import {
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

import WebView from "react-native-webview";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        className="bg-gray-200 w-full flex py-3 items-center"
      >
        <Image
          source={{ uri: "https://ugv.edu.bd/images/webimage/ugv-logo.png" }}
          className="w-11/12 h-14 object-contain"
        />
      </TouchableOpacity>

      <WebView
        source={{ uri: "https://webportal.ugv.edu.bd" }}
        originWhitelist={["webportal.ugv.edu.bd"]}
      />
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
