import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Image
          className="w-full h-40"
          resizeMode="contain"
          source={{
            resizeMode: "contain",
            uri: "https://ugv.edu.bd/images/webimage/ugv-logo.png",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
