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
import Adminstrators from "../components/Adminstrators";

const { width, height } = Dimensions.get("window");

const AdminstrationScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <View className="flex flex-1 items-center justify-center ">
          <Image
            source={{
              width: width,
              height: height / 6,
              uri: "https://cutt.ly/NZwrbo0",
            }}
          />
          <Text className="text-2xl font-bold text-blue-50 drop-shadow-lg absolute -top-2/4 -left-2/4">
            UGV ADMINSTARATION
          </Text>
          <View style={{ width: width - 20 }} className="my-2">
            <Text className="text-lg font-bold text-slate-700 drop-shadow-lg ">
              Adminstration of UGV is made up of the following adminstrative
              bodies:
            </Text>
            <View>
              <Adminstrators />
            </View>
          </View>
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
