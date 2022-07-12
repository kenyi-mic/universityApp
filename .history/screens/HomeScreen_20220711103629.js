import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Image
          className="w-6/6 h-40"
          width={400}
          resizeMode="contain"
          source={{
            uri: "https://ugv.edu.bd/images/webimage/ugv-logo.png",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
