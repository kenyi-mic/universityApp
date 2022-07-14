import { View, Text } from "react-native";
import React from "react";

const Courses = () => {
  return (
    <View className="flex flex-1 items-center">
      <Text className="text-red-500 text-2xl text-semibold my-5">COURSES</Text>
      <Text>
        To help you build your career and accomplish your goal, we are offering
        8 undergraduate and master's programs under 3 faculties.
      </Text>
    </View>
  );
};

export default Courses;
