import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  AcademicCapIcon,
  BookmarkAltIcon,
  HomeIcon,
  MenuIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
const navigation = useNavigation();
const Icons = () => {
  return (
    <View>
      <View className=" py-3 flex flex-row justify-around items-center">
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <HomeIcon size={40} color={"blue"} title={"Home"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AcademicCapIcon size={40} color={"darkblue"} title={"Admission"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <BookmarkAltIcon size={40} color={"darkblue"} title={"Courses"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <UserCircleIcon size={40} color={"darkblue"} title={"User"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MenuIcon size={40} color={"darkblue"} title={"Menu"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Icons;
