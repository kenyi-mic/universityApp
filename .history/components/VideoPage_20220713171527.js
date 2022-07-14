import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import Video from "react-native-video";

const { width, height } = Dimensions.get("screen");
const UgvIntroVideo = require("../assets/ugvVid.mkv");

const VideoPage = () => {
  const [data, setData] = useState(null);
  return (
    <View className="flex flex-1  justify-center items-center">
      <View
        style={{ width: width - 20, height: height / 4 }}
        className="bg-slate-600"
      >
        <Video source={{ uri: UgvIntroVideo }} paused={true} />
      </View>
    </View>
  );
};

export default VideoPage;
