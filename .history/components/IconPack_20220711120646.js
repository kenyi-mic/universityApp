import { View, Text } from "react-native";
import React from "react";
import { HomeIcon } from "react-native-heroicons/solid";

const IconPack = () => {
  return (
    <View>
      <View className="w-11/12 mx-auto ">
        <HomeIcon size={40} color={"darkblue"} title={"Home"} />
      </View>
    </View>
  );
};

export default IconPack;
