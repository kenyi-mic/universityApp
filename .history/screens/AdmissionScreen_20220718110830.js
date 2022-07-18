import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";

const AdmissionScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View className="flex items-center"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdmissionScreen;
