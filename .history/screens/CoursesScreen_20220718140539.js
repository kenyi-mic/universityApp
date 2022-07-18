import { View, Text, Image } from "react-native";
import React from "react";
import Header from "../components/Header";

const CoursesScreen = () => {
  return (
    <View>
      <Header />
      <ScrollView>
        <View>
          <Image
            resizeMode="cover"
            source={{
              width: width,
              height: height / 6,
              uri:
                "https://images.unsplash.com/photo-1519070994522-88c6b756330e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFkbWlzc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            }}
          />
          <Text className="text-4xl text-amber-400 font-bold text-center mt-10 absolute">
            Courses
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CoursesScreen;
