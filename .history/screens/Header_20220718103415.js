import { View, Text } from "react-native";
import React from "react";

const logo = "https://ugv.edu.bd/images/webimage/ugv-logo.png";

const Header = () => {
  return (
    <View className="bg-gray-200 w-full flex  items-center">
      <Image
        resizeMode="contain"
        source={{
          uri: logo,
        }}
        className="w-5/6 h-20 object-contain"
      />
    </View>
  );
};

export default Header;
