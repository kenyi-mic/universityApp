import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const Faq = ({ data }) => {
  const [currentindex, setCurrentIndex] = useState(null);
  return (
    <View className=" flex flex-1">
      {data.map(({ id, question, answer }, index) => {
        return (
          <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            key={id}
            onPress={() => {
              setCurrentIndex(index);
            }}
            className="items-center w-11/12  flex flex-grow "
          >
            <View className="">
              <Text
                numberOfLines={2}
                className="text-lg w-96 p-2 bg-gray-300  border-b border-gray-400 font-semibold text-gray-500 "
              >
                Q: {question}
              </Text>
              {index === currentindex && (
                <View className=" p-2 bg-gray-50">
                  <Text key={id}>A: {item.answer}</Text>
                </View>
              )}
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
