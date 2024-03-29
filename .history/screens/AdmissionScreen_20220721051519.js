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
import { useNavigation } from "@react-navigation/native";
import { admissionData, admissioninfo, footer } from "../data/Data";

const { height, width } = Dimensions.get("window");

const AdmissionScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header />
        <ScrollView style={styles.innerContainer}>
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
            {admissionData.map((item) => (
              <View
                style={styles.admission}
                key={item.id}
                className="flex flex-1 mt-4 w-11/12"
              >
                <Text className="text-center my-2 text-2xl border-b border-gray-300 text-gray-900 ">
                  {item.header}
                </Text>
                <Text className="text-sm font-light">{item.body}</Text>
              </View>
            ))}
            {admissioninfo.map((item, i) => (
              <View style={styles.admission1} key={i} className="flex  w-11/12">
                <Text className="text-center my-2 text-2xl border-b border-gray-300 text-gray-900 ">
                  {item.header}
                </Text>
                <Text className="text-lg font-semibold ">
                  {item.subheader1}
                </Text>
                <Text className="text-sm font-light">{item.body1}</Text>
                <Text className="text-lg font-semibold">{item.subheader2}</Text>
                <Text className="text-sm font-light mb-2">{item.body2}</Text>

                <Text className="text-sm font-bold mb-2 w-full bg-gray-300">
                  {item.footerText}
                </Text>
              </View>
            ))}
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

  admission: {
    width: width - 30,
  },
  admission1: {
    width: width - 30,
    height: height / 1.6,
  },
});
export default AdmissionScreen;
