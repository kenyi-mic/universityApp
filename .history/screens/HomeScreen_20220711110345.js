import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import React from "react";
import Icons from "../components/Icons";

const logo = "https://ugv.edu.bd/images/webimage/ugv-logo.png";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.homeScreen}>
      <View className=" w-5/6 mx-auto">
        <Image
          className="w-5/6 mx-auto"
          resizeMode="contain"
          source={{
            width: 320,
            height: 70,
            uri: logo,
          }}
        />
      </View>
      <Icons />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default HomeScreen;
