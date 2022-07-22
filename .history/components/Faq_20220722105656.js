import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Faq = ({ data }) => {
  return (
    <View className=" flex flex-grow ">
      {data.map((item) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            key={item.id}
            onPress={() => {}}
            className="items-center"
          >
            <View>
              <Text>{item.question}</Text>
              <View>
                <Text key={item.id}>{item.answer}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Faq;

const styles = StyleSheet.create({});
