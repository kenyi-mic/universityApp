import { View, Text } from "react-native";
import React from "react";
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
