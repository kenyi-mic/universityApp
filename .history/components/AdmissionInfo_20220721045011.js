import { View, Text, FlatList } from "react-native";
import React from "react";

const AdmissionInfo = ({ data }) => {
  return (
    <View>
      {data.map((item) => (
        <View key={item.id} className="flex flex-1 mt-4 w-11/12">
          <Text className="text-center my-2 text-2xl border-b border-gray-300 text-gray-900 ">
            {item.header}
          </Text>
          <Text className="text-sm font-light">{item.body}</Text>
        </View>
      ))}
    </View>
  );
};

export default AdmissionInfo;
