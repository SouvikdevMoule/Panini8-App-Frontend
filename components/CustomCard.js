import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For adding icons
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function CustomCard() {
  const navigation = useNavigation();

  const [contests, setContest] = useState([]);
  const [loading, setLoading] = useState(true);

  const getContestApi = "https://server.panini8.com/api/v1/contest/article";

  useEffect(() => {
    fetch(getContestApi)
      .then((response) => response.json())
      .then((json) => {
        console.log("API Data:", json); // Log the API data
        if (Array.isArray(json.contests)) {
          setContest(json.contests);
        } else {
          setContest([]); // Set to an empty array if the data is not in the expected format
        }
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      {loading ? (
        <Text>Loading........</Text>
      ) : (
        contests.length > 0 ? (
          contests.map((contest) => (
            <View key={contest._id} className="bg-white rounded-lg overflow-hidden m-4 shadow-md">
              {/* Header Image */}
              <View className="relative h-36">
                <Image
                  source={require('../assets/img.jpg')} // Replace with your image URL
                  className="w-full h-full"
                  resizeMode="cover"
                />
                <View className="absolute bottom-8 left-2 bg-black/60 p-2 rounded-md">
                  <Text className="text-white font-bold">{contest.alias || contest.name}</Text>
                </View>
              </View>

              {/* Try Button */}
              <LinearGradient
                colors={['#3b82f6', '#60a5fa', '#3b82f6']} // Gradient colors
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                className="rounded-md mx-4 -mt-5 shadow-lg"
                style={{
                  borderRadius: 10, // Make sure the gradient has rounded corners
                  marginHorizontal: 16,
                  marginTop: -20,
                  elevation: 5, // Add shadow for Android
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.7}
                  className="flex-row items-center justify-center py-2"
                  onPress={() => navigation.push("Dash", { contestName: contest.name })}
                >
                  <Ionicons name="play-circle" size={18} color="white" />
                  <Text className="text-white ml-2 font-bold">TRY</Text>
                </TouchableOpacity>
              </LinearGradient>

              {/* Grade and Location Tags */}
              <View className="flex-row justify-center mt-2">
                <View className="bg-[#59B792] rounded-lg py-1 px-4 mx-1">
                  <Text className="text-white font-bold">Grade 8</Text>
                </View>
                <View className="bg-[#59B792] rounded-lg py-1 px-4 mx-1">
                  <Text className="text-white font-bold">Worldwide</Text>
                </View>
              </View>

              {/* Options Grid */}
              <View className="flex-row flex-wrap justify-around p-4">
                <TouchableOpacity className="bg-gray-100 rounded-lg py-2 px-3 my-1 flex-row items-center w-[45%]" onPress={() => navigation.push("Play")}>
                  <Ionicons name="school" size={16} color="#22c55e" />
                  <Text className="ml-2 font-bold text-gray-800">Practice</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-gray-100 rounded-lg py-2 px-3 my-1 flex-row items-center w-[45%]" onPress={() => navigation.push("Dash")}>
                  <Ionicons name="school" size={16} color="#22c55e" />
                  <Text className="ml-2 font-bold text-gray-800">Study Material</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-gray-100 rounded-lg py-2 px-3 my-1 flex-row items-center w-[45%]" onPress={() => navigation.push("Dash")}>
                  <Ionicons name="school" size={16} color="#22c55e" />
                  <Text className="ml-2 font-bold text-gray-800">Mock Test</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-gray-100 rounded-lg py-2 px-3 my-1 flex-row items-center w-[45%]" onPress={() => navigation.push("Dash")}>
                  <Ionicons name="school" size={16} color="#22c55e" />
                  <Text className="ml-2 font-bold text-gray-800">Ask Doubts</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-gray-100 rounded-lg py-2 px-3 my-1 flex-row items-center w-[45%]" onPress={() => navigation.push("Progress")}>
                  <Ionicons name="school" size={16} color="#22c55e" />
                  <Text className="ml-2 font-bold text-gray-800">Track Progress</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-gray-100 rounded-lg py-2 px-3 my-1 flex-row items-center w-[45%]" onPress={() => navigation.push("Dash")}>
                  <Ionicons name="school" size={16} color="#22c55e" />
                  <Text className="ml-2 font-bold text-gray-800">Live Classes</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text>No contests available</Text>
        )
      )}
    </View>
  );
}
