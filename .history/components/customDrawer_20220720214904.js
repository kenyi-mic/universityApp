import React from "react";
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Text, View, ImageBackground, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LoginIcon, ShareIcon, UserIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = (props) => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 ">
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#003366" }}
      >
        <ImageBackground
          resizeMode="cover"
          style={{ padding: 20 }}
          source={require("../assets/profilebg.jpg")}
        >
          <TouchableOpacity>
            <UserIcon
              style={styles.profile}
              size={60}
              color={"#333"}
              title={"user"}
            />
          </TouchableOpacity>
          <Text className="text-white font-medium text-lg">User</Text>
        </ImageBackground>
        <View className="flex flex-1 bg-white pt-10">
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View className="p-5 border-t border-gray-200 flex-row ">
        <TouchableOpacity className="flex flex-row items-center justify-center">
          <ShareIcon size={22} color={"#333"} />
          <Text className="text-lg ml-3 font-medium">Share App</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row items-center justify-center ml-4">
          <LoginIcon size={22} color={"#333"} />
          <Text className="text-lg ml-3 font-medium">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: 22,
    height: 22,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 40,
    padding: 4,
  },
});
export default CustomDrawer;
