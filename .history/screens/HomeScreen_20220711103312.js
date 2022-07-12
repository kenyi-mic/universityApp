import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Image resizeMode="contain" source={{ uri: "" }} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
