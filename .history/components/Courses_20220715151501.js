import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");

const Courses = ({ data }) => {
  return (
    <View style={styles.container} className="flex flex-1 items-center ">
      <Text className="text-red-500 text-2xl text-semibold my-5">COURSES</Text>
      <Text className="text-gray-600 mx-3 text-center ">
        To help you build your career and accomplish your goal, we are offering
        8 undergraduate and master's programs under 3 faculties.
      </Text>
      <View className="max-w-sm  border-2 my-5 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Image
          className="my-5"
          style={{ width: width - 20, height: height / 3 }}
          source={{
            uri: data?.image,
          }}
        />
        <Text className="text-sm font-semibold ml-2">{data?.courseTag}</Text>
        <Text
          numberOfLines={1}
          className="text-base text-gray-700 ml-2 font-bold dark:text-gray-400"
        >
          {data?.courseName}
        </Text>
        <TouchableOpacity className="flex-2">
          <Text className="w-28 h-9 flex items-center left-2/3 my-5 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Appy Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    marginHorizontal: 10,
  },
});
export default Courses;
