import {
  View,
  Text,
  Image,
  Button,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";

const { height, width } = Dimensions.get("window");

const Courses = () => {
  return (
    <View
      style={styles.container}
      className="flex justify-center items-center my-20"
    >
      <Text className="text-3xl font-bold text-red-500 text-center my-5">
        Courses
      </Text>
      <Text className="text-center h">
        To help you build your carrier and acomplish your goal, we are offering
        8 under graduate and masters programs under three focalties.
      </Text>
      <View className="py-10">
        <Image
          style={{ width: width - 20, height: height / 3 }}
          source={{
            uri:
              "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          }}
        />
        <Text className="text-xl font-light m-3  ">MBA</Text>
        <Text className="text-2xl font-semibold mx-3">
          MASTERS OF BUSINESS ADMINSTRATION(MBA)
        </Text>
        <Text className="text-lg font-semibold text-white  bg-blue-900 w-2/3 p-2 flex left-2/4 flex-1 justify-end mt-3">
          Apply Now
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 30,
    height: height / 2,
    flex: 1,
  },
});

export default Courses;
