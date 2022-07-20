import { View, Text } from "react-native";
import React from "react";

const FaqScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View className="flex flex-1 items-center justify-center">
        <Text className="text-2xl font-bold text-gray-300 mt-20">
          The main content goes
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default FaqScreen;
