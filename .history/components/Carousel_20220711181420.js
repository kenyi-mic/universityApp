import { View, Text, Dimensions, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import { Animated } from "react-native-web";

const { height, width } = Dimensions.get("window");

const Carousel = ({ data }) => {
  if (data || data.length) {
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
            return;
            <CarouselItem item={item} />;
          }}
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
                key={i}
                style={{
                  opacity: 0.5,
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
};

export default Carousel;
