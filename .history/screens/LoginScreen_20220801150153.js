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
import {
  ArrowRightIcon,
  LockClosedIcon,
  PlusIcon,
  UserIcon,
} from "react-native-heroicons/outline";

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
            <View className="bg-slate-50 w-9/12 py-5 rounded-tr-full rounded-br-full relative">
              <View className="px-4">
                <View className="flex flex-row  w-9/12 border-b-4 border-gray-200 py-2 ">
                  <UserIcon color={"blue"} size={40} />
                  <TextInput
                    className="text-lg w-3/4"
                    placeholder="Student ID"
                  />
                </View>
                <View className="flex flex-row  w-9/12 py-2">
                  <LockClosedIcon color={"blue"} size={40} />
                  <TextInput
                    className="text-xl font-bold w-3/4  "
                    placeholder="........."
                    secureTextEntry={true}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity>
              <View className="items-center justify-center w-14 h-14 rounded-full absolute bg-blue-500 left-2/3 top-12 ">
                <ArrowRightIcon size={40} color={"white"} />
              </View>
            </TouchableOpacity>
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
            <Text className="text-lg pl-10 py-2  text-blue-500  font-semibold ">
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
