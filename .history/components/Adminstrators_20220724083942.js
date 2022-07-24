import { View, Text, Image } from "react-native";
import React from "react";

const Adminstrators = () => {
  return (
    <View>
      <View>
        <Image
          source={{
            width: 125,
            height: 125,
            uri: "https://ugv.edu.bd/images/message_images/1582969909.jpg",
          }}
        />
        <Text className="text-sm font-bold py-2">Mr. Md. Abdul Hamid</Text>
        <Text>Hon’ble Chancellor</Text>
      </View>
    </View>
  );
};

export default Adminstrators;