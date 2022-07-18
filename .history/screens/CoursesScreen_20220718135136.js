import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";

const CoursesScreen = () => {
  return (
    <View>
      <Header />
      <ScrollView>
        <Text>CoursesScreen</Text>
      </ScrollView>
    </View>
  );
};

export default CoursesScreen;
