import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
const Testimonial = ({ data }) => {
  return (
    <View className="bg-slate-900">
      <View style={styles.container} className="flex flex-1 items-center my-3">
        <View className="w-11/12  rounded-xl my-5 border-2 border-gray-400 pb-5 bg-gray-600 bg-opacity-10 px-3 relative">
          <Text className="text-center text-sm font-light text-white my-3">
            {data?.message}
          </Text>
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

    marginHorizontal: 10,
  },
});
export default Testimonial;
