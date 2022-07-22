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
import { TableIcon } from "react-native-heroicons/outline";

const FaqScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View className="flex flex-1 items-center justify-center">
        <Text className="text-2xl font-bold text-gray-300 mt-20">
          The main content goes
        </Text>
      </View>
      <TableIcon />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default FaqScreen;
