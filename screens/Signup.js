import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, TouchableOpacity, Button, TextInput, ScrollView, ImageBackground } from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';


const Signup = () => {
  const { formState: { errors }, control, handleSubmit } = useForm();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const submit = async (data) => {
      console.log('Form data:', data); 
  };
  const togglePasswordVisibility = () => {
      setIsPasswordVisible((prevState) => !prevState);
    };
  const navigation = useNavigation();
    return (
      <ImageBackground
            source={require('../assets/panini.png')} // Your background image
            style={{ flex: 1 }}
            resizeMode="cover"
            blurRadius={4} // Adjust this based on how you want the image to be displayed
            >
            <ScrollView>
              <View className="flex-1 justify-center items-center ">
              <View className="flex-1 gap-2 w-[90%]   items-center my-20 bg-white py-4 rounded-lg shadow-xl ">
          <Image className="h-[80px] w-[180px]" source={require('../assets/logo.png')}/>
          <Text className="text-2xl font-semibold">Create your account</Text>
          <Text className="text-gray-600 font-semibold">Sign Up and Start learning</Text>
          <TouchableOpacity className=" items-center  border-2 py-1 border-gray-400 rounded-lg w-[80%] bg-white">
            <View className="flex gap-2 flex-row items-center justify-center">
            <Image className="h-8 w-8" source={require('../assets/google.png')}/>  
            <Text className="font-semibold text-base">Sign up with Google </Text>
            </View>
          </TouchableOpacity>
          <Text className="font-semibold text-gray-500 text-base">____________________ OR ____________________</Text>
          <View className="w-[80%] flex flex-col ">
          <Controller
                    name='email'
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <View className=" gap-2">
                        <Text className="text-base font-semibold ">Email</Text>
                        <View className="border-[1px] p-2 border-gray-400 rounded-lg w-full mb-2 bg-white">
                            <TextInput
                            placeholder='Email Address'
                            placeholderTextColor={'#8a8888'}
                            className="text-base font-semibold"
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            />
                        </View>
                        {errors.email && (
                            <Text className="mb-1 font-semibold text-red-500">
                            {errors.email.type === 'required' && 'Email Address is required*'}
                            </Text>
                        )}
                        </View>
                    )}
                    rules={{ required: true }}
              />
            <Controller
          name="password"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <View
              className="gap-2 "
            >
              <Text className="text-black font-bold text-base ">
                Password
              </Text>
              <View className="border-[1px] p-2 border-gray-400 rounded-lg w-full mb-2 flex flex-row justify-between bg-white">
                <TextInput
                  placeholder="Enter your password"
                  secureTextEntry={!isPasswordVisible}
                  placeholderTextColor={"#8a8888"}
                  className="font-semibold text-base w-[80%]"
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
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
                <Text className="mb-1 font-semibold text-red-500">
                  {errors.password.type === "required" &&
                    "Password is required*"}
                  {errors.password.type === "minLength" &&
                    "Password needs to be at least 8 characters"}
                  {errors.password.type === "maxLength" &&
                    "Password cannot be more than 12 characters long."}
                </Text>
              )}
            </View>
          )}
          rules={{ required: true, minLength: 8, maxLength: 12 }}
        />
            <Controller
                    name='fname'
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <View className=" gap-2 ">
                        <Text className="text-base font-semibold">First Name</Text>
                        <View className="border-[1px] p-2 border-gray-400 rounded-lg w-full mb-2 bg-white">
                            <TextInput
                            placeholder='First Name'
                            placeholderTextColor={'#8a8888'}
                            className="text-base font-semibold"
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            />
                        </View>
                        {errors.fname && (
                            <Text className="mb-1 font-semibold text-red-500">
                            {errors.fname.type === 'required' && 'Food Name is required*'}
                            </Text>
                        )}
                        </View>
                    )}
                    rules={{ required: true }}
                    />
                  <Controller
                    name='lname'
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <View className=" gap-2">
                        <Text className="text-base font-semibold">Last Name</Text>
                        <View className="border-[1px] p-2 border-gray-400 rounded-lg w-full bg-white">
                            <TextInput
                            placeholder='Last Name'
                            placeholderTextColor={'#8a8888'}
                            className="text-base font-semibold"
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            />
                        </View>
                        {errors.lname && (
                            <Text className="mb-1 font-semibold text-red-500">
                            {errors.lname.type === 'required' && 'Food Name is required*'}
                            </Text>
                        )}
                        </View>
                    )}
                    rules={{ required: true }}
                    />
            <Controller
                    name='age'
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <View className=" gap-2">
                        <Text className="text-base font-semibold">Age</Text>
                        <View className="border-[1px] p-2 border-gray-400 rounded-lg w-full mb-2 bg-white">
                            <TextInput
                            placeholder='Enter Your Age'
                            placeholderTextColor={'#8a8888'}
                            className="text-base font-semibold"
                            value={value}
                            onBlur={onBlur}
                            keyboardType='numeric'
                            onChangeText={onChange}
                            />
                        </View>
                        {errors.age && (
                            <Text className="mb-1 font-semibold text-red-500">
                            {errors.age.type === 'required' && 'Food Name is required*'}
                            </Text>
                        )}
                        </View>
                    )}
                    rules={{ required: true }}
              />
          <Controller
                    name='country'
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <View className=" gap-2">
                        <Text className="text-base font-semibold ">Country</Text>
                        <View className="border-[1px] p-2 border-gray-400 rounded-lg w-full mb-2 bg-white">
                            <TextInput
                            placeholder='Enter Your Country'
                            placeholderTextColor={'#8a8888'}
                            className="text-base font-semibold"
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            />
                        </View>
                        {errors.country && (
                            <Text className="mb-1 font-semibold text-red-500">
                            {errors.country.type === 'required' && 'Food Name is required*'}
                            </Text>
                        )}
                        </View>
                    )}
                    rules={{ required: true }}
              />
          </View>
          <View className="w-full justify-center items-center ">
          <View className="w-[80%] ml-3 ">
          <TouchableOpacity className=" bg-[#59B792] p-3 rounded-full" onPress={handleSubmit(submit)}>
                <Text className="text-white font-bold text-center text-xl">Submit</Text>
          </TouchableOpacity>
          </View>
          </View>
      </View>
              </View>
            </ScrollView>
      </ImageBackground>
    )
  }
  export default Signup;