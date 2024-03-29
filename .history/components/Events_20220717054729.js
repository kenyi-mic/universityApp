import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { ArrowLeftIcon, CalendarIcon } from "react-native-heroicons/outline";

const { height, weight } = Dimensions.get("window");

const Events = () => {
  return (
    <View>
      <Text>RECENT EVENTS</Text>
      <Text>
        Life at university of global village is much eventful. Through a lot of
        meaningful and impactful events students get the opportunity to develop
        their skills and portfolio beyond the curriculum
      </Text>
      <View>
        <Image
          style={{ width: width - 20, height: height / 3 }}
          source={{ uri: "" }}
        />
        <Text>Event description</Text>

        <Text>
          <CalendarIcon /> 28 June, 2022
        </Text>
        <Text>
          Read more
          <ArrowLeftIcon />
        </Text>
      </View>
    </View>
  );
};

export default Events;
