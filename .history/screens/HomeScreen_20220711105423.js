import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import Icons from "../components/Icons";

const logo = "https://ugv.edu.bd/images/webimage/ugv-logo.png";

const HomeScreen = () => {
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
      <Icons />
    </SafeAreaView>
  );
};

export default HomeScreen;
