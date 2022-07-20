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
                uri:
                  "https://images.unsplash.com/photo-1519070994522-88c6b756330e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFkbWlzc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
              }}
            />
            <Text className="text-4xl text-amber-300 font-bold text-center mt-10 absolute">
              Courses
            </Text>
          </View>
          <View className="flex flex-1 items-center justify-center">
            <Text className="text-2xl font-bold text-gray-300 mt-20">
              Courses goes here
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default CoursesScreen;
