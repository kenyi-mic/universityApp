import { View, Text, TextInput } from "react-native";
import React from "react";
import { SearchIcon } from "react-native-heroicons/outline";

const inputBar = () => {
  return (
    <View>
      <View>
        <SearchIcon />
        <TextInput />
      </View>
    </View>
  );
};

export default inputBar;
