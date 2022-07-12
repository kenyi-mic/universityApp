import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect } from "react";
import Icons from "../components/Icons";
import { useNavigation } from "@react-navigation/native";

const logo = "https://ugv.edu.bd/images/webimage/ugv-logo.png";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.homeScreen}>
      <View>
        <Image
          className="mx-4"
          resizeMode="contain"
          source={{
            width: 320,
            height: 70,
            uri: logo,
          }}
        />
      </View>
      <Icons />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default HomeScreen;
