import { View, Text } from "react-native";
import React from "react";
import {
  AcademicCapIcon,
  BookmarkAltIcon,
  BookmarkIcon,
  HomeIcon,
  MenuIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";

const Icons = () => {
  return (
    <View>
      <View className="w-11/12 mx-auto py-3 fleex flex-row justify-around">
        <HomeIcon size={40} color={"darkblue"} title={"Home"} />
        <AcademicCapIcon size={40} color={"darkblue"} title={"Admission"} />
        <BookmarkAltIcon size={40} color={"darkblue"} title={"Courses"} />
        <UserCircleIcon size={40} color={"darkblue"} title={"User"} />
        <MenuIcon size={40} color={"darkblue"} title={"Menu"} />
      </View>
    </View>
  );
};

export default Icons;
