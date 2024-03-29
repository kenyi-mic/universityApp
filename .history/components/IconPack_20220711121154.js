import { View, Text } from "react-native";
import React from "react";
import {
  AcademicCapIcon,
  BookmarkIcon,
  HomeIcon,
  MenuIcon,
  UserCircleIcon,
} from "react-native-heroicons/solid";

const IconPack = () => {
  return (
    <View>
      <View className="w-11/12 mx-auto p-3">
        <HomeIcon size={40} color={"darkblue"} title={"Home"} />
        <AcademicCapIcon size={40} color={"darkblue"} title={"Home"} />
        <BookmarkAltIcon size={40} color={"darkblue"} title={"Home"} />
        <UserCircleIcon size={40} color={"darkblue"} title={"Home"} />
        <MenuIcon size={40} color={"darkblue"} title={"Home"} />
      </View>
    </View>
  );
};

export default IconPack;
