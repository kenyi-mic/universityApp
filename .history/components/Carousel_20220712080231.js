import { View, Text, Dimensions, FlatList, Animated } from "react-native";
import React, { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";

const { height, width } = Dimensions.get("window");

const data = [
  {
    title: "1st UGV South Zone Programming Contest 2022",
    image: "https://ugv.edu.bd/images/event_featuredimages/1655545131.jpg",
    description: `Student studying in a school, college and university in South Zone of Bangladesh 
            (Barisal, Barguna, Bhola, Jhalokati, Patuakhali, Pirojpur, Khulna, Bagerhat, Chuadanga, 
            Jashore, Jhenaidah, Kushtia, Magura, Meherpur, Narail, Satkhira, Madaripur, 
            Gopalganj, faridpur, and Shariatpur) can participate this contest`,
    id: "01",
  },
  {
    title: "Bangabandhu Inter University Sports CHAMPS 2020",
    image: "https://ugv.edu.bd/images/event_images/189846288.jpg",
    description: `Bangabandhu_Inter_University_Sports_CHAMPS_2020 #ঢাকা ইন্টারন্যাশনাল ইউনিভার্সিটিকে ২_০ হারিয়ে গ্রুপ চ্যাম্পিয়ন হয়ে ২য় রাউন্ডে ইউনিভার্সিটি অব গ্লোবাল ভিলেজ, বরিশাল।`,
    id: "02",
  },
  {
    title: "Seminar on machine learning",
    image: "https://ugv.edu.bd/images/event_images/1844168870.JPG",
    description: `This event happen during carnival of 2019, where group of instructors who brought from priestigues universities to take seminor with student of university of global village. And machine learning siminar is one of em.`,
    id: "04",
  },
  {
    title: "Photo Exhibition",
    image: "https://ugv.edu.bd/images/event_featuredimages/1580294391.JPG",
    description: `Event of showing talent on photography where everyone is encouraged to bring their favority photo shot.`,
    id: "05",
  },
  {
    title: "Prize Giving and Closing Ceremony",
    image: "https://ugv.edu.bd/images/event_images/340088945.JPG",
    description: `UGV carnival 2019, is one the promising event that occured in 2019. It involed variety of computational activities and great awards for those who won.`,
    id: "06",
  },
];

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
