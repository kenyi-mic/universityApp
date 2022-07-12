import {
  View,
  TextInput,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect } from "react";
import Icons from "../components/Icons";
import { useNavigation } from "@react-navigation/native";
import { SearchIcon } from "react-native-heroicons/outline";
import Carousel from "../components/Carousel";

const data = [
  {
    title: "1st UGV South Zone Programming Contest 2022",
    image: "https://ugv.edu.bd/images/event_featuredimages/1655545131.jpg",
    description: `Student studying in a school, college and university in South Zone of Bangladesh 
            (Barisal, Barguna, Bhola, Jhalokati, Patuakhali, Pirojpur, Khulna, Bagerhat, Chuadanga, 
            Jashore, Jhenaidah, Kushtia, Magura, Meherpur, Narail, Satkhira, Madaripur, 
            Gopalganj, faridpur, and Shariatpur) can participate this contest`,
    id: "01",
  },
  {
    title: "Bangabandhu Inter University Sports CHAMPS 2020",
    image: "https://ugv.edu.bd/images/event_images/189846288.jpg",
    description: `Bangabandhu_Inter_University_Sports_CHAMPS_2020 #ঢাকা ইন্টারন্যাশনাল ইউনিভার্সিটিকে ২_০ হারিয়ে গ্রুপ চ্যাম্পিয়ন হয়ে ২য় রাউন্ডে ইউনিভার্সিটি অব গ্লোবাল ভিলেজ, বরিশাল।`,
    id: "02",
  },
  {
    title: "Seminar on machine learning",
    image: "https://ugv.edu.bd/images/event_images/1844168870.JPG",
    description: `This event happen during carnival of 2019, where group of instructors who brought from priestigues universities to take seminor with student of university of global village. And machine learning siminar is one of em.`,
    id: "04",
  },
  {
    title: "Photo Exhibition",
    image: "https://ugv.edu.bd/images/event_featuredimages/1580294391.JPG",
    description: `Event of showing talent on photography where everyone is encouraged to bring their favority photo shot.`,
    id: "05",
  },
  {
    title: "Prize Giving and Closing Ceremony",
    image: "https://ugv.edu.bd/images/event_images/340088945.JPG",
    description: `UGV carnival 2019, is one the promising event that occured in 2019. It involed variety of computational activities and great awards for those who won.`,
    id: "06",
  },
];

const logo = "https://ugv.edu.bd/images/webimage/ugv-logo.png";

const HomeScreen = () => {
  console.log(data);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, 3000);
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default HomeScreen;
