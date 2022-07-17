import { View, Text, Image, Dimensions, FlatList } from "react-native";
import React from "react";
import { ArrowRightIcon, CalendarIcon } from "react-native-heroicons/outline";
import { events } from "../data/Data";
const { height, width } = Dimensions.get("window");

const Events = () => {
  return (
    <View>
      {events.map(({ item }) => (
        <View className="items-center bg-black">
          <Text className="text-center text-2xl my-2 font-semibold text-gray-100">
            RECENT EVENTS
          </Text>
          <Text className="text-center mx-4 text-white my-3 text-base">
            Life at university of global village is much eventful. Through a lot
            of meaningful and impactful events students get the opportunity to
            develop their skills and portfolio beyond the curriculum
          </Text>
          <View
            key={item.id}
            className="my-3 bg-blue-900  hover:bg-red-600 w-11/12"
          >
            <Image
              style={{ width: width - 32.7, height: height / 3 }}
              source={{
                uri: item.image,
              }}
            />
            <Text
              numberOfLines={1}
              className="text-lg font-semibold my-2 ml-4 text-gray-100"
            >
              {item.body}
            </Text>

            <View className="flex flex-row ml-4">
              <CalendarIcon size={20} color={"white"} />
              <Text className="text-base justify-center font-light mx-2 text-white">
                {item.date}
              </Text>
            </View>
            <View className="flex flex-row my-3 ml-4">
              <Text className="text-base justify-center text-semibold mr-2 text-white">
                Read more
              </Text>
              <ArrowRightIcon marginTop={6} size={15} color={"white"} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Events;
