import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Dimensions, FlatList, Animated } from "react-native";
import Courses from "./Courses";

const { width, heigth } = Dimensions.get("window");

function infiniteScroll(dataList, mySlide) {
  const numberOfData = dataList.length;
  let scrollValue = 0,
    scrolled = 0;

  setInterval(function () {
    scrolled++;
    if (scrolled < numberOfData) scrollValue = scrollValue + width;
    else {
      scrollValue = 0;
      scrolled = 0;
    }
    if (mySlide) {
      mySlide.current.scrollToOffset({
        animated: true,
        offset: scrollValue,
      });
    }
  }, 5000);
}

const Carousel = ({ data }) => {
  const mySlide = useRef();

  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
    infiniteScroll(dataList, mySlide);
  });

  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          ref={mySlide}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <Courses data={item} />;
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        />
        <View style={styles.dotView}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return <Animated.View key={i} style={{}} />;
          })}
        </View>
      </View>
    );
  }

  console.log("Please provide Images");
  return null;
};

const styles = StyleSheet.create({
  dotView: {
    flexDirection: "row",
    justifyContent: "center",
    color: "darkblue",
  },
});

export default Carousel;