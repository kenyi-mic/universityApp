import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Adminstrators = () => {
  return (
    <View className="flex flex-row gap-1 ">
      <View className="grid grid-rows-2 grid-cols-2 gap-2">
        <TouchableOpacity>
          <View className="border bg-white shadow-lg shadow-black border-gray-100 w-44 h-48">
            <Image
              resizeMode="cover"
              source={{
                width: "100%",
                height: 125,
                uri: "https://ugv.edu.bd/images/message_images/1582969909.jpg",
              }}
            />
            <View className="m-2">
              <Text className="text-sm font-bold py-1">
                Mr. Md. Abdul Hamid
              </Text>
              <Text className="text-xs font-bold text-blue-900">
                Hon’ble Chancellor
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Adminstrators;
