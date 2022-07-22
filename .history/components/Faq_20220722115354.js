import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const Faq = ({ data, data1 }) => {
  const [currentindex, setCurrentIndex] = useState(null);
  return (
    <View className=" flex ">
      {data.map(({ id, question }, index) => {
        return (
          <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            key={id}
            onPress={() => {
              setCurrentIndex(index);
            }}
            className={` items-center w-11/12 ${
              index === currentindex ? "flex-grow" : " flex-grow-0"
            }`}
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
                  {data1.map((item) => (
                    <Text key={item.id}>A: {item.answer}</Text>
                  ))}
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
  container: {
    flexGrow: 1,
  },
});
