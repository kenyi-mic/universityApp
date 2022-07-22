import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Faq = ({ data }) => {
  return (
    <View className=" flex flex-grow ">
      {data.map((question, answer, i) => {
        return (
          <TouchableOpacity activeOpacity={0.8} key={i} onPress={() => {}}>
            <View>
              <Text>{question}</Text>
              <View>
                <Text key={answer}>{answer}</Text>
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
