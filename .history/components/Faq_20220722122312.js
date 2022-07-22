import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { Transition, Transitioning } from "react-native-reanimated";

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={2000} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

const Faq = ({ data }) => {
  const ref = useRef();
  const [currentindex, setCurrentIndex] = useState(null);
  return (
    <Transitioning.View transition={transition} ref={ref} className=" flex ">
      {data.map(({ id, question, answer }, index) => {
        return (
          <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            key={id}
            onPress={() => {
              ref.current.animateNextTransition();
              setCurrentIndex(index === currentindex ? null : index);
            }}
            className={` items-center w-11/12 ${
              index !== currentindex ? "bg-brown-50" : ""
            }`}
          >
            <View className="">
              <Text
                numberOfLines={4}
                className="text-lg w-96 p-2 bg-gray-300  border-b border-blue-900 font-semibold text-gray-500 "
              >
                {question}
              </Text>
              {index === currentindex && (
                <View className=" p-2 bg-gray-50">
                  <Text>A: {answer}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </Transitioning.View>
  );
};

export default Faq;

const styles = StyleSheet.create({});
