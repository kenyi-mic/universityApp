import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";

const HomeScreen = () => {
  const logo = "https://ugv.edu.bd/images/webimage/ugv-logo.png";
  return (
    <SafeAreaView>
      <View>
        <Image
          className={`mx-auto`}
          resizeMode="contain"
          source={{
            width: 320,
            height: 70,
            uri: logo,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
