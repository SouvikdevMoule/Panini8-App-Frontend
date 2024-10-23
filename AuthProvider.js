// AuthProvider.js
import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuthStore from "./store/useAuthStore";
import Toast from "react-native-toast-message";
import { CloudCog } from "lucide-react-native";

const fetchUserData = async () => {
  const accessToken = await AsyncStorage.getItem("access-token");
  let userData = null;

  if (accessToken) {
    try {
      const response = await fetch(
        `${process.env.REACT_NATIVE_APP_API_URL}/api/v1/user/me`, // Replace with your actual API URL
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("ayush", response);

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      userData = await response.json();
    } catch (error) {
      // Remove the token if fetching user data fails
      await AsyncStorage.removeItem("access-token");
      console.error("Error fetching user data:", error);
      Toast.show({
        type: "error",
        text1: "Session expired. Please log in again.",
      });
    }
  }

  return userData;
};

const AuthProvider = ({ children }) => {
  const setUserData = useAuthStore((state) => state.setUserData);
  const clearUserData = useAuthStore((state) => state.clearUserData);
  const isUserLoggedIn = useAuthStore((state) => state.isUserLoggedIn);

  useEffect(() => {
    // Fetch user data on mount
    const initializeUser = async () => {
      const userData = await fetchUserData();

      if (userData) {
        setUserData(userData);
      } else {
        clearUserData();
      }
    };

    initializeUser();
  }, []);

  if (isUserLoggedIn === undefined) {
    // Show a loading state while checking login status
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return children; // Render the child components if the user state is determined
};

export default AuthProvider;
