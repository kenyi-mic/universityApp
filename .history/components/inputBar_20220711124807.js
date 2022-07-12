import { View, Text, TextInput } from "react-native";
import React from "react";
import { SearchIcon } from "react-native-heroicons/outline";

const InputBar = () => {
  return (
    <View>
      <View className="">
        <SearchIcon size={20} color={"black"} />
        <TextInput />
      </View>
    </View>
  );
};

export default InputBar;
