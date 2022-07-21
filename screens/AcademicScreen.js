import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import Header from "../components/Header";

const AcademicScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <View className="flex flex-1 items-center justify-center">
          <Text className="text-2xl font-bold text-gray-300 mt-20">
            Academic info goes here
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default AcademicScreen;