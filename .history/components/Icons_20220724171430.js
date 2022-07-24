import { View, TouchableOpacity } from "react-native";
import React from "react";
import {
  AcademicCapIcon,
  BookOpenIcon,
  HomeIcon,
  LockClosedIcon,
  MapIcon,
  MenuIcon,
  PencilAltIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const Icons = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View className=" py-3 flex flex-row justify-around items-center">
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <HomeIcon size={30} color={"darkblue"} title={"Home"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Adminstration")}>
          <LockClosedIcon size={30} color={"darkblue"} title={"Lock"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Admission")}>
          <PencilAltIcon size={30} color={"darkblue"} title={"Admission"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Academic")}>
          <AcademicCapIcon size={30} color={"darkblue"} title={"Academic"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Courses")}>
          <BookOpenIcon size={30} color={"darkblue"} title={"Courses"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("StudentGuide")}>
          <MapIcon size={30} color={"darkblue"} title={"map"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MenuIcon size={30} color={"darkblue"} title={"Menu"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Icons;
