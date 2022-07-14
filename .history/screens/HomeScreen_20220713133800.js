import {
  View,
  TextInput,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import Icons from "../components/Icons";
import { useNavigation } from "@react-navigation/native";
import {
  AcademicCapIcon,
  DesktopComputerIcon,
  SearchIcon,
} from "react-native-heroicons/outline";
import Carousel from "../components/Carousel";
import { data, aboutUgv } from "../data/Data";
import VideoPage from "../components/VideoPage";

const logo = "https://ugv.edu.bd/images/webimage/ugv-logo.png";
const { width, height } = Dimensions.get("screen");
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <SafeAreaView style={styles.homeScreen}>
      {/* ugv logo */}
      <View className="bg-gray-200 w-full flex  items-center">
        <Image
          resizeMode="contain"
          source={{
            uri: logo,
          }}
          className="w-5/6 h-20 object-contain"
        />
      </View>
      {/* Navigation icons */}

      <Icons />
      <ScrollView>
        {/*Search bar */}
        <View className=" flex justify-center items-center">
          <View className="flex flex-row space-x-2 bg-gray-200 items-center p-2 w-11/12 ">
            <SearchIcon size={20} color={"gray"} />
            <TextInput
              className="text-lg"
              KeyboardType={"default"}
              placeholder="Search"
            />
          </View>
        </View>

        {/*Carousel */}

        <Carousel data={data} />
        {aboutUgv.map((item) => (
          <View key={item.id} className=" m-3">
            <Text className="text-lg font-semibold text-slate-700 mb-2 ">
              {item.title}
            </Text>
            <Text className="text-sm ">{item.body}</Text>
          </View>
        ))}
        <View className="pb-7">
          <VideoPage />
        </View>
        {/*notice board*/}
        <View className="flex flex-1  justify-center items-center ">
          <View
            style={{ width: width - 20, height: height / 1.8 }}
            className="bg-blue-900 flex-1"
          >
            <Text className="text-2xl font-semibold text-white mt-10 mx-8">
              Notice Board
            </Text>
            {/* start of notice content*/}
            <View className="pb-10">
              <TouchableOpacity>
                <Text className="text-sm bg-blue-200 p-2 font-semibold text-white mx-8 my-2 ">
                  + Holiday Notice "Holy Eid-UL-Adha-2022"
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-sm bg-blue-200 p-2 font-semibold text-white mx-8 my-2 ">
                  + Holiday Notice "Holy Eid-UL-Adha-2022"
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-sm bg-blue-200 p-2 font-semibold text-white mx-8 my-2 ">
                  + Holiday Notice "Holy Eid-UL-Adha-2022"
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-sm bg-blue-200 p-2 font-semibold text-white mx-8 my-2 ">
                  + Holiday Notice "Holy Eid-UL-Adha-2022"
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-sm bg-blue-200 p-2 font-semibold text-white mx-8 my-2 ">
                  + Holiday Notice "Holy Eid-UL-Adha-2022"
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-sm bg-blue-200 p-2 font-semibold text-white mx-8 my-2 ">
                  + Holiday Notice "Holy Eid-UL-Adha-2022"
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-sm bg-blue-200 p-2 font-semibold text-white mx-8 my-2 ">
                  + Holiday Notice "Holy Eid-UL-Adha-2022"
                </Text>
              </TouchableOpacity>
            </View>
            {/* End of notice content*/}
          </View>

          <View className="flex flex-1  justify-center items-center my-10">
            <View
              style={{ width: width, height: height / 1.9 }}
              className="bg-blue-900"
            >
              <Text className="text-4xl font-semibold text-white text-center my-5">
                Why Choose us?
              </Text>
              <View className="items-center py-2">
                <Text className="text-xl text-white text-center my-2 ">
                  Best Lab
                </Text>
                <TouchableOpacity>
                  <AcademicCapIcon
                    style={{
                      backgroundColor: "white",
                      borderRadius: 50,
                      padding: 2,
                    }}
                    size={60}
                    color={"red"}
                  />
                </TouchableOpacity>
              </View>
              <View className="items-center py-2">
                <Text className="text-xl text-white text-center my-2">
                  Best Lectures
                </Text>
                <TouchableOpacity>
                  <DesktopComputerIcon
                    style={{
                      backgroundColor: "white",
                      borderRadius: 50,
                      padding: 2,
                    }}
                    size={50}
                    color={"red"}
                  />
                </TouchableOpacity>
              </View>
              <View className="items-center py-2">
                <Text className="text-xl text-white text-center my-2 ">
                  Best Libraries
                </Text>
                <TouchableOpacity>
                  <AcademicCapIcon
                    style={{
                      backgroundColor: "white",
                      borderRadius: 50,
                      padding: 2,
                    }}
                    size={60}
                    color={"red"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default HomeScreen;
