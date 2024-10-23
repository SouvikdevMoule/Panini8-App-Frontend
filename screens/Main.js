import { View, Animated, Text, ScrollView } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import { LinearGradient } from 'expo-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import { Ionicons } from '@expo/vector-icons'; // For adding icons
import CustomCard from '../components/CustomCard';

export default function Main() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]);

  const text = "Problem Driven Olympiad Preparation, Powered By Cheenta Academy";
  const words = text.split(" ");
  const animatedValues = useRef(words.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    // Function to animate each word sequentially
    const animations = words.map((_, index) =>
      Animated.timing(animatedValues[index], {
        toValue: 1,
        duration: 300, // Duration for each word animation
        delay: index * 300, // Delay between each word's animation
        useNativeDriver: true,
      })
    );

    // Start the animation sequence
    Animated.stagger(300, animations).start();
  }, []);

  return (
    <View className="flex-1 bg-white">
      <Header />
      <LinearGradient
        // Gradient colors: from green-200 to blue-100
        colors={['#bbf7d0', '#dbeafe']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="flex-1"
      >
                  <ScrollView>
        <View className="flex-1 items-center p-6">
          {/* Title and Subtitle */}


          {/* Animated Text */}
          <View className="p-4 bg-white/40 rounded-xl shadow-2xl">
            <View className="flex-row flex-wrap justify-start">
              {words.map((word, index) => (
                <Animated.Text
                  key={index}
                  style={{
                    opacity: animatedValues[index],
                    transform: [
                      {
                        translateY: animatedValues[index].interpolate({
                          inputRange: [0, 1],
                          outputRange: [20, 0], // Animate from 20 pixels down to original position
                        }),
                      },
                    ],
                    marginRight: 8, // Space between words
                    color: word === "Cheenta" || word === "Academy" ? '#22c55e' : '#1f2937', // Green color for "Cheenta Academy", gray for others
                    fontWeight: 'bold',
                    textShadowColor: 'rgba(0, 0, 0, 0.25)', // Text shadow
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 4,
                  }}
                  className="text-2xl"
                >
                  {word}
                </Animated.Text>
              ))}
            </View>
          </View>

          {/* Dropdown Filters */}
          <View className="mt-6 w-[100%]" >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
        {/* First Dropdown */}
        <DropDownPicker
          open={open1}
          value={value}
          items={items}
          setOpen={setOpen1}
          setValue={setValue}
          setItems={setValue}
          placeholder="Contest"
          style={{
            borderWidth: 2,
            borderColor: 'white',
            backgroundColor: '#59B792',
            borderRadius: 10,
            width: "100%"
          }}
          textStyle={{
            color: 'white',
            fontWeight: "500"
          }}
          dropDownContainerStyle={{
            borderWidth: 2,
            borderColor: 'white',
            backgroundColor: '#59B792',
            borderRadius: 10,
          }}
          placeholderStyle={{
            color: 'white',
          }}
          ArrowDownIconComponent={() => <Ionicons name="chevron-down" size={18} color="white" />}
          ArrowUpIconComponent={() => <Ionicons name="chevron-up" size={18} color="white" />}
          containerStyle={{ width: '30%' }}
        />

        {/* Second Dropdown */}
        <DropDownPicker
          open={open2}
          value={value}
          items={items}
          setOpen={setOpen2}
          setValue={setValue}
          setItems={setValue}
          placeholder=" Grade"
          style={{
            borderWidth: 2,
            borderColor: 'white',
            backgroundColor: '#59B792',
            borderRadius: 10,
          }}
          textStyle={{
            color: 'white',
            fontWeight: "500"
          }}
          dropDownContainerStyle={{
            borderWidth: 2,
            borderColor: 'white',
            backgroundColor: '#59B792',
            borderRadius: 10,
          }}
          placeholderStyle={{
            color: 'white',
          }}
          ArrowDownIconComponent={() => <Ionicons name="chevron-down" size={18} color="white" />}
          ArrowUpIconComponent={() => <Ionicons name="chevron-up" size={18} color="white" />}
          containerStyle={{ width: '30%' }}
        />

        {/* Third Dropdown */}
        <DropDownPicker
          open={open3}
          value={value}
          items={items}
          setOpen={setOpen3}
          setValue={setValue}
          setItems={setValue}
          placeholder=" Country"
          style={{
            borderWidth: 2,
            borderColor: 'white',
            backgroundColor: '#59B792',
            borderRadius: 10,
          }}
          textStyle={{
            color: 'white',
            fontWeight: "500"
          }}
          dropDownContainerStyle={{
            borderWidth: 2,
            borderColor: 'white',
            backgroundColor: '#59B792',
            borderRadius: 10,
          }}
          placeholderStyle={{
            color: 'white',
          }}
          ArrowDownIconComponent={() => <Ionicons name="chevron-down" size={18} color="white" />}
          ArrowUpIconComponent={() => <Ionicons name="chevron-up" size={18} color="white" />}
          containerStyle={{ width: '30%' }}
        />
      </View>
    </View>

          <View>
          <CustomCard/>
          </View>



        </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
