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
import { faqData } from "../data/Data";

const FaqScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View className="flex flex-1 items-center justify-center">
        <Text className=" text-2xl border-b border-gray-300 text-gray-500 w-full ">
          FAQs
        </Text>
        <Faq data={faqData} />
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
