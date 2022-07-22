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
      <View className="absolute left-20 -bottom-20">
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
