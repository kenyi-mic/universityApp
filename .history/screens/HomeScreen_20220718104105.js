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
  DesktopComputerIcon,
  LibraryIcon,
  SearchIcon,
  UserGroupIcon,
} from "react-native-heroicons/outline";
import Event from "../components/Events";
import Carousel from "../components/Carousel";
import CourseCarousel from "../components/CourseCarousel";
import LectureCarousel from "../components/LectureCarousel";
import { data, aboutUgv, courseData, teacher, testimonial } from "../data/Data";
import VideoPage from "../components/VideoPage";
import InfoPage from "../components/InfoPage";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Header from "../components/Header";

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
      {/* Header */}

      <Header />

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
              style={{ width: width, height: height / 1.5 }}
              className="bg-blue-900"
            >
              <Text className="text-4xl font-semibold text-white text-center my-10">
                Why Choose us?
              </Text>
              <View className="items-center py-2">
                <Text className="text-xl font-semibold text-white text-center my-2 ">
                  Best Lab
                </Text>
                <TouchableOpacity className="bg-white opacity-70 rounded-full p-2">
                  <DesktopComputerIcon size={60} color={"red"} />
                </TouchableOpacity>
              </View>
              <View className="items-center py-2">
                <Text className="text-xl font-semibold text-white text-center my-2">
                  Best Lectures
                </Text>
                <TouchableOpacity className="bg-white opacity-70 rounded-full p-2">
                  <UserGroupIcon size={60} color={"red"} />
                </TouchableOpacity>
              </View>
              <View className="items-center py-2">
                <Text className="text-xl font-semibold text-white text-center my-2 ">
                  Best Libraries
                </Text>
                <TouchableOpacity className="bg-white opacity-70 rounded-full p-2">
                  <LibraryIcon size={60} color={"red"} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <CourseCarousel data={courseData} />
        <View>
          <InfoPage />
        </View>
        <LectureCarousel data={teacher} />
        {/*Events */}
        <Event />
        {/*History of ugv */}
        <View className="flex items-center">
          <Text className="text-2xl text-extrabold text-gray-700 mt-5">
            HISTORY OF OUR UNIVERSITY
          </Text>
          <Text
            style={{ width: width - 30 }}
            numberOfLines={7}
            className="text-lg font-extralight "
          >
            University of Global Village (UGV), the first private university in
            southern part of Bangladesh (Barisal division), was established by
            the University of Global Village Trust and founded by Infra
            Polytechnic Institute, Barisal. The government of Bangladesh and
            University Grants Commission (UGC) approved the establishment of UGV
            in 2016 under Private University Act (PUA)-2010. The honorable
            President of the People’s Republic of Bangladesh is the Chancellor
            of UGV. Dr. Md. Imran Chowdhury is the current Chairman of the
            University of Global Village Trust according to PUA-2010. The Board
            of Trustees (BOT), the highest policy making body of UGV, provides
            the overall policy guidelines and approves annual budget of the
            University, is headed by the Chairman. The Syndicate, the highest
            executive body headed by the Vice-Chancellor runs the administration
            of the University according to the policy guidelines provided by
            PUA-2010. The Vice Chancellor Professor Dr. Jahangir Alam Khan as
            the chief executive and academic officer of the university , runs
            the university with the cooperation of the statutory bodies operate
            under the provision of the Statutes prepared within the framework of
            PUA-2010. The Registrar maintains the university records including
            admissions and keeps liaison with Ministry of Education, UGC and
            other relevant authorities. The Controller of Examinations conducts
            examinations and tests of the university and declares results after
            taking approval from appropriate authorities. UGV has the authority,
            under its Charter, to confer undergraduate and graduate degrees in
            all branches of arts, business and engineering. Currently, UGV
            offers Bachelor’s and Master’s degrees in 7 subjects (5 Bachelor’s
            degrees and 2 Master’s degrees). Additional programs are under
            preparation.
          </Text>

          <TouchableOpacity className="items-center">
            <Text className="text-lg font-italic text-blue-500">
              Continue reading...
            </Text>
          </TouchableOpacity>
          <Image
            resizeMode="cover"
            className="w-11/12 h-72 my-5"
            source={{
              uri: "https://ugv.edu.bd/images/message_images/1582729969.jpg",
            }}
          />
        </View>
        {/*Testimonials */}
        <View className="bg-slate-900 my-5">
          <Text className="text-white text-2xl text-center font-semibold pt-5 ">
            TESTIMONIAL
          </Text>
          <TestimonialCarousel data={testimonial} />
        </View>

        {/*Alumni */}
        <View className="flex flex-1 items-center mb-5">
          <View className="w-11/12">
            <Text className="text-2xl text-red-600 text-center my-3 ">
              ALUMNI
            </Text>
            <Text classaName="text-center">
              This unversity has more than 500 graduates since it was
              established in 2017, and all our Alumi are helping in saving the
              world in distinct ways. Their contribution out there is visible as
              well as in our university. We are dedicated on teaching students
              who will be the solution for tomorrow.
            </Text>
          </View>
        </View>
        <View className="bg-blue-900 py-3">
          <Text className="text-gray-300 text-sm font-bold text-center ">
            UGV APP development group
          </Text>
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
