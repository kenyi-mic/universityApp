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
import { guideInfo } from "../data/Data";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const StudentGuideScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView>
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
                Semester Drop
              </Text>
              <Text className="mt-2 border-b px-3 border-gray-600 font-light">
                Absence in Mid exam
              </Text>
              <Text className="mt-4 border-b px-3 border-gray-600 font-light">
                Absence in Final exam
              </Text>
              <Text className="mt-4 mb-2 border-b px-3 border-gray-600 font-light">
                Exam Fees
              </Text>

              <Text className="my-2 border-b px-3 border-gray-600 font-light">
                Grievance
              </Text>

              <Text className="my-2 border-b px-3 border-gray-600 font-light">
                Mark Sheet
              </Text>

              <Text className="my-2 border-b px-3 border-gray-600 font-light">
                Certificate
              </Text>

              <Text className="mb-3  px-3 font-light">Testimonial</Text>
            </View>

            {guideInfo.map((item) => (
              <View key={item.id} className="w-11/12">
                <Text className="mb-3 px-3 font-light">{item.header}</Text>
                <Text>{item.description}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: height,
  },
});

export default StudentGuideScreen;
