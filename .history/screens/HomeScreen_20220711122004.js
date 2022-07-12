import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect } from "react";
import IconPack from "../components/IconPack";
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
    <SafeAreaView style={styles.homeScreen} className="w-full mx-auto">
      <View className="bg-gray-200 w-full">
        <Image
          resizeMode="contain"
          source={{
            uri: logo,
          }}
          className="w-5/6 h-20 object-contain ml-3"
        />
      </View>
      <IconPack />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default HomeScreen;
