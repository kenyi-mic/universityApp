import { View, Text } from "react-native";
import React from "react";
import { HomeIcon } from "react-native-heroicons/solid";

const IconPack = () => {
  return (
    <View>
      <View>
        <HomeIcon size={40} color={"blue"} title={"Home"} />
      </View>
    </View>
  );
};

export default IconPack;
