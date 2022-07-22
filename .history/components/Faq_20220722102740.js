import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Faq = ({ data }) => {
  return (
    <View>
      {data.map((category, subcategory, i) => {
        return <TouchableOpacity></TouchableOpacity>;
      })}
    </View>
  );
};

export default Faq;

const styles = StyleSheet.create({});
