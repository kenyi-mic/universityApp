import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import AcademicComp from "../components/AcademicComp";

const { width, height } = Dimensions.get("window");

const AcademicScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <View className="flex flex-1 items-center justify-center">
            <Image
              style={styles.image}
              source={require("../assets/academic.png")}
            />
            <Text className=" absolute top-14 text-3xl font-bold drop-shadow-lg text-white">
              Academic
            </Text>
            <AcademicComp />
          </View>
        </ScrollView>
        <Text className="font-italic text-center text-gray-100 py-5 bg-blue-900 border-t w-full border-gray-300 ">
          Check our website: ugv.edu.bd/
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: height,
  },
  image: {
    width: width,
    height: height / 4,
    position: "relative",
  },
});

export default AcademicScreen;
