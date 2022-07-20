import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import React from "react";
import Header from "../components/Header";

const FacultyAndStuffScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Header />
        <View className="flex flex-1 items-center justify-center">
          <Text className="text-2xl font-bold text-gray-300 mt-20">
            The main content goes
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "andriod" ? StatusBar.currentHeight : 0,
    paddingTop: 5,
  },
});

export default FacultyAndStuffScreen;
