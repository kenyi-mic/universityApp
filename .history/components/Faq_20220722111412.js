import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Faq = ({ data }) => {
  return (
    <View className=" flex flex-grow ">
      {data.map((item) => {
        return (
          <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            key={item.id}
            onPress={() => {}}
            className="items-center w-11/12  flex flex-grow "
          >
            <View className="">
              <Text
                numberOfLines={2}
                className="text-lg w-96 p-2 bg-gray-300  border-b border-gray-400 font-semibold text-gray-500 "
              >
                Q: {item.question}
              </Text>
              <View className=" p-2 bg-gray-50">
                <Text key={item.id}>A: {item.answer}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Faq;

const styles = StyleSheet.create({
  container: {},
});
