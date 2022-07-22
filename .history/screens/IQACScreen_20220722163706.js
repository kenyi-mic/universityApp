import {
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
  View,
} from "react-native";
import React from "react";
import WebView from "react-native-webview";

const IQACScreen = () => {
  const renderLoadingView = () => (
    <View style={styles.loadView}>
      <ActivityIndicator size="large" color={"blue"} />
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{
          uri: `${
            true
              ? "https://iqac.ugv.edu.bd/" ||
                "https://iqac.ugv.edu.bd/Registrations/"
              : "https://google.com/"
          }}`,
        }}
        scalesPageToFit
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

export default IQACScreen;
