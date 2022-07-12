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

const IconPack = () => {
  return (
    <View>
      <View className="w-11/12 mx-aut0 fleex flex-row justify-around">
        <HomeIcon size={40} color={"darkblue"} title={"Home"} />
        <AcademicCapIcon size={40} color={"darkblue"} title={""} />
        <BookmarkAltIcon size={40} color={"darkblue"} title={"Home"} />
        <UserCircleIcon size={40} color={"darkblue"} title={"Home"} />
        <MenuIcon size={40} color={"darkblue"} title={"Home"} />
      </View>
    </View>
  );
};

export default IconPack;
