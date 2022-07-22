import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import Faq from "../components/Faq";
import { faqData } from "../data/Data";

const { height, width } = Dimensions.get("window");

const FaqScreen = () => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView>
          <View className="flex flex-grow  items-center justify-center">
            <Text className=" text-3xl border-b-2 border-gray-300 text-gray-500 my-3 w-11/12 ">
              FAQs
            </Text>
            <Faq data={faqData} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: height / 1.0,
  },
});

export default FaqScreen;
