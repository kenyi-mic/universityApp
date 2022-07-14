import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  AcademicCapIcon,
  BookmarkAltIcon,
  HomeIcon,
  MenuIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";

const Icons = () => {
  return (
    <View>
      <View className=" py-3 flex flex-row justify-around items-center">
        <TouchableOpacity>
          <HomeIcon size={40} color={"blue"} title={"Home"} />
        </TouchableOpacity>
        <AcademicCapIcon size={40} color={"darkblue"} title={"Admission"} />
        <BookmarkAltIcon size={40} color={"darkblue"} title={"Courses"} />
        <UserCircleIcon size={40} color={"darkblue"} title={"User"} />
        <MenuIcon size={40} color={"darkblue"} title={"Menu"} />
      </View>
    </View>
  );
};

export default Icons;
