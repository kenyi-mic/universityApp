import {
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from "react-native";
import React from "react";

import WebView from "react-native-webview";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const renderLoadingView = () => (
    <View style={styles.loadView}>
      <ActivityIndicator size="large" color={"blue"} />
    </View>
  );
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
        startInLoadingState
        renderLoading={renderLoadingView}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  loadView: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ProfileScreen;
