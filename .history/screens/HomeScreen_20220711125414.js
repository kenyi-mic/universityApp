import {
  View,
  TextInput,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect } from "react";
import Icons from "../components/Icons";
import { useNavigation } from "@react-navigation/native";
import { SearchIcon } from "react-native-heroicons/outline";

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
      <View className="bg-gray-200 w-full flex  items-center">
        <Image
          resizeMode="contain"
          source={{
            uri: logo,
          }}
          className="w-5/6 h-20 object-contain"
        />
      </View>
      <Icons />
      <View>
        <View className="flex flex-row space-x-2">
          <SearchIcon size={20} color={"black"} />
          <TextInput KeyboardType={"default"} placeholder="Search" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default HomeScreen;
