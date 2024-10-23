import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const login = async (data) => {
  try {
    const response = await axios.post(
      "https://server.panini8.com/api/v1/user/login", // Replace with your actual API URL
      data
    );
    return response.data;
  } catch (error) {
    throw error || "Something went wrong!";
  }
};

const Login = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const submit = async (data) => {
    setLoading(true);
    try {
      const res = await login(data);
      Toast.show({
        type: "success",
        text1: "Successfully Logged In!",
      });
      // Ensure accessToken is available before storing it
      if (res?.data?.accessToken) {
        await AsyncStorage.setItem("access-token", res.data.accessToken);
      }

      // Check if sGoalId exists to navigate accordingly
      if (res?.data?.sGoalId) {
        navigation.navigate("Play"); // Replace with your "Play" screen route
      } else {
        navigation.navigate("Goals"); // Replace with your "Goals" screen route
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: error || "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/panini.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
      blurRadius={4}
    >
      <View className="flex-1 justify-center items-center">
        <View className="gap-2 w-[90%] justify-center items-center bg-white py-4 rounded-lg shadow-xl">
          <Image
            className="h-[80px] w-[180px]"
            source={require("../assets/logo.png")}
          />
          <Text className="text-2xl font-semibold">Log In to Your Account</Text>
          <Text className="text-gray-600 font-semibold">
            Sign in to continue learning
          </Text>

          {/* Google Sign-In Button (UI only, not functional) */}
          <TouchableOpacity className="items-center border-2 py-1 border-gray-400 rounded-lg w-[80%] bg-white">
            <View className="flex gap-2 flex-row items-center justify-center">
              <Image
                className="h-8 w-8"
                source={require("../assets/google.png")}
              />
              <Text className="font-semibold text-base">
                Sign in with Google
              </Text>
            </View>
          </TouchableOpacity>

          <Text className="font-semibold text-gray-500 text-base">
            ____________________ OR ____________________
          </Text>

          <View className="w-[80%] flex flex-col">
            {/* Email Input Field */}
            <Controller
              name="email"
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <View className="gap-2">
                  <Text className="text-base font-semibold">Email</Text>
                  <View className="border-[1px] p-2 border-gray-400 rounded-lg mb-2">
                    <TextInput
                      placeholder="Email Address"
                      placeholderTextColor="#8a8888"
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      className="text-base"
                    />
                  </View>
                  {errors.email && (
                    <Text className="mb-1 text-red-500">
                      {errors.email.type === "required" &&
                        "Email Address is required*"}
                    </Text>
                  )}
                </View>
              )}
              rules={{ required: true }}
            />

            {/* Password Input Field */}
            <Controller
              name="password"
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <View className="gap-2">
                  <Text className="text-base font-bold">Password</Text>
                  <View className="border-[1px] p-2 border-gray-400 rounded-lg mb-2 flex flex-row justify-between">
                    <TextInput
                      placeholder="Enter your password"
                      secureTextEntry={!isPasswordVisible}
                      placeholderTextColor="#8a8888"
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      className="w-[80%]"
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                      <Image
                        source={
                          isPasswordVisible
                            ? require("../assets/eye.png")
                            : require("../assets/eye-off.png")
                        }
                      />
                    </TouchableOpacity>
                  </View>
                  {errors.password && (
                    <Text className="mb-1 text-red-500">
                      {errors.password.type === "required" &&
                        "Password is required*"}
                      {errors.password.type === "minLength" &&
                        "Password needs to be at least 8 characters"}
                    </Text>
                  )}
                </View>
              )}
              rules={{ required: true, minLength: 8 }}
            />
          </View>

          <View className="w-full justify-center items-center">
            <View className="w-[80%]">
              <TouchableOpacity
                className="bg-[#59B792] p-3 rounded-full"
                onPress={handleSubmit(submit)}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text className="text-white font-bold text-center text-xl">
                    Sign In
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Toast for notifications */}
      <Toast />
    </ImageBackground>
  );
};

export default Login;
