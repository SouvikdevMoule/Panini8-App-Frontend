import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeIn, FadeOutDown } from "react-native-reanimated";
import Video, { VideoRef } from "react-native-video";

const Loading = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");

    }, 2300); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className=" flex-1 items-center justify-center  w-full h-full">
      {/* <Image  className="w-[600px] h-[100vh]" source={require('../assets/loading.gif')} /> */}
      <ImageBackground
        className="w-[600px] h-[100vh]"
        source={require("../assets/loading.gif")}
      />
    </View>
  );
};
export default Loading;
