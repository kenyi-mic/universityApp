import React from "react";
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { View } from "react-native";

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView>
      <DrawerItemList />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
