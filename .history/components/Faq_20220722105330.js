import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Faq = ({ data }) => {
  return (
    <View className=" flex flex-grow ">
      {data.map(({ data: { id, question, answer } }) => {
        return (
          <TouchableOpacity activeOpacity={0.8} key={i} onPress={() => {}}>
            <View>
              <Text>{question}</Text>
              <View>
                <Text key={id}>{answer}</Text>
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
