import { View, Text, FlatList, ScrollView, StyleSheet } from "react-native";
import React from "react";

const { height, width } = Dimensions.get("window");

const VideoPage = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item, index }) => {
          return (
            <ScrollView>
              <View style={styles.card}></View>
            </ScrollView>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width - 20,
    height: height / 3,
  },
});
export default VideoPage;
