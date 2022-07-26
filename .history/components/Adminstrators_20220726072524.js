import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { adminstratorsData } from "../data/Data";
import { useNavigation } from "@react-navigation/native";

const rows = 3;
const cols = 2;
const marginHorizontal = 4;
const marginVertical = 4;
const width =
  Dimensions.get("window").width / cols - marginHorizontal * (cols + 1);
const height =
  Dimensions.get("window").height / rows - marginVertical * (rows + 1);

const Adminstrators = () => {
  const navigation = useNavigation();
  return (
    <View style={StyleSheet.section} className=" ">
      <View className="">
        {adminstratorsData.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              navigation.navigate(item.screen);
            }}
          >
            <View style={styles.card} className="">
              <Image
                resizeMode="cover"
                source={{
                  width: "100%",
                  height: 125,
                  uri: item.image,
                }}
              />
              <View className="m-2">
                <Text className="text-sm font-bold py-1">{item.name}</Text>
                <Text className="text-xs font-bold text-blue-900">
                  {item.position}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    flexDirection: "cols",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    marginTop: marginVertical,
    marginBottom: marginVertical,
    marginLeft: marginHorizontal,
    marginRight: marginHorizontal,
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gold",
  },
});
export default Adminstrators;
