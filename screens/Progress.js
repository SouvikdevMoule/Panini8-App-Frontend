import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Progres from 'react-native-progress'; // Make sure you have this package installed
import ProgressBar from '../components/ProgressBar';
import Header from '../components/Header';
import Animated, { FadeIn, FadeInDown, BounceIn } from 'react-native-reanimated'; // Import animation effects

const screenWidth = Dimensions.get('window').width;

const modules = [
    { title: 'Arithmetic II', progress: 0.4, icon: require('../assets/pic.png') },
    { title: 'Figures and Pre-Geometry II', progress: 0.4, icon: require('../assets/pic.png') },
    { title: 'Properties of Numbers II', progress: 0.2, icon: require('../assets/pic.png') },
    { title: 'Pre Algebra II', progress: 0.1, icon: require('../assets/pic.png') },
    { title: 'Counting principles II', progress: 0.3, icon: require('../assets/pic.png') },
    { title: 'Testing course', progress: 0.1, icon: require('../assets/pic.png') },
  ];

export default function Progress() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Animated.View entering={FadeIn.delay(200).duration(500)} style={styles.progressTextContainer}>
          <Text style={styles.greetingText}>
            Hi, <Text style={styles.highlightText}>Arjun!</Text> Your Overall Progress for 
            <Text style={styles.highlightText}> Math Olympiad Level 3</Text>
          </Text>
        </Animated.View>
        <Animated.View entering={FadeIn.delay(400).duration(500)} style={styles.progressBarContainer}>
          <ProgressBar />
        </Animated.View>

        <Animated.View style={styles.infoBox1} entering={FadeIn.delay(400).duration(500)}>
          <Text style={styles.infoTitle} className="border-dashed border-b border-gray-500 w-full pb-3">Strength</Text>
          <View style={styles.strengthContainer} >

              <TouchableOpacity  style={styles.strengthButton}>
                <Text style={styles.strengthButtonText}>Basic Counting</Text>
              </TouchableOpacity>
               <TouchableOpacity  style={styles.strengthButton}>
               <Text style={styles.strengthButtonText}>Advanced Algebra</Text>
             </TouchableOpacity>
              <TouchableOpacity  style={styles.strengthButton}>
              <Text style={styles.strengthButtonText}>Geometry</Text>
            </TouchableOpacity>
             <TouchableOpacity  style={styles.strengthButton}>
             <Text style={styles.strengthButtonText}>Probability</Text>
           </TouchableOpacity>

          </View>
        </Animated.View>
        <Animated.View style={styles.infoBox1} entering={FadeIn.delay(400).duration(500)}>
          <Text style={styles.infoTitle} className="border-dashed border-b border-gray-500 w-full pb-3">Weakness</Text>
          <View style={styles.strengthContainer} >

              <TouchableOpacity  style={styles.strengthButton}>
                <Text style={styles.strengthButtonText}>Basic Counting</Text>
              </TouchableOpacity>
               <TouchableOpacity  style={styles.strengthButton}>
               <Text style={styles.strengthButtonText}>Advanced Algebra</Text>
             </TouchableOpacity>
              <TouchableOpacity  style={styles.strengthButton}>
              <Text style={styles.strengthButtonText}>Geometry</Text>
            </TouchableOpacity>
             <TouchableOpacity  style={styles.strengthButton}>
             <Text style={styles.strengthButtonText}>Probability</Text>
           </TouchableOpacity>

          </View>
        </Animated.View>
        <Animated.View style={styles.moduleBox} entering={FadeIn.delay(400).duration(500)}>
          <Text style={styles.infoTitle} className="border-dashed border-b border-gray-500 w-full pb-3">Module Progress</Text>
                {modules.map((module, index) => (
                <View key={index} style={styles.moduleItem}>
                <View style={styles.moduleInfo}>
                    <Image source={module.icon} style={styles.moduleIcon} />
                    <Text style={styles.moduleTitle}>{module.title}</Text>
                </View>
                {/* <Text style={styles.progressText}>{`${(module.progress * 100).toFixed(2)}%`}</Text> */}
                <Progres.Bar
                    progress={module.progress}
                    width={screenWidth * 0.7}
                    color="#59B792"
                    unfilledColor="#e0e0e0"
                    borderWidth={3}
                    height={20}
                    borderColor="#fff"
                    borderRadius={15}
                    style={{    shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.1,
                      shadowRadius: 4,
                      elevation: 2,
                    }}
                />
                </View>
            ))}
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(600).duration(500)} style={styles.infoBox}>
          <Text style={styles.infoTitle}>Curiosity Score</Text>
          <Text style={styles.infoDescription}>
            Your curiosity score is measured using machine learning algorithms. The more you interact with the Panini8 Chatbot and respond to forum problems, the better your score will be. The highest curiosity score is 10.
          </Text>
          <Animated.View entering={BounceIn.delay(800).duration(800)} style={styles.progressCircle}>
            <Progres.Circle
              size={200}
              progress={0.05}
              color="#59B792"
              unfilledColor="rgba(0, 0, 0, 0.1)"
              borderWidth={4}
              thickness={12}
              showsText={true}
              formatText={() => `0.5/10`}
              textStyle={ { fontSize: 30, fontWeight: "bold", } }
            />
          </Animated.View>
        </Animated.View>
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
    padding: 15,
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
    padding: 20,
    marginTop: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow
    alignItems: 'center',
  },
  infoBox1: {
    backgroundColor: 'white',
    width: '90%',
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow
    alignItems: 'center',
  },
  moduleBox: {
    backgroundColor: 'white',
    width: '90%',
    padding: 16,
    marginTop: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  infoDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  progressText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#59B792',
  },
  progressCircle: {
    marginTop: 20,
  },
  strengthContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 2,
    padding: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // 
 
  },
  strengthButton: {
    backgroundColor: '#59B792',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, //
  },
  strengthButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  moduleItem: {
    marginBottom: 20,
  },
  moduleInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  moduleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  progressText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  progressBar: {
    borderRadius: 4,
  },
});

