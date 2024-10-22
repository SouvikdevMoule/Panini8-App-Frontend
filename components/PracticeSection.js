import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Progress from 'react-native-progress';
import { ChevronRight, MoveRight } from 'lucide-react-native';


export default function PracticeSection() {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View className=" bg-white rounded-lg shadow-lg p-4 mt-6">
      {/* Header with Icon and Title */}
      <View className="flex-row items-center mb-4">
        <Image
          source={require('../assets/practice.png')} // Replace with your actual icon path
          className="w-6 h-6 mr-2"
        />
        <Text className="text-lg font-bold">Practice</Text>
      </View>

      {/* Button: 7000+ Problems with Hints & Solutions */}
      <LinearGradient
        colors={['#34d399', '#10b981']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="rounded-full mb-4"
      >
        <TouchableOpacity className="flex-row items-center justify-center py-3 px-4">
          <Text className="text-white font-semibold mr-4">
            7000+ Problems with Hints & Solutions
          </Text>
          <MoveRight className="text-white" />
        </TouchableOpacity>
      </LinearGradient>

      {/* Your Overall Progress Section */}
      <View className="bg-gray-100 p-4 rounded-lg mb-4">
        <Text className="text-gray-700 font-bold mb-2 ">Your Overall Progress</Text>
        <Progress.Bar
          progress={0.05}
          width={screenWidth * 0.6}
          height={25}
          color="#59B792"
          unfilledColor="rgba(255, 255, 255, 0.3)"
          borderWidth={4}
          borderColor="#fff"
          borderRadius={15}
        />
      </View>

      {/* Button: See More Progress Data */}
      <LinearGradient
        colors={['#34d399', '#10b981']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="rounded-full"
      >
        <TouchableOpacity className="flex-row items-center justify-center py-3 px-4">
          <Text className="text-white font-semibold mr-4">See More Progress Data</Text>
          <MoveRight className="text-white" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
