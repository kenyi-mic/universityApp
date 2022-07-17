import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
} from "react-native-heroicons/outline";

const { height, width } = Dimensions.get("window");

const Events = () => {
  return (
    <View className="items-center">
      <Text className="text-center text-2xl my-2 font-semibold">
        RECENT EVENTS
      </Text>
      <Text className="text-center mx-2 my-3 text-base">
        Life at university of global village is much eventful. Through a lot of
        meaningful and impactful events students get the opportunity to develop
        their skills and portfolio beyond the curriculum
      </Text>
      <View className="my-3 bg-blue-900 hover:bg-red-600 ">
        <Image
          resizeMode="cover"
          style={{ width: width - 20, height: height / 3 }}
          source={{
            uri: "https://ugv.edu.bd/images/teacher_images/1601549027.jpg",
          }}
        />
        <Text className="text-lg font-semibold my-2">Event body</Text>

        <View className="flex flex-row ">
          <CalendarIcon size={20} color={"black"} />
          <Text className="text-base justify-center font-semibold mx-2">
            28 June, 2022
          </Text>
        </View>
        <View className="flex flex-row space-y-2">
          <Text className="text-base justify-center font-semilight mr-2">
            Read more
          </Text>
          <ArrowRightIcon marginTop={6} size={15} color={"black"} />
        </View>
      </View>
    </View>
  );
};

export default Events;