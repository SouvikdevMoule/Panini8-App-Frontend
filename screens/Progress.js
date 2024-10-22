import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from '../components/ProgressBar';
import Header from '../components/Header';

export default function Progress() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.progressTextContainer}>
          <Text style={styles.greetingText}>
            Hi, <Text style={styles.highlightText}>Arjun!</Text> Your Overall Progress for 
            <Text style={styles.highlightText}> Math Olympiad Level 3</Text>
          </Text>
        </View>
        <View style={styles.progressBarContainer}>
          <ProgressBar />
        </View>
        <View style={styles.infoBox}>
          <Text className="text-center text-xl font-semibold border-dashed border-b border-gray-500 pb-4">Curiosity Score</Text>
          <Text className="text-center text-base ">
          (Your curiosity score is measured using machine learning algorithms. More you interact with Panini8 Chatbot, respond to forum problems, the better your score will be. Highest curiosity score is 10) 
          </Text>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Set a light background color
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingHorizontal: 16, // Add padding for better spacing
  },
  progressTextContainer: {
    width: '90%',
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
  },
  greetingText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
  highlightText: {
    color: '#59B792',
    fontWeight: 'bold',
  },
  progressBarContainer: {
    marginTop: 20,
    width: '90%',
  },
  infoBox: {
    backgroundColor: 'white',
    width: '90%',
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

