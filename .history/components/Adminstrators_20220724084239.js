import { View, Text, Image } from "react-native";
import React from "react";

const Adminstrators = () => {
  return (
    <View>
      <View className="border border-blue-900 w-36">
        <Image
          source={{
            width: 125,
            height: 125,
            uri: "https://ugv.edu.bd/images/message_images/1582969909.jpg",
          }}
        />
        <Text className="text-sm font-bold py-1">Mr. Md. Abdul Hamid</Text>
        <Text className="text-xs font-bold text-blue-900">
          Hon’ble Chancellor
        </Text>
      </View>
    </View>
  );
};

export default Adminstrators;
