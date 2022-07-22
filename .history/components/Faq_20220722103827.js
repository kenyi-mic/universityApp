import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Faq = ({ data }) => {
  return (
    <View>
      {data.map((question, answer, i) => {
        return (
          <TouchableOpacity key={i} onPress={() => {}}>
            <View>
              <Text>{question}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Faq;

const styles = StyleSheet.create({});
