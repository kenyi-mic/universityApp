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
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CheckIcon,
  GiftIcon,
  GlobeIcon,
  HomeIcon,
  InformationCircleIcon,
  LightBulbIcon,
  LockClosedIcon,
  PencilAltIcon,
  PhotographIcon,
  UsersIcon,
} from "react-native-heroicons/outline";
import AdmissionScreen from "../screens/AdmissionScreen";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#003366",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",

        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 16,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <HomeIcon size={22} color={color} title={"Home"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Adminstration"
        component={AdminstrationScreen}
        options={{
          drawerIcon: ({ color }) => (
            <LockClosedIcon size={22} color={color} title={"Admin"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Admission"
        component={AdmissionScreen}
        options={{
          drawerIcon: ({ color }) => (
            <PencilAltIcon size={22} color={color} title={"Admission"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Adminstration"
        component={AdminstrationScreen}
        options={{
          drawerIcon: ({ color }) => (
            <LockClosedIcon size={22} color={color} title={"Admin"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Adminstration"
        component={AdminstrationScreen}
        options={{
          drawerIcon: ({ color }) => (
            <LockClosedIcon size={22} color={color} title={"Admin"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Academic"
        component={AcademicScreen}
        options={{
          drawerIcon: ({ color }) => (
            <AcademicCapIcon size={22} color={color} title={"Academic"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Online Courses"
        component={OnlineCourseScreen}
        options={{
          drawerIcon: ({ color }) => (
            <BadgeCheckIcon size={22} color={color} title={"Courses"} />
          ),
        }}
      />

      <Drawer.Screen
        name="Faculty & Staff "
        component={FacultyAndStuffScreen}
        options={{
          drawerIcon: ({ color }) => (
            <UsersIcon size={22} color={color} title={"Faculty"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          drawerIcon: ({ color }) => (
            <PhotographIcon size={22} color={color} title={"Gallery"} />
          ),
        }}
      />
      <Drawer.Screen
        name="International"
        component={InternationalScreen}
        options={{
          drawerIcon: ({ color }) => (
            <GlobeIcon size={22} color={color} title={"International"} />
          ),
        }}
      />
      <Drawer.Screen
        name="IQAC"
        component={IQACScreen}
        options={{
          drawerIcon: ({ color }) => (
            <CheckIcon size={22} color={color} title={"IQAC"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Scholarship"
        component={ScholarshipScreen}
        options={{
          drawerIcon: ({ color }) => (
            <GiftIcon size={22} color={color} title={"Offer"} />
          ),
        }}
      />
      <Drawer.Screen
        name="FAQs"
        component={FaqScreen}
        options={{
          drawerIcon: ({ color }) => (
            <InformationCircleIcon size={22} color={color} title={"faq"} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
