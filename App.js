// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigation"; // Import your StackNavigator
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AuthProvider from "./AuthProvider"; // If you are using an AuthProvider
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </NavigationContainer>
      <Toast />
    </GestureHandlerRootView>
  );
}
