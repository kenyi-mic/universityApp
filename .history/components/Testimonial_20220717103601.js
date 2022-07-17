import { View, Text, Image } from "react-native";
import React from "react";

const Testimonial = () => {
  return (
    <View className="items-center my-3">
      <View className="w-11/12 my-5 relative">
        <Text className="text-center border-2 border-gray-300 p-3">
          Ugv is one of the wonderful universities I have ever been to, the
          people are friendly from stuff members to fellow students. And above
          all the Lecturers are dedicated for success of every individual
          student. I will love to be there soon in future.
        </Text>
        <Image
          resizeMode="contain"
          className="w-14 h-14 mx-auto rounded-full absolute top-3/4 inset-x-2/4"
          source={{
            uri:
              "https://media-exp1.licdn.com/dms/image/C5603AQFCVgA88ynROw/profile-displayphoto-shrink_200_200/0/1582767494951?e=2147483647&v=beta&t=VtnOIEBz5deKrkn33WlI7Q2XELnQvDfv4uMFzmLtulM",
          }}
        />
      </View>
    </View>
  );
};

export default Testimonial;
