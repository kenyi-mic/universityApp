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
              className="sticky "
              resizeMode="cover"
              source={{
                width: width,
                height: height / 6,
                uri:
                  "https://images.unsplash.com/photo-1519070994522-88c6b756330e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFkbWlzc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
              }}
            />
            <Text className="absolute text-4xl font-bold text-center shadow-xl shadow-black text-blue-100 pt-10">
              ADMISSION
            </Text>
            {/*Table */}
            <View className="flex-1 w-11/12 mt-10 border rounded-xl border-gray-600">
              <Text className="my-3 border-b px-3 border-gray-600">
                Undergraduate Admission info
              </Text>
              <Text className="mt-2 border-b px-3 border-gray-600">
                Undergraduate Admission info
              </Text>
              <Text className="mt-4 border-b px-3 border-gray-600">
                Undergraduate Admission info
              </Text>
              <Text className="my-4 border-b px-3 border-gray-600">
                Undergraduate Admission info
              </Text>
              <Text className="my-2 border-b px-3 border-gray-600">
                Undergraduate Admission info
              </Text>
              <Text className="mb-3  px-3">Undergraduate Admission info</Text>
            </View>
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
