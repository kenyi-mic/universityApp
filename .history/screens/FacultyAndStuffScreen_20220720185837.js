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
    <SafeAreaView style={styles.container}>
      <Header />
      <View className="flex flex-1 items-center justify-center">
        <Text className="text-2xl font-bold text-gray-300">
          The main content goes
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "andriod" ? StatusBar.currentHeight : 0,
  },
});

export default FacultyAndStuffScreen;
