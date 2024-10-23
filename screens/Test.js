
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Header from '../components/Header';

export default function Test() {
  // Sample data for tests (could be replaced with fetched data)
  const unattemptedTests = [
    {
      title: 'AMC 8 Mock Test - Full Length 4',
      duration: '40 Minutes',
      icon: require('../assets/pic.png'), // Replace with your icon path
    },
  ];

  const completedTests = [
    {
      title: 'AMC 8 Mock Test - Full length 1',
      duration: '40 Minutes',
      score: '10/250',
      percentage: '4.00%',
      icon: require('../assets/pic.png'), // Replace with your icon path
    },
    {
      title: 'AMC 8 Mock Test - Full length 2',
      duration: '40 Minutes',
      score: '10/250',
      percentage: '4.00%',
      icon: require('../assets/pic.png'), // Replace with your icon path
    },
    {
      title: 'AMC 8 Mock Test - Full Length 3',
      duration: '40 Minutes',
      score: '0/250',
      percentage: '0.00%',
      icon: require('../assets/pic.png'), // Replace with your icon path
    },
  ];

  // Loading state to simulate data fetching
  const [loading, setLoading] = React.useState(false);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#59B792" />
        <Text style={styles.loadingText}>Loading Tests...</Text>
      </View>
    );
  }

  return (
    <View style={styles.screenContainer}>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Unattempted Tests Section */}
        <Text style={styles.sectionTitle}>Unattempted Tests</Text>
        {unattemptedTests.length === 0 ? (
          <Text style={styles.noTestsText}>No unattempted tests available.</Text>
        ) : (
          <View style={styles.testCard}>
            {unattemptedTests.map((test, index) => (
              <View key={index} style={styles.testRow}>
                <View style={styles.testInfo}>
                  <Image source={test.icon} style={styles.testIcon} />
                  <Text style={styles.testTitle}>{test.title}</Text>
                </View>
                <View className="flex-row items-center gap-2">
                <Text style={styles.testDuration}>{test.duration}</Text>
                <View style={styles.actionButtons} >
                  <TouchableOpacity >
                    <Text className="px-6 py-2 bg-[#59B792] rounded-full text-white font-semibold">Try</Text>
                  </TouchableOpacity>
                  <TouchableOpacity >
                    <Text className="px-6 py-2 bg-[#59B792] rounded-full text-white font-semibold">Stat</Text>
                  </TouchableOpacity>
                </View>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Completed Tests Section */}
        <Text style={styles.sectionTitle}>Completed Tests</Text>
        {completedTests.length === 0 ? (
          <Text style={styles.noTestsText}>No completed tests available.</Text>
        ) : (
          <View style={styles.testCard}>
            {completedTests.map((test, index) => (
              <View key={index} style={styles.testRow}>
               <View style={styles.testInfo}>
                  <Image source={test.icon} style={styles.testIcon} />
                  <Text style={styles.testTitle}>{test.title}</Text>
                </View>
                <Text style={styles.testDuration}>{test.duration}</Text>
                <View style={styles.scoreContainer}>
                  <Text style={styles.scoreText}>{test.score}</Text>
                  <Text style={styles.percentageText}>{test.percentage}</Text>
                </View>
                <View style={styles.actionButtons}>
                  <TouchableOpacity style={styles.reviewButton}>
                    <Text style={styles.buttonText}>Review</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.analysisButton}>
                    <Text style={styles.buttonText}>Analysis</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.statButton}>
                    <Text style={styles.buttonText}>Stat</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  container: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 8,
  },
  noTestsText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginVertical: 20,
  },
  testCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 3,
  },
  testRow: {
    margin: 2,
    padding: 10,
    backgroundColor: "#f0f0f0",
    flexDirection: 'column',
    gap: 10,
    alignItems: 'start',
    justifyContent: 'space-between',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
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
  testDuration: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
  },
  scoreContainer: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
  scoreText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#f0ad4e',
  },
  percentageText: {
    fontSize: 12,
    color: '#666',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  tryButton: {
    backgroundColor: '#59B792',
    padding: 10,
    borderRadius: 25,
    marginRight: 8,
  },
  reviewButton: {
    backgroundColor: '#f0ad4e',
    padding: 10,
    borderRadius: 25,
    marginRight: 8,
  },
  analysisButton: {
    backgroundColor: '#59B792',
    padding: 10,
    borderRadius: 25,
    marginRight: 8,
  },
  statButton: {
    backgroundColor: '#59B792',
    padding: 10,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
});
