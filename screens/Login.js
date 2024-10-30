import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
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
      "http://localhost:4000/api/v1/user/login", // Replace with your actual API URL
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
        text1: error.response?.data?.message || "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/panini.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
      blurRadius={4}
    >
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Text style={styles.title}>Log In to Your Account</Text>
          <Text style={styles.subTitle}>Sign in to continue learning</Text>

          {/* Google Sign-In Button (UI only, not functional) */}
          <TouchableOpacity style={styles.googleButton}>
            <View style={styles.googleButtonContent}>
              <Image
                style={styles.googleIcon}
                source={require("../assets/google.png")}
              />
              <Text style={styles.googleButtonText}>Sign in with Google</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.separator}>
            ____________________ OR ____________________
          </Text>

          <View style={styles.formContainer}>
            {/* Email Input Field */}
            <Controller
              name="email"
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Email</Text>
                  <View style={styles.inputField}>
                    <TextInput
                      placeholder="Email Address"
                      placeholderTextColor="#8a8888"
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      style={styles.inputText}
                    />
                  </View>
                  {errors.email && (
                    <Text style={styles.errorText}>
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
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Password</Text>
                  <View style={styles.passwordContainer}>
                    <TextInput
                      placeholder="Enter your password"
                      secureTextEntry={!isPasswordVisible}
                      placeholderTextColor="#8a8888"
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      style={styles.inputText}
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
                    <Text style={styles.errorText}>
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

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit(submit)}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.submitButtonText}>Sign In</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Toast for notifications */}
      <Toast />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBox: {
    width: "90%",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    height: 80,
    width: 180,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 10,
  },
  subTitle: {
    color: "#888",
    fontWeight: "400",
    marginBottom: 20,
  },
  googleButton: {
    width: "80%",
    borderColor: "#888",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  googleButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  googleIcon: {
    height: 24,
    width: 24,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  separator: {
    color: "#888",
    marginVertical: 10,
  },
  formContainer: {
    width: "80%",
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inputText: {
    fontSize: 16,
    flex: 1,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  buttonContainer: {
    width: "80%",
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: "#59B792",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default Login;
