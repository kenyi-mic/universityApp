import { View, Text, ImageBackground, Dimensions } from "react-native";
import React from "react";
import {
  AcademicCapIcon,
  BookOpenIcon,
  UserAddIcon,
  UserGroupIcon,
} from "react-native-heroicons/outline";

const { height, width } = Dimensions.get("window");

const InfoPage = () => {
  return (
    <View
      style={{ height: height / 1.2 }}
      className="flex justify-center items-center my-5 bg-gradient-to-tr from-blue-500 to-indigo-500"
    >
      <ImageBackground
        className=" w-full h-full "
        resizeMode="cover"
        source={{
          uri: "https://i.pinimg.com/originals/e9/41/ee/e941eed63315d329b3c1831d9466b5f6.png",
        }}
      />
      <View className="absolute  ">
        <View className="items-center pb-5">
          <UserGroupIcon size={60} color={"white"} />
          <Text className="text-3xl drop-shadow-lg shadow-black text-white font-semibold text-center">
            2,000
          </Text>
          <Text className="text-2xl drop-shadow-lg shadow-black text-white  font-semibold">
            Happy students
          </Text>
        </View>

        <View className="items-center my-5">
          <BookOpenIcon size={60} color={"white"} />
          <Text className="text-3xl drop-shadow-lg shadow-black text-white font-semibold text-center">
            8
          </Text>
          <Text className="text-2xl shadow-xl shadow-black text-white font-semibold">
            Approved Courses
          </Text>
        </View>

        <View className="items-center my-5">
          <UserAddIcon size={60} color={"white"} />
          <Text className="text-3xl drop-shadow-lg shadow-black text-white font-semibold text-center">
            35+
          </Text>
          <Text className="text-2xl drop-shadow-lg shadow-black text-white font-semibold">
            Profesional Lecturers
          </Text>
        </View>

        <View className="items-center my-5">
          <AcademicCapIcon size={60} color={"white"} />
          <Text className="text-3xl drop-shadow-lg shadow-black text-white font-semibold text-center">
            500+
          </Text>
          <Text className="text-2xl drop-shadow-md shadow-black text-white font-semibold">
            Graduate Students
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InfoPage;
