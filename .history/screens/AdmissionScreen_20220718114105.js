import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import Header from "../components/Header";

const { height, width } = Dimensions.get("window");

const AdmissionScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header />
        <ScrollView>
          <View className="flex items-center">
            <Image
              resizeMode="cover"
              source={{ width: width, height: height / 4, uri: "" }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default AdmissionScreen;
