import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For adding icons
import Header from '../components/Header';
const mockTests = [
    { title: 'AMC 8 Mock Test 1', duration: '0 Minutes', icon: require('../assets/pic.png') },
    { title: 'AMC 8 Mock Test 2', duration: '0 Minutes', icon: require('../assets/pic.png') },
    { title: 'AMC 8 Mock Test 3', duration: '0 Minutes', icon: require('../assets/pic.png') },
  ];

export default function Item() {
  return (
    <View style={styles.screenContainer}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.cardContainer}>
          {/* Header Image */}
          <View style={styles.headerImageContainer}>
            <Image
              source={require('../assets/image.png')} // Replace with your actual image path
              style={styles.headerImage}
              resizeMode="cover"
            />
            <View style={styles.overlayText}>
              <Text style={styles.overlayTextStyle}>AMC 8</Text>
            </View>
          </View>

          {/* Tags */}
          <View style={styles.tagsContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Grade 8</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Worldwide</Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.tryButton}>
              <Ionicons name="play-circle" size={16} color="white" />
              <Text style={styles.buttonText}>TRY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.testimonialButton}>
              <Text style={styles.testimonialText}>Read Testimonial</Text>
            </TouchableOpacity>
          </View>

          {/* Options Grid */}
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionText}>Practice</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionText}>Study Material</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionText}>Mock Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionText}>Ask Doubts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionText}>Track Progress</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionText}>Live Classes</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Information Cards */}
        <View style={styles.card}>
          <Text style={styles.title}>What is AMC8?</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum possimus 
            repudiandae, asperiores autem, reprehenderit perferendis, ut quasi et corrupti 
            tenetur at dignissimos impedit eligendi nam culpa. Autem, illum saepe?
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>About Cheenta-Panini8 Program</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum possimus 
            repudiandae, asperiores autem, reprehenderit perferendis, ut quasi et corrupti 
            tenetur at dignissimos impedit eligendi nam culpa. Autem, illum saepe?
          </Text>
        </View>
        <View style={styles.cardContainer}>
      {/* Header with Icon and Title */}
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/pic.png')} // Replace with your actual icon path
          style={styles.icon}
        />
        <Text style={styles.title}>Live Classes</Text>
      </View>

      {/* Description */}
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, suscipit
        eius libero facilis velit omnis tempore nesciunt quae, excepturi porro
        beatae provident hic consequatur ullam, officiis nam? Dolores, quaerat asperiores.
      </Text>

      {/* Action Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.tryNowButton}>
          <Text style={styles.tryNowText}>TRY NOW</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.testimonialsButton}>
          <Text style={styles.testimonialsText}>Read Testimonials</Text>
        </TouchableOpacity>
      </View>
        </View>

        <View >
      <ScrollView className="bg-white p-4 rounded-lg"
                  style={{
             
                    shadowColor: '#000',
                    shadowOffset: { width: 2, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    elevation: 8, // For Android
                  }}
      >
        {/* Header */}
        <View style={styles.headerContainer}>
          <Image source={require('../assets/pic.png')} style={styles.headerIcon} />
          <Text style={styles.headerTitle}>Mock Test</Text>
        </View>

        {/* Mock Test Cards */}
        {mockTests.map((test, index) => (
          <View key={index} style={styles.testCard}>
            <View style={styles.testInfo}>
              <Image source={test.icon} style={styles.testIcon} />
              <Text style={styles.testTitle}>{test.title}</Text>
            </View>
            <View className="flex-col gap-2 items-center">
            <View style={styles.testDurationContainer}>
              <Ionicons name="time-outline" size={16} color="#4CAF50" />
              <Text style={styles.testDuration}>{test.duration}</Text>
            </View>
            <TouchableOpacity className="p-3 bg-green-600 rounded-full">
              <Text style={styles.tryNowText}>Try Now</Text>
            </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    
  },
  scrollContentContainer: {
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',

  },
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  headerImageContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 12,
  },
  headerImage: {
    width: '100%',
    height: 150,
  },
  overlayText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 4,
    borderRadius: 5,
  },
  overlayTextStyle: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  tag: {
    backgroundColor: '#59B792',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  tagText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 12,
  },
  tryButton: {
    backgroundColor: '#3b82f6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 6,
  },
  testimonialButton: {
    backgroundColor: '#f0ad4e',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  testimonialText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 12,
  },
  optionButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  optionText: {
    color: '#333',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: '100%',
    alignSelf: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tryNowButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginRight: 8,
  },
  tryNowText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  testimonialsButton: {
    backgroundColor: '#f0ad4e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  testimonialsText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  scrollContent: {
    padding: 16,
    alignItems: 'center',
    backgroundColor:"white",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  testCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 10,
    marginBottom: 16,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  testInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  testIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  testTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  testDurationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  testDuration: {
    fontSize: 14,
    color: 'black',
    
    marginLeft: 5,
  },
  tryNowButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  tryNowText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
