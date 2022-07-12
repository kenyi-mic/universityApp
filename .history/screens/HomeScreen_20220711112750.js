import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect } from "react";
import Icons from "../components/Icons";
import { useNavigation } from "@react-navigation/native";

const logo = "https://ugv.edu.bd/images/webimage/ugv-logo.png";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.homeScreen}>
      <View className="bg-red-200 w-full">
        <Image
          className=" w-11/12 ml-3"
          resizeMode="contain"
          source={{
            uri: logo,
          }}
        />
      </View>
      <Icons />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default HomeScreen;
