import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Testimonial = ({ data }) => {
  return (
    <View style={styles.container} className="items-center my-3">
      <View className="w-11/12 my-5 border-2 border-gray-400 pb-5 bg-gray-400 bg-opacity-20 px-3 relative">
        <Text className="text-center my-3">{data?.message}</Text>
        <Image
          style={styles.image}
          resizeMode="contain"
          className="w-14 h-14 mx-auto rounded-full absolute -bottom-8 left-36 p-2 "
          source={{
            uri: data?.image,
          }}
        />
      </View>
      <Text className="text-xl font-italic my-2 text-gray-600">
        {data?.name}
      </Text>
      <Text className="text-sm text-gray-400">{data?.course}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    borderColor: "gray",
    borderWidth: 2,
  },
  container: {
    width: width - 20,
  },
});
export default Testimonial;
