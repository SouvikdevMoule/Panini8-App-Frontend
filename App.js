// App.js
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigation"; // Import your StackNavigator
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AuthProvider from "./AuthProvider"; // If you are using an AuthProvider
import Toast from "react-native-toast-message";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export default function App() {
  // Configure Google Sign-In
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "853356304333-7c4kig25td10ud6fatt52tg1dllkq02h.apps.googleusercontent.com", // Replace with your actual webClientId from Google Developer Console
      offlineAccess: true, // Enables server-side access
    });
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </NavigationContainer>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </GestureHandlerRootView>
  );
}
