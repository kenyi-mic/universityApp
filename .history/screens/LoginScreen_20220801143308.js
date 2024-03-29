import {
  View,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LockClosedIcon, UserIcon } from "react-native-heroicons/outline";

const { width, height } = Dimensions.get("window");
const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View className="flex items-center justify-center ">
          <Image
            style={styles.image}
            source={{ uri: "https://cutt.ly/wZnTjoI" }}
          />

          <Text className="text-xl text-blue-900 font-semibold my-8">
            Enter your student details
          </Text>
          <View className=" w-full">
            <View className="bg-slate-50 w-9/12 py-5 rounded-tr-full rounded-br-full">
              <View className="flex flex-row  w-9/12 ">
                <UserIcon color={"blue"} size={40} />
                <TextInput className="text-lg w-3/4" placeholder="Student ID" />
              </View>
              <View className="flex flex-row  w-9/12">
                <LockClosedIcon color={"blue"} size={40} />
                <TextInput
                  className="text-xl font-bold w-3/4 "
                  placeholder="........."
                  secureTextEntry={true}
                />
              </View>
            </View>
          </View>
        </View>
        <View className="items-end">
          <TouchableOpacity className=" bg-blue-50 my-5 w-2/3 px-4 rounded-bl-full">
            <Text className="text-base font-semibold  text-slate-700 pr-10 py-2 ">
              Forget your password?
            </Text>
          </TouchableOpacity>
        </View>

        <View className="bg-blue-50 my-5 w-1/3 rounded-tr-full">
          <TouchableOpacity>
            <Text className="text-lg pl-10 py-2  text-green-500  font-semibold ">
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",

    height: height,
  },
  image: {
    width: 120,
    height: 120,
    marginVertical: 20,
  },
});

export default LoginScreen;
