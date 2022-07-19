import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Navigation = () => {
  return (
    <View>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerTitle: "Student Portal",
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
