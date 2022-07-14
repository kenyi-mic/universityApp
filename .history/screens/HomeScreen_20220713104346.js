import {
  View,
  TextInput,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useLayoutEffect } from "react";
import Icons from "../components/Icons";
import { useNavigation } from "@react-navigation/native";
import { SearchIcon } from "react-native-heroicons/outline";
import Carousel from "../components/Carousel";
import { data, aboutUgv } from "../data/Data";
import VideoPage from "../components/VideoPage";

const logo = "https://ugv.edu.bd/images/webimage/ugv-logo.png";
const { width, height } = Dimensions.get("screen");
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <SafeAreaView style={styles.homeScreen}>
      {/* ugv logo */}
      <View className="bg-gray-200 w-full flex  items-center">
        <Image
          resizeMode="contain"
          source={{
            uri: logo,
          }}
          className="w-5/6 h-20 object-contain"
        />
      </View>
      {/* Navigation icons */}

      <Icons />
      <ScrollView>
        {/*Search bar */}
        <View className=" flex justify-center items-center">
          <View className="flex flex-row space-x-2 bg-gray-200 items-center p-2 w-11/12 ">
            <SearchIcon size={20} color={"gray"} />
            <TextInput
              className="text-lg"
              KeyboardType={"default"}
              placeholder="Search"
            />
          </View>
        </View>

        {/*Carousel */}

        <Carousel data={data} />
        {aboutUgv.map((item) => (
          <View key={item.id} className=" m-3">
            <Text className="text-lg font-semibold text-slate-700 mb-2 ">
              {item.title}
            </Text>
            <Text className="text-sm ">{item.body}</Text>
          </View>
        ))}
        <View className="pb-7">
          <VideoPage />
        </View>
        {/*notice board*/}
        <View className="flex flex-1  justify-center items-center ">
          <View
            style={{ width: width - 20, height: height / 4 }}
            className="bg-slate-600"
          ></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default HomeScreen;
