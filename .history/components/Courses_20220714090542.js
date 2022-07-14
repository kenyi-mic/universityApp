import { View, Text, Image, Button } from "react-native";
import React from "react";

const Courses = () => {
  return (
    <View>
      <Text>Courses</Text>
      <Text>
        To help you build your carrier and acomplish your goal, we are offering
        8 under graduate and masters programs under three focalties.
      </Text>
      <View>
        <Image></Image>
        <Text>MBA</Text>
        <Text>MASTERS OF BUSINESS ADMINSTRATION(MBA)</Text>
        <Button className="w-40 h-40" title="Apply Now" />
      </View>
    </View>
  );
};

export default Courses;
