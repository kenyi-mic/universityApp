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
              </View>
              <View>
                <Text className="underline text-xl font-extrabold text-gray-500 my-4">
                  Our Vision & Mission
                </Text>
                <Text>Vision</Text>
                <Text>
                  Recent years have seen a large number of universities have
                  been established in Bangladesh. Nevertheless, the increase in
                  the universities’ number, students, and faculty do not appear
                  to have been reflected in a similar increase in the quality of
                  education. The vision of University of Global Village (UGV) is
                  to flourish as a prestigious seat of learning in the world. As
                  a center of excellence, it aims at attracting scholars from
                  all around the world and to create a dynamic environment for
                  learning, research and innovation.
                </Text>
              </View>
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
