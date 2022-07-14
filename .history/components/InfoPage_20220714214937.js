import { View, Text, ImageBackground } from "react-native";
import React from "react";
import {
  AcademicCapIcon,
  BookOpenIcon,
  UserAddIcon,
  UserGroupIcon,
} from "react-native-heroicons/outline";

const InfoPage = () => {
  return (
    <View
      style={{ height: height / 1.2 }}
      className="flex justify-center items-center my-5 bg-gradient-to-tr from-blue-500 to-indigo-500"
    >
      <ImageBackground
        className=" w-full h-full opacity-70"
        resizeMode="cover"
        source={{
          uri:
            "https://images.unsplash.com/photo-1546953304-5d96f43c2e94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fHN0dWRlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
          <Text className="text-2xl drop-shadow-lg shadow-black text-white font-semibold">
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
