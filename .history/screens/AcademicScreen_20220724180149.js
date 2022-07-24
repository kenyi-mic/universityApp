import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import Header from "../components/Header";

const AcademicScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <View className="flex flex-1 items-center justify-center">
          <Image
            style={styles.image}
            source={require("../assets/academic.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: width,
    height: height / 4,
  },
});

export default AcademicScreen;
