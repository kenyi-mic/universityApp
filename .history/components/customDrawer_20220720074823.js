import React from "react";
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Text, View, ImageBackground, Image } from "react-native";

const CustomDrawer = (props) => {
  return (
    <View className="flex-1 ">
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#003366" }}
      >
        <ImageBackground
          resizeMode="contain"
          style={{ padding: 100 }}
          source={require("../assets/profilebg.jpg")}
        />
        <Image
          resizeMode="contain"
          source={{
            width: 14,
            height: 14,
            borderRadius: 50,
            backgroundColor: "white",
            uri:
              "https://th.bing.com/th/id/R.001cb6fdc66db441f775b69d6f18c3a9?rik=U4PPoJlpc4Ysbg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_170512.png&ehk=yeTXkPD%2fc4j0WxAPp4op994ym9AEkWjgD8C4h%2fs6f8M%3d&risl=&pid=ImgRaw&r=0",
          }}
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
