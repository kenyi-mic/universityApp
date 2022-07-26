import {
  Dimensions,
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

const { width, height } = Dimensions.get("window");

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

          <View className="flex-1 w-11/12 mt-10 border rounded-xl border-gray-600">
            <Text className="my-3 border-b px-3 border-gray-600 font-light">
              Under Graduate Admission info
            </Text>
            <Text className="mt-2 border-b px-3 border-gray-600 font-light">
              Post Gradduate Admission Details
            </Text>
            <Text className="mt-4 border-b px-3 border-gray-600 font-light">
              Important Date & Deadline
            </Text>
            <Text className="mt-4 mb-2 border-b px-3 border-gray-600 font-light">
              Wavier
            </Text>

            <Text className="my-2 border-b px-3 border-gray-600 font-light">
              FAQs
            </Text>

            <Text className="mb-3  px-3 font-light">Credit Transfer</Text>
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

export default StudentGuideScreen;
