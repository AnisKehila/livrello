import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className={`flex-1 bg-bgc-primary w-full`}>
      <Text className="text-5xl">Home page</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
