import { StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import AcademicScreen from "../screens/AcademicScreen";
import IQACScreen from "../screens/IQACScreen";
import GalleryScreen from "../screens/GalleryScreen";
import FacultyAndStuffScreen from "../screens/FacultyAndStuffScreen";
import InternationalScreen from "../screens/InternationalScreen";
import AdminstrationScreen from "../screens/AdminstrationScreen";
import ScholarshipScreen from "../screens/ScholarshipScreen";
import OnlineCourseScreen from "../screens/OnlineCourseScreen";
import FaqScreen from "../screens/FaqScreen";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator drawContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Adminstration" component={AdminstrationScreen} />
      <Drawer.Screen name="Academic" component={AcademicScreen} />
      <Drawer.Screen name="Online Courses" component={OnlineCourseScreen} />
      <Drawer.Screen
        name="Faculty & Staff "
        component={FacultyAndStuffScreen}
      />
      <Drawer.Screen name="Gallery" component={GalleryScreen} />
      <Drawer.Screen name="International" component={InternationalScreen} />
      <Drawer.Screen name="IQAC" component={IQACScreen} />
      <Drawer.Screen name="Scholarship" component={ScholarshipScreen} />
      <Drawer.Screen name="FAQs" component={FaqScreen} />
    </Drawer.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
