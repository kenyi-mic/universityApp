import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { adminstratorsData } from "../data/Data";
import { useNavigation } from "@react-navigation/native";

const Adminstrators = () => {
  const navigation = useNavigation();
  return (
    <View className="flex flex-row gap-1 ">
      <View style={StyleSheet.section} className="">
        {adminstratorsData.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              navigation.navigate(item.screen);
            }}
          >
            <View className="">
              <Image
                resizeMode="cover"
                source={{
                  width: "100%",
                  height: 125,
                  uri: item.image,
                }}
              />
              <View className="m-2">
                <Text className="text-sm font-bold py-1">{item.name}</Text>
                <Text className="text-xs font-bold text-blue-900">
                  {item.position}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Adminstrators;
