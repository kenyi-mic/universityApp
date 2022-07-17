import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { ArrowRightIcon, CalendarIcon } from "react-native-heroicons/outline";

const { height, width } = Dimensions.get("window");

const Events = () => {
  return (
    <View className="items-center bg-black">
      <Text className="text-center text-2xl my-2 font-semibold">
        RECENT EVENTS
      </Text>
      <Text className="text-center mx-2 my-3 text-base">
        Life at university of global village is much eventful. Through a lot of
        meaningful and impactful events students get the opportunity to develop
        their skills and portfolio beyond the curriculum
      </Text>
      <View className="my-3 bg-blue-900  hover:bg-red-600 w-11/12">
        <Image
          style={{ width: width - 20, height: height / 3 }}
          source={{
            uri: "https://ugv.edu.bd/images/teacher_images/1601549027.jpg",
          }}
        />
        <Text className="text-lg font-semibold my-2 ml-4 text-gray-100">
          Event body
        </Text>

        <View className="flex flex-row ml-4">
          <CalendarIcon size={20} color={"white"} />
          <Text className="text-base justify-center font-light mx-2 text-white">
            28 June, 2022
          </Text>
        </View>
        <View className="flex flex-row my-3 ml-4">
          <Text className="text-base justify-center font-semilight mr-2 text-white">
            Read more
          </Text>
          <ArrowRightIcon marginTop={6} size={15} color={"white"} />
        </View>
      </View>
    </View>
  );
};

export default Events;
