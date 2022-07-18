import { View, Image } from "react-native";
import React from "react";
import Icons from "./Icons";

const logo = "https://ugv.edu.bd/images/webimage/ugv-logo.png";

const Header = () => {
  return (
    <View>
      <View className="bg-gray-200 w-full flex  items-center">
        <Image
          resizeMode="contain"
          source={{
            uri: logo,
          }}
          className="w-5/6 h-20 object-contain"
        />
      </View>
      <Icons />
    </View>
  );
};

export default Header;
