import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import Header from '../components/Header';
import PracticeSection from '../components/PracticeSection';
import Mock from '../components/Mock';
import { useRoute } from '@react-navigation/native';
import Lesson from '../components/Lesson';

export default function Dash() {
  const route = useRoute();
  const { contestName } = route.params || {};
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (contestName) {
      const getContestApi = `https://server.panini8.com/api/v1/article/contest/lessons?contest=${contestName}`;

      fetch(getContestApi)
        .then((response) => response.json())
        .then((json) => {
          console.log("Fetched Lessons Data:", json);
          setLessons(json);
        })
        .catch((error) => console.error("Error fetching lessons data:", error))
        .finally(() => setLoading(false));
    }
  }, [contestName]);

  return (
    <View style={styles.flexContainer}>
      <Header />
      <ScrollView>
        <LinearGradient
          colors={['#bbf7d0', '#dbeafe']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={styles.welcomeText}>
            Arjun, <Text style={styles.welcomeTextBlack}>Welcome to {contestName} Dashboard</Text>
          </Text>

          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/img.jpg")}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.overlay}>
            {/* <Image
              source={{ uri: lessons.contest.icon }}
              className="h-10 w-10"
              
            /> */}
              <Text style={styles.overlayText}>{contestName}</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            {/* Practice Button */}
            <TouchableOpacity style={styles.actionButton}>
              <Image
                source={require("../assets/practice.png")}
                style={styles.actionIcon}
                resizeMode="cover"
              />
              <Text style={styles.actionText}>Practice</Text>
            </TouchableOpacity>

            {/* Mock Test Button */}
            <TouchableOpacity style={styles.actionButton}>
              <Image
                source={require("../assets/practice.png")}
                style={styles.actionIcon}
                resizeMode="cover"
              />
              <Text style={styles.actionText}>Mock Test</Text>
            </TouchableOpacity>

            {/* Ask Doubts Button */}
            <TouchableOpacity style={styles.actionButton}>
              <Image
                source={require("../assets/practice.png")}
                style={styles.actionIcon}
                resizeMode="cover"
              />
              <Text style={styles.actionText}>Ask Doubts</Text>
            </TouchableOpacity>

            {/* Track Progress Button */}
            <TouchableOpacity style={styles.actionButton}>
              <Image
                source={require("../assets/practice.png")}
                style={styles.actionIcon}
                resizeMode="cover"
              />
              <Text style={styles.actionText}>Track Progress</Text>
            </TouchableOpacity>

            {/* Study Material Button */}
            <TouchableOpacity style={styles.actionButton}>
              <Image
                source={require("../assets/practice.png")}
                style={styles.actionIcon}
                resizeMode="cover"
              />
              <Text style={styles.actionText}>Study Material</Text>
            </TouchableOpacity>

            {/* Live Classes Button */}
            <TouchableOpacity style={styles.actionButton}>
              <Image
                source={require("../assets/practice.png")}
                style={styles.actionIcon}
                resizeMode="cover"
              />
              <Text style={styles.actionText}>Live Classes</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.liveClassSection}>
            <View style={styles.liveClassHeader}>
              <Image
                source={require("../assets/icon.png")}
                style={styles.icon}
              />
              <Text style={styles.liveClassTitle}>Live Class & Growth Path</Text>
            </View>

            <View style={styles.liveClassContent}>
              <Text style={styles.liveClassText}>
                Join our live classes and get personalized growth paths to enhance your learning experience.
              </Text>

              {/* TRY Button */}
              <TouchableOpacity style={[styles.actionButton, styles.tryButton]}>
                <Text style={[styles.actionText, { color: '#fff' }]}>TRY</Text>
              </TouchableOpacity>

              {/* Read Testimonial Button */}
              <TouchableOpacity style={[styles.actionButton, styles.testimonialButton]}>
                <Text style={[styles.actionText, { color: '#fff' }]}>Read Testimonial</Text>
              </TouchableOpacity>

              {/* Upcoming Tasks Button */}
              <TouchableOpacity style={[styles.actionButton, styles.tryButton]}>
                <Text style={[styles.actionText, { color: '#fff' }]}>Upcoming Tasks</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
          <PracticeSection />
          </View>
        <View>
        <Lesson/>
        </View>
          <View className="h-full">
          <Mock />
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#166534',
    marginBottom: 16,
  },
  welcomeTextBlack: {
    color: '#000',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#fff',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  overlayText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  actionButton: {
    width: '48%',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 24,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  actionIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  actionText: {
    fontWeight: 'bold',
  },
  liveClassSection: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  liveClassHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  liveClassTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  liveClassContent: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  liveClassText: {
    color: '#333',
    marginBottom: 16,
  },
  tryButton: {
    backgroundColor: '#2563eb',
    marginBottom: 8,
  },
  testimonialButton: {
    backgroundColor: '#f59e0b',
    marginBottom: 8,
  },
  lessonItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
});
