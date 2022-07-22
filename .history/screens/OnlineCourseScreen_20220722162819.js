import {
  ActivityIndicator,
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
  const renderLoadingView = () => (
    <View style={styles.loadView}>
      <ActivityIndicator size="large" color={"blue"} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container} className="flex flex-1">
      <WebView
        source={{ uri: "https://ugvedu.com/" }}
        startInLoadingState
        renderLoading={renderLoadingView}
        scalesPageToFit
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  loadView: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default OnlineCourseScreen;
