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
          <View className="flex flex-1 items-center justify-center ">
            <Image
              source={{
                width: width,
                height: height / 6,
                uri: "https://cutt.ly/NZwrbo0",
              }}
            />
            <Text className="text-2xl font-bold text-blue-50  drop-shadow-lg absolute">
              UGV ADMINSTARATION
            </Text>
            <View style={{ width: width - 20 }} className="my-2">
              <Text className="text font text-slate-700 ml-2 ">
                Adminstration of UGV is made up of the following adminstrative
                bodies:
              </Text>
              <View className="items-center">
                <Adminstrators />
                <Text className="border-b-4 text-center border-gray-300  text-xl font-extrabold text-gray-500 my-4">
                  Our Vision & Mission
                </Text>
                <Image source={{ width:width-20, height:height/3, uri:'https://th.bing.com/th/id/R.193ebd048b21ba0ac1d630e339f28245?rik=UZULaczYAP0kew&riu=http%3a%2f%2fwinkgo.com%2fwp-content%2fuploads%2f2017%2f10%2f19-Steve-Jobs-Quotes-to-Inspire-You-To-Be-Your-Very-Best-Every-Day-05.jpg&ehk=%2fSVhgrS94FsjiGP3bxz%2bCGCYyqaP%2bDaW05IHlbReh3U%3d&risl=&pid=ImgRaw&r=0' }}
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
