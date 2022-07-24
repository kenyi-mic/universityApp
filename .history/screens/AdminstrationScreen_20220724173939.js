import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import Adminstrators from "../components/Adminstrators";
import { missionData } from "../data/Data";

const { width, height } = Dimensions.get("window");

const AdminstrationScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <View className="flex flex-1 items-center justify-center relative">
            <Image
              source={{
                width: width,
                height: height / 6,
                uri: "https://cutt.ly/NZwrbo0",
              }}
            />
            <Text className=" absolute top-14 text-3xl font-bold drop-shadow-lg text-white">
              UGV ADMINSTARATION
            </Text>
            <View style={{ width: width - 20 }} className="my-2">
              <Text className="text-2xl bg-gray-50 text-blue-900 font-extrabold py-5 mx-2 ">
                ADMINSTRATIVE BODY OF UGV
              </Text>
              <View className="items-center">
                <Adminstrators />
                <Text className="border-b-4 text-center border-gray-300  text-xl font-extrabold text-gray-500 my-4">
                  Our Vision & Mission
                </Text>
                <Image
                  resizeMode="contain"
                  source={{
                    width: width - 40,
                    height: height / 2.8,
                    uri: "https://th.bing.com/th/id/R.193ebd048b21ba0ac1d630e339f28245?rik=UZULaczYAP0kew&riu=http%3a%2f%2fwinkgo.com%2fwp-content%2fuploads%2f2017%2f10%2f19-Steve-Jobs-Quotes-to-Inspire-You-To-Be-Your-Very-Best-Every-Day-05.jpg&ehk=%2fSVhgrS94FsjiGP3bxz%2bCGCYyqaP%2bDaW05IHlbReh3U%3d&risl=&pid=ImgRaw&r=0",
                  }}
                />
              </View>

              {missionData.map((item) => (
                <View key={item.id} className="mx-2 ">
                  <Text className="text-lg text-gray-400 font-bold">
                    {item.title}
                  </Text>
                  <Text className="text-sm  text-gray-700">
                    {item.description}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
        <Text className="font-italic text-center text-gray-100 py-3  bg-blue-900 border-t w-full border-gray-300 ">
          Check our website: ugv.edu.bd/
        </Text>
      </View>
      <Text className="w-full bg-blue-900"></Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: height,
  },
});

export default AdminstrationScreen;
