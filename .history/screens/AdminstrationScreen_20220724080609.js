import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import Header from "../components/Header";

const { width, height } = Dimensions.get("window");

const AdminstrationScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <View className="flex flex-1 items-center justify-center">
          <Image
            source={{
              width: width,
              height: height / 6,
              uri: "https://cutt.ly/NZwrbo0",
            }}
          />
          <Text className="text-2xl ">UGV ADMINSTARATION</Text>
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

export default AdminstrationScreen;
