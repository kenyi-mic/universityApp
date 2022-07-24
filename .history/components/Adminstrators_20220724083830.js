import { View, Text, Image } from "react-native";
import React from "react";

const Adminstrators = () => {
  return (
    <View>
      <View>
        <Image
          source={{
            width: 120,
            height: 120,
            uri: "https://ugv.edu.bd/images/message_images/1582969909.jpg",
          }}
        />
        <Text>Mr. Md. Abdul Hamid</Text>
        <Text>Hon’ble Chancellor</Text>
      </View>
    </View>
  );
};

export default Adminstrators;
