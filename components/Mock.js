import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const mockTests = [
  {
    id: 1,
    icon: require('../assets/practice.png'), // Replace with your actual icon path
    title: 'ISI BStat - BMath Entrance - Three Full Length Objective Tests',
    description:
      "The BStat and BMath Entrance of ISI Entrance is ‘different’ from IIT JEE or other engineering entrances. It tests creativity and ingenuity of the problem solver that requires more than mechanical application of formulae. Many of these problems are inspired from erstwhile Soviet Union math contests and other math olympiads. The entrance has two sections: Objective section containing 30 problems to be solved in 120 minutes. Subjective section containing 10 problems to be solved in 120 minutes",
    duration: '0 Minutes',
  },
  {
    id: 2,
    icon: require('../assets/practice.png'), // Replace with your actual icon path
    title: 'ISI BStat - BMath Entrance - Three Full Length Subjective Tests',
    description:
      "The BStat and BMath Entrance of ISI Entrance is ‘different’ from IIT JEE or other engineering entrances. It tests creativity and ingenuity of the problem solver that requires more than mechanical application of formulae. Many of these problems are inspired from erstwhile Soviet Union math contests and other math olympiads. The entrance has two sections: Objective section containing 30 problems to be solved in 120 minutes. Subjective section containing 10 problems to be solved in 120 minutes",
    duration: '0 Minutes',
  },
  {
    id: 3,
    icon: require('../assets/practice.png'), // Replace with your actual icon path
    title: 'NMTC Primary Stage I - Three Full Length Mock Test',
    description:
      "The National Mathematics Talent Contest or NMTC is a national-level mathematics contest conducted by the Association of Mathematics Teachers of India (AMTI). It is strongest in Tamil Nadu, which is the operating base of the AMTI. The AMTI is a pioneer organisation in promoting, and conducting, Maths Talent Tests in India. In the National level test, 66,066 students, from 332 institutions spread all over India, participated at the screening level.",
    duration: '0 Minutes',
  },
];

export default function Mock() {
  return (
    <ScrollView className="flex-1 my-4 p-4 bg-white">
      <View className="mb-6 ">
        <View className="flex-row items-center mb-4 ">
          <Image
            source={require('../assets/practice.png')} // Replace with your actual icon path
            className="w-6 h-6 mr-2"
          />
          <Text className="text-lg font-bold">Mock Test</Text>
        </View>
      </View>
      {mockTests.map((test) => (
        <View key={test.id} className="w-full bg-gray-100 rounded-lg shadow-lg p-4 mb-6"
        style={{
            shadowColor: '#000',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5, // For Android
          }}
        >
          <View className="flex-row items-center mb-4">
            <Image source={test.icon} className="w-10 h-10 mr-4" />
            <View className="flex-1">
              <Text className="text-base font-bold">{test.title}</Text>
              <Text className="text-sm text-gray-500">{test.duration}</Text>
            </View>
          </View>
          <Text className="text-sm text-gray-700 mb-4">{test.description}</Text>
          <View className="flex-row justify-end">
            <TouchableOpacity className="bg-green-500 py-2 px-4 rounded-full">
              <Text className="text-white font-semibold">Try Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
