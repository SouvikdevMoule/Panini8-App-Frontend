import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Mock() {
  const route = useRoute();
  const { contestName } = route.params || {};
  const [mock, setMock] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (contestName) {
      const getContestApi = `https://server.panini8.com/api/v1/article/mocks/related/${contestName}`;

      fetch(getContestApi)
        .then((response) => response.json())
        .then((json) => {
          console.log("Fetched Mock Tests Data:", json);
          setMock(json);
        })
        .catch((error) => console.error("Error fetching mock tests data:", error))
        .finally(() => setLoading(false));
    }
  }, [contestName]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
   <View className="flex items-center h-full"
>
     <ScrollView
      style={{
        flex: 1,
        padding: 16,
        width: "100%",
        backgroundColor: 'white',
        borderRadius: 8,
        margin: 16,
        
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // For Android
      }}
    >
      <View style={{ marginBottom: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
          <Image
            source={require('../assets/practice.png')} // Replace with your actual icon path
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Mock Test</Text>
        </View>
      </View>
      {mock.length > 0 ? (
        mock.map((test) => (
          <View
            key={test.id}
            style={{
              backgroundColor: '#f0f0f0',
              borderRadius: 8,
              padding: 16,
              marginBottom: 16,
              shadowColor: '#000',
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 5, // For Android
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
              <Image source={test.icon || require('../assets/practice.png')} style={{ width: 40, height: 40, marginRight: 16 }} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{test.name}</Text>
                <Text style={{ fontSize: 14, color: '#888' }}>{test.duration || '0 Minutes'}</Text>
              </View>
            </View>
            <Text style={{ fontSize: 14, color: '#555', marginBottom: 16 }}>{test.description}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#22c55e',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Try Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <Text style={{ fontSize: 16, textAlign: 'center', color: '#888' }}>No mock tests available.</Text>
      )}
    </ScrollView>
   </View>
  );
}
