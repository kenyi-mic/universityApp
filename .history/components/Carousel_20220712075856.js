import { View, Text, Dimensions, FlatList, Animated } from "react-native";
import React, { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import data from "../data/Data";

const { height, width } = Dimensions.get("window");

const Carousel = () => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  if (data || data?.length) {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItem data={item} />;
          }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } },
          ])}
        />
        <View>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                className="flex flex-row justify-center"
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: "#595959",
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
  console.log("Please add image ", data);
  return null;
};

export default Carousel;
