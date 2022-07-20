import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const InternationalScreen = () => {
  return (
    <SafeAreaView className="flex flex-1">
      <WebView source={{ uri: "https://int.ugv.edu.bd/" }} />
    </SafeAreaView>
  );
};

export default InternationalScreen;
