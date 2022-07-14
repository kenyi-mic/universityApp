import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

const { height, width } = Dimensions.get("window");

const Courses = ({ data }) => {
  return (
    <View
      style={styles.container}
      className="flex justify-center items-center mt-5 p-5 "
    >
      <Text className="text-3xl font-bold text-red-500 text-center my-8 ">
        Courses
      </Text>
      <Text className="text-center mb-3 ">
        To help you build your carrier and acomplish your goal, we are offering
        8 under graduate and masters programs under three focalties.
      </Text>
      <View className=" border-2 border-gray-200 flex flex-1 justify-center items-center">
        <Image
          style={{ width: width - 25, height: height / 3 }}
          source={{
            uri: data.image,
          }}
        />
        <Text className="text-xl font-light m-3  ">{data.courseTag}</Text>
        <Text className="text-2xl font-semibold mx-3">{data.courseName}</Text>

        <TouchableOpacity>
          <Text className="text-lg font-semibold text-white  bg-blue-900 w-28 p-2 mb-8 flex left-2/4  justify-end mt-3">
            {data.action}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    height: height / 2,
    flex: 1,
  },
});

export default Courses;
