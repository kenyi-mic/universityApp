import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Header from "../components/Header";

const AdminstrationScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <View className="flex flex-1 items-center justify-center">
          <Text className="text-2xl font-bold text-gray-300 mt-20">
            Adminstrative Content goes here
          </Text>
        </View>
      </View>
      <Text className="font-italic text-center text-gray-100 py-5 bg-blue-900 border-t w-full border-gray-300 ">
        Check our website: ugv.edu.bd/
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default AdminstrationScreen;
