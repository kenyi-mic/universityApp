import React from "react";
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { View } from "react-native";

const CustomDrawer = (props) => {
  return (
    <View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
