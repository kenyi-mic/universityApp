import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Adminstrators = () => {
  return (
    <View className="flex flex-row gap-2 pt-4 ">
      <View className="grid grid-rows-2 grid-cols-2 gap-2">
        <TouchableOpacity>
          <View className="border bg-white shadow-lg shadow-black border-gray-100 w-44 h-52">
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

        <TouchableOpacity>
          <View className="border bg-white shadow-lg shadow-black border-gray-100 w-44 h-52">
            <Image
              resizeMode="cover"
              source={{
                width: "100%",
                height: 125,
                uri: "https://ugv.edu.bd/images/message_images/1650190522.png",
              }}
            />
            <View className="m-2">
              <Text className="text-sm font-bold py-1">
                Prof. Dr. Abdul Aziz
              </Text>
              <Text className="text-xs font-bold text-blue-900">
                Pro VICE-CHANCELLOR
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View className="grid grid-rows-2 grid-cols-2 gap-2">
        <TouchableOpacity>
          <View className="border bg-white shadow-lg shadow-black border-gray-100 w-44 h-52">
            <Image
              resizeMode="cover"
              source={{
                width: "100%",
                height: 125,
                uri: "https://ugv.edu.bd/images/message_images/1629125259.jpg",
              }}
            />
            <View className="m-2">
              <Text numberOfLines={1} className="text-sm font-bold py-1">
                Dr. Md. Imran Chowdhury
              </Text>
              <Text
                numberOfLines={1}
                className="text-xs font-bold text-blue-900"
              >
                Chairman, Board of Trustees (BOT)
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View className="border bg-white shadow-lg shadow-black border-gray-100 w-44 h-52">
            <Image
              resizeMode="cover"
              source={{
                width: "100%",
                height: 125,
                uri: "https://ugv.edu.bd/images/message_images/1582970026.JPG",
              }}
            />
            <View className="m-2">
              <Text className="text-sm font-bold py-1">
                Prof. Dr. Syed Ali Molla
              </Text>
              <Text className="text-xs font-bold text-blue-900">
                Hon'ble Treasurer
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Adminstrators;
