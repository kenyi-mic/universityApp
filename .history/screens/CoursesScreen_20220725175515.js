import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
  Platform,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { courseData } from "../data/Data";
import CourseCarousel from "../components/CourseCarousel";

const { width, height } = Dimensions.get("window");

const CoursesScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <View className="flex items-center">
            <Image
              resizeMode="cover"
              source={{
                width: width,
                height: height / 6,
                uri: "https://i.pinimg.com/originals/65/64/ab/6564ab9429476d7f2264706f932fc870.png",
              }}
            />
            <Text className="text-4xl text-white font-extrabold text-center mt-10 absolute">
              UGV COURSES
            </Text>
          </View>
          <View className="flex flex-1 items-center justify-center">
            <CourseCarousel data={courseData} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: height,
  },
});

export default CoursesScreen;
