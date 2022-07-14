import {
  View,
  Text,
  Image,
  Dimensions,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";

const { height, width } = Dimensions.get("window");

const Courses = () => {
  return (
    <View className="flex flex-1 items-center">
      <Text className="text-red-500 text-2xl text-semibold my-5">COURSES</Text>
      <Text className="text-gray-600 mx-3 text-center ">
        To help you build your career and accomplish your goal, we are offering
        8 undergraduate and master's programs under 3 faculties.
      </Text>
      <View className="max-w-sm  border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Image
          className="my-5"
          style={{ width: width - 20, height: height / 3 }}
          source={{
            uri: "https://ugv.edu.bd/images/course_images/1580033216.jpg",
          }}
        />
        <Text>MBA</Text>
        <Text>MASTERS OF BUSINESS ADMINSTRATION(MBA)</Text>
        <TouchableOpacity>
          <Text className="w-2/5 h-9 flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Appy Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Courses;
