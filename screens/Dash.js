import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/Header';
import PracticeSection from '../components/PracticeSection';
import Mock from '../components/Mock';

export default function Dash() {
  return (
    <View className="flex-1">
      <Header />
      <ScrollView>
      <LinearGradient
        // Gradient colors: from green-200 to blue-100
        colors={['#bbf7d0', '#dbeafe']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="flex-1 p-6"
      >
        <Text className="text-2xl font-bold text-green-700 mb-4">
          Arjun, <Text className="text-black">Welcome to AMC 10 Dashboard</Text>
        </Text>

        <View className="w-full h-48 bg-white rounded-lg shadow-lg overflow-hidden mb-6 border-2 border-white">
          <Image
            source={require("../assets/img.jpg")}
            className="w-full h-full"
            resizeMode="cover"
          />
          <View className="absolute bottom-2 left-2 bg-black bg-opacity-50 px-3 py-1 rounded">
            <Text className="text-white text-lg font-semibold">AMC 10</Text>
          </View>
        </View>

        <View className="w-full flex-row flex-wrap justify-between bg-gray-100 rounded-lg shadow-lg p-3 mb-6">
          <TouchableOpacity
            className="w-[48%] bg-white py-4 rounded-full mb-4 items-center flex-row justify-center"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 5, // For Android
            }}
          >
            <Image
              source={require("../assets/practice.png")}
              className="w-5 h-5 mr-3"
              resizeMode="cover"
            />
            <Text className="text-gray-700 font-semibold">Practice</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-[48%] bg-white py-4 rounded-full mb-4 items-center  flex-row justify-center"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 5, // For Android
            }}
          >
            <Image
              source={require("../assets/practice.png")}
              className="w-5 h-5 mr-3"
              resizeMode="cover"
            />
            <Text className="text-gray-700 font-semibold">Mock Test</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-[48%] bg-white py-4 rounded-full mb-4 items-center  flex-row justify-center"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 5, // For Android
            }}
          >
            <Image
              source={require("../assets/practice.png")}
              className="w-5 h-5 mr-3"
              resizeMode="cover"
            />
            <Text className="text-gray-700 font-semibold">Ask Doubts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-[48%] bg-white py-4 rounded-full mb-4 items-center  flex-row justify-center"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 5, // For Android
            }}
          >
            <Image
              source={require("../assets/practice.png")}
              className="w-5 h-5 mr-3"
              resizeMode="cover"
            />
            <Text className="text-gray-700 font-semibold">Track Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-[48%] bg-white py-4 rounded-full mb-4 items-center  flex-row justify-center"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 5, // For Android
            }}
          >
            <Image
              source={require("../assets/practice.png")}
              className="w-5 h-5 mr-3"
              resizeMode="cover"
            />
            <Text className="text-gray-700 font-semibold">Live Classes</Text>
          </TouchableOpacity>
        </View>

        {/* Live Class & Growth Path Section */}
        <View className="w-full bg-white rounded-lg shadow-lg p-4 mb-6">
          <View className="flex-row items-center mb-4">
            <Image
              source={require("../assets/icon.png")} // Replace with your actual icon path
              className="w-6 h-6 mr-2"
            />
            <Text className="text-lg font-bold">Live Class & Growth Path</Text>
          </View>
          
          <View className="bg-gray-100 p-4 rounded-lg mb-4"
           style={{
            shadowColor: '#000',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5, // For Android
          }}>
            <Text className="text-gray-700 mb-4"
           
            >
              Join our live classes and get personalized growth paths to enhance your learning experience.
            </Text>
            <TouchableOpacity className="flex-row items-center bg-blue-600 py-2 px-4 rounded-full mb-2 justify-center">
            <Image
              source={require("../assets/practice.png")} // Replace with the actual icon path
              className="w-4 h-4 mr-2 "
            />
            <Text className="text-white font-semibold">TRY</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="flex-row items-center bg-yellow-500 py-2 px-4 rounded-full mb-2 justify-center">
            <Text className="text-white font-semibold">Read Testimonial</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="flex-row items-center bg-blue-600 py-2 px-4 rounded-full justify-center">
            <Image
              source={require("../assets/practice.png")} // Replace with the actual icon path
              className="w-4 h-4 mr-2"
            />
            <Text className="text-white font-semibold">Upcoming Tasks</Text>
          </TouchableOpacity>
          </View>


        </View>
        <PracticeSection /> 
        <Mock/>
      </LinearGradient>
      </ScrollView>
    </View>
  );
}
