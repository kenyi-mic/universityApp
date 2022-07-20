import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";

const FacultyAndStuffScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <View className="flex flex-1 items-center justify-center">
        <Text>The main content goes</Text>
      </View>
    </SafeAreaView>
  );
};

export default FacultyAndStuffScreen;
