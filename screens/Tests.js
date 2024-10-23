import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

export default function Tests() {
  // Sample data for mock test
  const navigation = useNavigation();
  const mockTests = [
    {
        title: 'AMC 8 - Four Full Length Mock Tests',
        description:
          'The AMC 8 is a 25-question, 40-minute competition for students in grade 8 and below. The material covered on the AMC 8 includes topics from a typical middle school mathematics curriculum. Possible top ...',
        image: require('../assets/image.png'), // Replace with your image path
      },
      {
        title: 'Geometry Level 1 - Practice Tests',
        description:
          'These Geometry tests are designed for students who want to build a solid foundation in basic geometric concepts, including shapes, angles, and properties. The material is suitable for students in grades 7-9...',
        image: require('../assets/image.png'), // Replace with your image path
      },
      {
        title: 'Algebra Basics - Beginner Mock Exams',
        description:
          'Algebra Basics mock exams cover fundamental algebraic concepts such as solving equations, simplifying expressions, and understanding linear functions. Great for students preparing for high school math...',
        image: require('../assets/image.png'), // Replace with your image path
      },
      {
        title: 'Probability & Statistics - Test Series',
        description:
          'The Probability & Statistics test series helps students to understand the basics of probability theory, data analysis, and statistical reasoning. These mock tests include real-life applications...',
        image: require('../assets/image.png'), // Replace with your image path
      },
      {
        title: 'Calculus Prep - Essential Mock Tests',
        description:
          'Calculus Prep mock tests cover important calculus topics including derivatives, integrals, and limits. These tests are ideal for students preparing for advanced placement (AP) math exams...',
        image: require('../assets/image.png'), // Replace with your image path
      },

  ];

  return (
    <View>
        <Header/>
        <ScrollView contentContainerStyle={styles.container} className="mb-20">
            <Text className="text-xl border-dashed border-b-2 font-semibold border-gray-400 pb-2">Mock Tests</Text>
           <View className="p-4 bg-white rounded-lg mt-6">
           <Text style={styles.headerTitle} className="text-lg">Active Mock Tests</Text>
            {mockTests.map((test, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={test.image} style={styles.cardImage} />
            <View style={styles.overlay}>
              <Text style={styles.overlayText}>{test.title}</Text>
            </View>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardDescription}>
              {test.description} <Text style={styles.readMore}>Read More</Text>
            </Text>
            <TouchableOpacity style={styles.viewButton}  onPress={() => navigation.push("Test")}>
              <Text style={styles.viewButtonText}>View Mocks</Text>
            </TouchableOpacity>
          </View>
        </View>
            ))}
           </View>
           <View className="p-4 bg-white rounded-lg mt-6 mb-20">
           <Text style={styles.headerTitle} className="text-lg">Explore Mock Tests</Text>
            {mockTests.map((test, index) => (
                <View key={index} style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image source={test.image} style={styles.cardImage} />
                    <View style={styles.overlay}>
                    <Text style={styles.overlayText}>{test.title}</Text>
                    </View>
                </View>
                <View style={styles.cardContent}>
                    <Text style={styles.cardDescription}>
                    {test.description} <Text style={styles.readMore}>Read More</Text>
                    </Text>
                    <TouchableOpacity style={styles.viewButton}>
                    <Text style={styles.viewButtonText}>View Mocks</Text>
                    </TouchableOpacity>
                </View>
                </View>
            ))}
           </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderStyle: 'dashed',
    paddingBottom: 8,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
  },
  imageContainer: {
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 120,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
  },
  overlayText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardContent: {
    padding: 16,
  },
  cardDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  readMore: {
    color: '#59B792',
    fontWeight: '600',
  },
  viewButton: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#59B792',
    fontWeight: 'bold',
  },
});
