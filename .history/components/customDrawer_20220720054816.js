import React from "react";
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Text, View } from "react-native";

const CustomDrawer = (props) => {
  return (
    <View className="flex-1 ">
      <DrawerContentScrollView {...props} className="bg-cyan-900 flex:1">
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <Text>Our custom text</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;