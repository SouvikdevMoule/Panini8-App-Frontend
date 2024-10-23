import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import * as Progress from "react-native-progress";
import RadioButton from "../components/RadioButton"; // Custom RadioButton component
import PlaySlider from "../components/PlaySlider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuthStore from "../store/useAuthStore";

const screenWidth = Dimensions.get("window").width;

const cards = [
  {
    id: 1,
    question: "What is the sum of 130 + 125 + 191?",
    options: [
      { label: "446", value: 446 },
      { label: "448", value: 448 },
      { label: "456", value: 456 },
    ],
    correctValue: 446,
    hint: "Try adding the numbers step by step.",
  },
  {
    id: 2,
    question: "What is 12 * 12?",
    options: [
      { label: "144", value: 144 },
      { label: "148", value: 148 },
      { label: "150", value: 150 },
    ],
    correctValue: 144,
    hint: "Multiply 12 by 12.",
  },
];

export default function Play() {
  const [showQuestionCard, setShowQuestionCard] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const { userData } = useAuthStore((state) => state);

  const handleResumeClick = () => {
    setShowQuestionCard(true);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setSelectedValue(null);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
    setSelectedValue(null);
  };

  const handleHintClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View className="flex-1 bg-gray-200">
      <Header />

      <View className="flex gap-6 items-center p-4">
        {/* Progress Bar */}
        <Progress.Bar
          progress={0.05}
          width={screenWidth * 0.9}
          height={25}
          color="#59B792"
          unfilledColor="rgba(255, 255, 255, 0.3)"
          borderWidth={4}
          borderColor="#fff"
          borderRadius={15}
        />

        {/* Conditionally Render Module or Question Card */}
        {showQuestionCard ? (
          // Question Card
          <View className="w-[80%] bg-white shadow-lg rounded-lg p-4 items-center">
            <Text className="font-bold text-lg mb-2">
              {cards[currentIndex].question}
            </Text>
            <Text className="font-semibold text-sm mb-4">
              Select any option
            </Text>
            <View className="w-full mb-4">
              {cards[currentIndex].options.map((option) => (
                <RadioButton
                  key={option.value}
                  label={option.label}
                  selected={selectedValue === option.value}
                  onPress={() => setSelectedValue(option.value)}
                />
              ))}
            </View>

            {/* Skip and Hint Buttons */}

            {/* Navigation Buttons */}
            <View className="flex flex-row justify-between w-full">
              <TouchableOpacity
                className="bg-yellow-400 items-center h-10 px-4 rounded-full flex-row justify-center"
                onPress={handleHintClick}
              >
                <Text className="text-black font-semibold">Hint</Text>
              </TouchableOpacity>
              <View className="flex flex-row gap-3">
                <TouchableOpacity
                  className="bg-blue-500 items-center h-10 px-4 rounded-full flex-row justify-center"
                  onPress={handleNext}
                >
                  <Text className="text-white font-semibold">Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="bg-[#59B792] items-center h-10 px-4 rounded-full flex-row justify-center"
                  onPress={handleNext}
                >
                  <Text className="mr-2 text-white">Next</Text>
                  <Ionicons name="arrow-forward" size={18} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          // Module Card
          <View className="w-[80%] bg-white shadow-lg rounded-lg p-4 items-center">
            <Image
              source={require("../assets/question.png")}
              className="w-24 h-24 mb-3"
            />
            <TouchableOpacity
              className="bg-[#59B792] flex-row items-center justify-center py-2 px-4 rounded-full mb-3 shadow-lg"
              onPress={handleResumeClick}
            >
              <Text className="text-white font-bold mr-2">Resume</Text>
              <Ionicons name="play-circle" size={18} color="white" />
            </TouchableOpacity>
            <View className="items-center">
              <Text className="text-gray-800 font-medium">
                Module: Algebra II
              </Text>
              <Text className="text-gray-800 font-medium">
                Difficulty: {userData?.firstname}
              </Text>
              <Text className="text-green-600 font-medium mt-2">
                Points: 0.00
              </Text>
            </View>
          </View>
        )}
      </View>

      {/* Hint Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="w-[80%] bg-white rounded-lg p-6 shadow-lg">
            <Text className="font-bold text-lg mb-2">Hint</Text>
            <Text className="text-gray-800 mb-4">
              {cards[currentIndex].hint}
            </Text>
            <TouchableOpacity
              className="bg-red-500 items-center h-10 px-4 rounded-full flex-row justify-center"
              onPress={handleCloseModal}
            >
              <Text className="text-white font-semibold">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
