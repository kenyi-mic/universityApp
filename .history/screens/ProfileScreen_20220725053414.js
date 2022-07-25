import {
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import React from "react";

import WebView from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
import { MenuIcon } from "react-native-heroicons/outline";

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

      <TouchableOpacity
        style={styles.menuIcon}
        className="absolute right-6 top-24 z-10"
      >
        <MenuIcon size={30} color={"gray"} />
      </TouchableOpacity>

      <WebView
        source={{ uri: "https://webportal.ugv.edu.bd" }}
        startInLoadingState
        renderLoading={renderLoadingView}
      />
      <Text className="font-italic text-center text-gray-100 py-5 bg-blue-900 border-t w-full border-gray-300 ">
        Check our website: ugv.edu.bd/
      </Text>
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
  menuIcon: {
    position: "absolute",
    right: 6.5,
    top: 23.5,
    zIndex: 5,
  },
});
export default ProfileScreen;
