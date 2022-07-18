import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import Header from "../components/Header";

const AdmissionScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header />
        <ScrollView>
          <View className="flex items-center"></View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default AdmissionScreen;
