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
    <View style={styles.container}>
      <Text>Courses</Text>
      <Text>
        To help you build your carrier and acomplish your goal, we are offering
        8 under graduate and masters programs under three focalties.
      </Text>
      <View>
        <Image></Image>
        <Text>MBA</Text>
        <Text>MASTERS OF BUSINESS ADMINSTRATION(MBA)</Text>
        <Button title="Apply Now" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    height: height / 2,
  },
});

export default Courses;
