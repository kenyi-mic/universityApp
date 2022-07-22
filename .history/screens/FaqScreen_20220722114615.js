import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import Faq from "../components/Faq";
import { answera, questtion } from "../data/Data";

const FaqScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View className="flex flex-1 items-center justify-center">
        <Faq data={questtion} data1={answera} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default FaqScreen;
