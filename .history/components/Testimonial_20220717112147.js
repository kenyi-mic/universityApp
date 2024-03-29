import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Testimonial = () => {
  return (
    <View className="items-center my-3">
      <View className="w-11/12 my-5 border-2 border-gray-400 pb-5 bg-gray-400 bg-opacity-20 px-3 relative">
        <Text className="text-center my-3">
          "Ugv is one of the wonderful universities I have ever been to, the
          people are friendly from stuff members to fellow students. And above
          all the Lecturers are dedicated for success of every individual
          student. I will love to be there soon in future".
        </Text>
        <Image
          style={styles.image}
          resizeMode="contain"
          className="w-14 h-14 mx-auto rounded-full absolute -bottom-8 left-40 p-2 "
          source={{
            uri:
              "https://media-exp1.licdn.com/dms/image/C5603AQFCVgA88ynROw/profile-displayphoto-shrink_200_200/0/1582767494951?e=2147483647&v=beta&t=VtnOIEBz5deKrkn33WlI7Q2XELnQvDfv4uMFzmLtulM",
          }}
        />
      </View>
      <Text className="text-xl font-semibold my-3">Michael Kenyi</Text>
      <Text>BSCs. Computer Science & Engineering</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    borderColor: "gray",
    borderWidth: 2,
  },
});
export default Testimonial;
