import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Header from "../components/Header";

const StudentGuideScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <View className="flex flex-1 items-center justify-center">
          <Image
            resizeMode={"cover"}
            source={{
              width: width,
              height: height / 6,
              uri: "https://i.pinimg.com/originals/2a/80/c3/2a80c3f04d1193d2b04fbfc6bda1e86b.png",
            }}
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
});

export default StudentGuideScreen;
