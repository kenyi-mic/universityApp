import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import Faq from "../components/Faq";
import { faqData } from "../data/Data";

const FaqScreen = () => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Header />
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View className="flex flex-1  items-center justify-center">
                <Text className=" text-3xl border-b-2 border-gray-300 text-gray-500 my-3 w-11/12 ">
                  FAQs
                </Text>
                <Faq data={faqData} />
              </View>
            );
          }}
        />

        <Text className="font-italic text-center text-gray-100 py-5 bg-blue-900 border-t w-full border-gray-300 ">
          Check our website: ugv.edu.bd/
        </Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default FaqScreen;
