import React from "react";
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Text, View, ImageBackground } from "react-native";

const CustomDrawer = (props) => {
  return (
    <View className="flex-1 ">
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#003366" }}
      >
        <ImageBackground
          resizeMode="cover"
          style={{ padding: 10 }}
          source={require("../assets/profilebg.jpg")}
        />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <Text>Our custom text</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
