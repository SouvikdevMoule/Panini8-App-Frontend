import React, { useMemo, useRef, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View, Modal, ScrollView, Dimensions } from "react-native";
import RadioButton from '../components/RadioButton';
import { FlatList } from 'react-native';
import { ChevronRight, ChevronLeft, X } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
    const data = [
        { id: '1', title: 'College Level', image: require('../assets/pic.png'), color: '#ff6347', details: 'Details about College Level', description: 'dwdwdwdw wdw dw d wd w d wd wd wd wd wd w wd wd wd wdwd wd w w dw dw dw dw dw dw dw d wdw d w dw d d wd wd wd w dwd wdw dw dw' },
        { id: '2', title: 'High School Level', image: require('../assets/pic1.png'), color: '#4682b4', details: 'Details about High School Level', description: 'dwdwdwdw wdw dw d wd w d wd wd wd wd wd w wd wd wd wdwd wd w w dw dw dw dw dw dw dw d wdw d w dw d d wd wd wd w dwd wdw dw dw' },
        { id: '3', title: 'Middle School Level', image: require('../assets/pic2.png'), color: '#32cd32', details: 'Details about Middle School Level', description: 'dwdwdwdw wdw dw d wd w d wd wd wd wd wd w wd wd wd wdwd wd w w dw dw dw dw dw dw dw d wdw d w dw d d wd wd wd w dwd wdw dw dw' },
      ];
  

    const body = [
        {id: '1', title: 'Practise problems from Olympiads adaptively 📚', description:'Sharpen your skills for Math with Panini8! Offering a challenge thats just right. Get the most out of your study time by focusing on areas that need improvement and mastering Olympiad-style questions.', image: require('../assets/play.png'), color: '#FFE483'},
        {id: '2', title: 'Try With Hints! 💡', description:'Dont let a tough problem slow you down. This "try with hints" feature provides gentle nudges in the right direction, helping you solve problems independently.', image: require('../assets/play.png'), color: '#CDDE7C'},
        {id: '3', title: 'Ask doubts in the forum💭', description:'Our vibrant forum is here to help. Get clear explanations and insightful answers from a community of learners and experts.  Feel free to ask anything, big or small. The more you participate, the deeper your understanding becomes.', image: require('../assets/play2.png'), color: '#B780FD'},
        {id: '4', title: 'Start with a problem and then go to a concept✏', description:'Dont just memorize, understand! This approach flips the script on traditional learning. Instead of starting with abstract concepts, youll begin with real-world problems.', image: require('../assets/play3.png'), color: '#8BA2FE'},
    ]
const cards = [
    {
        id: 1,
        question: 'What is the sum of 130+125+191?',
        options: [
            { label: '446', value: 446 },
            { label: '448', value: 448 },
            { label: '456', value: 456 },
        ],
        correctValue: 446,
        hint: "Try adding the numbers step by step.",
    },
    {
        id: 2,
        question: 'What is 12 * 12?',
        options: [
            { label: '144', value: 144 },
            { label: '148', value: 148 },
            { label: '150', value: 150 },
        ],
        correctValue: 144,
        hint: "Multiply 12 by 12.",
    },
    // Add more card objects here...
];

const feedback = [
    {
      id: '1',
      image: require('../assets/img.png'),
      stars: require('../assets/stars.png'),
      text: "I will let my mum know about this, she could really make use of software! Very easy to use. Since I invested in software I made over 100,000 dollars profits. I just can't get enough of software. I want to get a T-Shirt with software on it so I can show it off to everyone.",
      name: "Souvik Moule",
      grade: "Grade 1",
    },
    {
        id: '2',
        image: require('../assets/img1.png'),
        stars: require('../assets/stars.png'),
        text: "I will let my mum know about this, she could really make use of software! Very easy to use. Since I invested in software I made over 100,000 dollars profits. I just can't get enough of software. I want to get a T-Shirt with software on it so I can show it off to everyone.",
        name: "Arjun Sen",
        grade: "Grade 2",
      },
      {
        id: '3',
        image: require('../assets/img2.png'),
        stars: require('../assets/stars.png'),
        text: "I will let my mum know about this, she could really make use of software! Very easy to use. Since I invested in software I made over 100,000 dollars profits. I just can't get enough of software. I want to get a T-Shirt with software on it so I can show it off to everyone.",
        name: "Ayush Bharghav",
        grade: "Grade 3",
      },
    // Add more items as needed
  ];




const Home = () => {
    const [selectedValue, setSelectedValue] = useState(null); // Updated to allow null selection
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalType, setModalType] = useState(null); // New state to track success or failure
    const [visible, setVisible] =useState(false)
    const [selectedItem, setSelectedItem] = useState(null);
    const [currentId, setCurrentId] = useState(0);
    const flatListRef = useRef(null);
    const navigation = useNavigation()
   

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        setSelectedValue(null); // Reset selected value for the next question
        setModalVisible(false);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
        setSelectedValue(null); // Reset selected value for the previous question
    };

    const handleHintPress = () => {
        setModalType('hint');
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleCheckAnswer = () => {
        if (selectedValue === cards[currentIndex].correctValue) {
            setModalType('success');
        } else {
            setModalType('failure');
        }
        setModalVisible(true);
    };
    const renderItem = ({ item }) => (
        <TouchableOpacity
      style={[styles.item, { backgroundColor: item.color }]}
      onPress={() => {
        setSelectedItem(item);
        setVisible(true);
      }}
    >
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
    </TouchableOpacity>
    );


    const carouselItems = [
        {
          title: "Practise problems from Olympiads adaptively 📚",
          description:'Sharpen your skills for Math with Panini8! Offering a challenge thats just right. Get the most out of your study time by focusing on areas that need improvement and mastering Olympiad-style questions.', 
          image: require('../assets/play.png'), 
          buttonText: "Another Button",
          color: '#FFE483',
          buttonImage: require('../assets/start.png')
        },
        {
          title: 'Try With Hints! 💡', 
          description:'Dont let a tough problem slow you down. This "try with hints" feature provides gentle nudges in the right direction, helping you solve problems independently.', 
          image: require('../assets/play.png'), 
          color: '#CDDE7C',
          buttonText: "Another Button",
          buttonImage: require('../assets/start.png')
        },
        {
            title: 'Ask doubts in the forum💭', 
            description:'Our vibrant forum is here to help. Get clear explanations and insightful answers from a community of learners and experts.  Feel free to ask anything, big or small. The more you participate, the deeper your understanding becomes.', 
            image: require('../assets/play2.png'), 
            color: '#B780FD',
            buttonText: "Another Button",
            buttonImage: require('../assets/start.png')
          },
          {
            title: 'Start with a problem and then go to a concept✏', 
            description:'Dont just memorize, understand! This approach flips the script on traditional learning. Instead of starting with abstract concepts, youll begin with real-world problems.', 
            image: require('../assets/play3.png'), 
            color: '#8BA2FE',
            buttonText: "Another Button",
            buttonImage: require('../assets/start.png')
          },
        // Add more items here
      ];
    
      const goNext = () => {
        if (currentId < carouselItems.length - 1) {
          setCurrentId(currentId + 1);
        }
      };
    
      const goPrev = () => {
        if (currentId > 0) {
          setCurrentId(currentId - 1);
        }
      };
    
      const renderitem = (item) => (
        <View className="items-center">
          <View className="w-[90%] items-center  py-4" style={{backgroundColor: item.color}}>
            <Text className="text-lg font-semibold w-[80%] text-center mb-2">{item.title}</Text>
            <Text className="text-base w-[80%] text-center">{item.description}</Text>
            <TouchableOpacity className="bg-[#59B792] items-center h-10 px-6 mt-2 mb-6 rounded-full flex-row justify-center">
              <View className="flex-row items-center justify-center gap-2">
                <Image source={item.buttonImage} />
                <Text className="text-white font-semibold">{item.buttonText}</Text>
              </View>
            </TouchableOpacity>
            <Image className="h-[200px] w-[300px] mb-4" source={item.image} />
            <View className="flex-row justify-center gap-2">
            <TouchableOpacity
            onPress={goPrev}
             className="bg-[#59B792] p-2 rounded-full shadow-sm shadow-black"
            disabled={currentId === 0}
            >
            <ChevronLeft className="text-white"/>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={goNext}
            className="bg-[#59B792] p-2 rounded-full shadow-sm shadow-black"
            disabled={currentId === carouselItems.length - 1}
            >
            <ChevronRight className="text-white"/>
            </TouchableOpacity>
        </View>
          </View>
         
        </View>
      );


    return (

        <View className="flex-1  ">
            <View className="flex flex-row justify-between items-center mt-14 px-4  mb-5">
                <Image className="h-[50px] w-[110px]" source={require('../assets/logo.png')} />
                <View className="flex flex-row  gap-2">
                    <TouchableOpacity className="bg-[#59B792] items-center h-10 px-4 justify-center rounded-full "  onPress={() => navigation.push("Login")}>
                        <Text className="text-white font-semibold text-sm">Sign in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="border-[#59B792] border-2 items-center h-10 px-4 justify-center rounded-full " onPress={() => navigation.push("Signup")}>
                        <Text className="text-[#59B792] font-semibold text-sm">Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ImageBackground
            source={require('../assets/panini.png')} // Your background image
            style={{ flex: 1 }}
            resizeMode="cover"
            blurRadius={4} // Adjust this based on how you want the image to be displayed
            >
            <ScrollView >
            <View className="flex-1 justify-center items-center gap-4 my-10">
                <Text className="text-3xl font-bold">
                    <Image source={require('../assets/left.png')} /> Is Your Brain Open? <Image source={require('../assets/right.png')} />
                </Text>
                <Text className="text-center w-[70%] text-base font-semibold">
                    Make Learning Fun with Interactive Quizzes That Help You Master Concepts Every Day!
                </Text>
                <TouchableOpacity className="bg-[#59B792] items-center h-10 px-6 rounded-full flex-row justify-center">
                    <View className="flex-row items-center justify-center gap-2">
                        <Image source={require('../assets/start.png')} />
                        <Text className="text-white font-semibold">Start A Quiz</Text>
                    </View>
                </TouchableOpacity>
                <View className="min-h-[300px] w-[80%] bg-white rounded-xl flex flex-col border-[1px] border-gray-400">
                    <View className="w-full p-3 gap-2">
                        <View className="bg-[#59B792] w-[20%] items-center py-2 flex flex-row justify-center rounded-full">
                            <Text className="text-white font-semibold">IOQM</Text>
                        </View>
                        <Text className="font-bold text-lg">{cards[currentIndex].question}</Text>
                        <Text className="font-semibold text-sm">Select any one option</Text>
                        <View className="w-full">
                            {cards[currentIndex].options.map((option) => (
                                <RadioButton
                                    key={option.value}
                                    label={option.label}
                                    selected={selectedValue === option.value}
                                    onPress={() => setSelectedValue(option.value)}
                                />
                            ))}
                        </View>
                        <View className="w-full flex flex-row justify-between">
                            <TouchableOpacity
                                className="bg-[#FFDB5A] items-center h-10 px-4 rounded-full flex-row justify-center"
                                onPress={handleHintPress}
                            >
                                <View className="flex-row items-center justify-center gap-2">
                                    <Image source={require('../assets/time.png')} />
                                    <Text className="text-black font-semibold">Hint</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                className="bg-[#59B792] items-center h-10 px-4 rounded-full flex-row justify-center"
                                onPress={handleCheckAnswer}
                                disabled={selectedValue === null} // Disable if no option is selected
                            >
                                <View className="flex-row items-center justify-center gap-1">
                                    <Text className="text-white font-semibold">Check</Text>
                                    <ChevronRight className="text-white" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View className="w-[80%] flex flex-row justify-center gap-4">
                    <TouchableOpacity
                        className="bg-[#59B792] p-2 rounded-full shadow-sm shadow-black"
                        onPress={handlePrevious}
                    >
                        <ChevronLeft color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="bg-[#59B792] p-2 rounded-full shadow-sm shadow-black"
                        onPress={handleNext}
                    >
                        <ChevronRight color="white" />
                    </TouchableOpacity>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={handleCloseModal}
                >
                    <View className="flex-1 justify-center items-center ">
                        {modalType === 'hint' && (
                            <View className="flex-1 justify-center items-center w-full " style={{ backgroundColor: 'rgba(128, 128, 128, 0.4)'}}>
                            <View className="h-[200px] w-[80%] bg-white rounded-xl p-4 shadow-2xl shadow-black " >
                                <TouchableOpacity className="flex items-end" onPress={handleCloseModal}>
                                    <X className="text-black" />
                                </TouchableOpacity>
                                <Text className="font-bold text-lg mb-2">Hint</Text>
                                <View className="h-0.5 w-full bg-gray-300"></View>
                                <Text className="mt-2 text-base">{cards[currentIndex].hint}</Text>
                            </View>
                            </View>
                        )}
                        {modalType === 'success' && (
                            <View className="flex-1 justify-center items-center w-full " style={{ backgroundColor: 'rgba(128, 128, 128, 0.4)'}}>
                            <View className="min-h-[300px] w-[60%] bg-white justify-center items-center flex flex-col border-[1px] border-gray-400 shadow-2xl shadow-black  rounded-lg"  >
                                <Image source={require('../assets/rightt.png')} />
                                <Text className="font-bold text-lg">Great Work!!</Text>
                                <Text className="text-base font-semibold mb-4">You gained <Text className="text-[#59B792]">10+</Text> points</Text>
                                <TouchableOpacity
                                    className="bg-[#59B792] items-center h-10 px-4 rounded-full flex-row justify-center"
                                    onPress={handleNext}
                                >
                                    <View className="flex-row items-center justify-center gap-1">
                                        <Text className="text-white font-semibold">Next Activity</Text>
                                        <ChevronRight className="text-white" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            </View>
                        )}
                        {modalType === 'failure' && (
                            <View className="flex-1 justify-center items-center w-full " style={{ backgroundColor: 'rgba(128, 128, 128, 0.4)'}}>
                                <View className="min-h-[300px] w-[60%] bg-white justify-center items-center flex flex-col border-[1px] border-gray-400 shadow-2xl shadow-black rounded-lg">
                                <Image source={require('../assets/wrong.png')} />
                                <Text className="font-bold text-lg">Wrong Answer!</Text>
                                <Text className="text-base font-semibold mb-4">The correct answer was <Text className="text-[#59B792]">{cards[currentIndex].correctValue}</Text></Text>
                                <TouchableOpacity
                                    className="bg-[#59B792] items-center h-10 px-4 rounded-full flex-row justify-center"
                                    onPress={handleNext}
                                >
                                    <View className="flex-row items-center justify-center gap-1">
                                        <Text className="text-white font-semibold">Next Activity</Text>
                                        <ChevronRight className="text-white" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            </View>
                        )}
                    </View>
                </Modal>

{/* Card Section */}

                <View style={styles.container} className="w-[90%]">
                <View className="flex flex-row gap-2 items-center mb-2">
                <Text className="text-lg font-semibold">For Students from 1st to 6th</Text>
                <ChevronRight className="text-black font-semibold "/>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                {selectedItem && (
                    <Modal
                    animationType="slide"
                    transparent={true}
                    visible={visible}
                    onRequestClose={() => {
                        setVisible(!visible);
                    }}
                    >
                    <View className="flex-1 justify-center items-center w-full " style={{ backgroundColor: 'rgba(128, 128, 128, 0.4)'}}>
                        <View className="min-h-[300px] w-[90%] bg-white justify-center items-center  flex flex-col border-[1px] border-gray-400 shadow-2xl shadow-black rounded-lg">
                        <View className="w-full">
                        <Image className="w-full " source={require('../assets/image.png')} />
                        <TouchableOpacity className="absolute right-4 top-4">
                        <X  className="text-black "
                            title="Close"
                            onPress={() => setVisible(false)}
                        />
                        </TouchableOpacity>
                        <Text className="absolute bottom-6 left-6 text-2xl font-semibold" >{selectedItem.title}</Text>
                        </View>
                        <View className="w-[90%] flex flex-row justify-between items-center py-4">
                            <View>
                                <Text className="text-lg font-semibold">{selectedItem.title}</Text>
                                <Text className="text-gray-500">Eligibility: 1st to 6th grade</Text>
                            </View>
                            <TouchableOpacity className="bg-[#59B792] items-center h-10 px-6 rounded-full flex-row justify-center">
                                <View className="flex-row items-center justify-center gap-2">
                                    <Image source={require('../assets/start.png')} />
                                    <Text className="text-white text-base font-semibold">Get Started</Text>
                                </View>
                           </TouchableOpacity>
                        </View>
                        <View className="w-[90%] ">
                            <Text className="border-dashed border-gray-500 border-t-[1px]  text-lg font-semibold pt-2">Description</Text>
                            <Text className="pb-2">{selectedItem.description}</Text>
                        </View>
                        <View className="border-dashed border-gray-500 border-t-[1px] w-[90%] py-2 mb-2">
                            <Text className="text-lg font-semibold mb-2">
                                Modules in Goal
                            </Text>
                            <View className="flex w-full flex-row justify-between  flex-wrap">
                                <View className="flex flex-row items-center gap-1"><Image source={require('../assets/flag.png')}/><Text className="text-base font-semibold">Souvik Moule</Text></View>
                                <View className="flex flex-row items-center gap-1"><Image source={require('../assets/flag.png')}/><Text className="text-base font-semibold">Souvik Moule</Text></View>
                                <View className="flex flex-row items-center gap-1"><Image source={require('../assets/flag.png')}/><Text className="text-base font-semibold">Souvik Moule</Text></View>
                                <View className="flex flex-row items-center gap-1"><Image source={require('../assets/flag.png')}/><Text className="text-base font-semibold">Souvik Moule</Text></View>
                                <View className="flex flex-row items-center gap-1"><Image source={require('../assets/flag.png')}/><Text className="text-base font-semibold">Souvik Moule</Text></View>
                                <View className="flex flex-row items-center gap-1"><Image source={require('../assets/flag.png')}/><Text className="text-base font-semibold">Souvik Moule</Text></View>
                            </View>
                        </View>

                        </View>
                    </View>
                    </Modal>
                )}
                </View>
                <View style={styles.container} className="w-[90%]">
                <View className="flex flex-row gap-2 items-center mb-2">
                <Text className="text-lg font-semibold">For Students from 1st to 6th</Text>
                <ChevronRight className="text-black font-semibold "/>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                {selectedItem && (
                    <Modal
                    animationType="slide"
                    transparent={true}
                    visible={visible}
                    onRequestClose={() => {
                        setVisible(!visible);
                    }}
                    >
                    <View className="flex-1 justify-center items-center w-full " style={{ backgroundColor: 'rgba(128, 128, 128, 0.4)'}}>
                        <View className="min-h-[300px] w-[90%] bg-white justify-center items-center  flex flex-col border-[1px] border-gray-400 shadow-2xl shadow-black rounded-lg">
                        <View className="w-full">
                        <Image className="w-full " source={require('../assets/image.png')} />
                        <TouchableOpacity className="absolute right-4 top-4">
                        <X  className="text-black "
                            title="Close"
                            onPress={() => setVisible(false)}
                        />
                        </TouchableOpacity>
                        <Text className="absolute bottom-6 left-6 text-2xl font-semibold" >{selectedItem.title}</Text>
                        </View>
                        <View className="w-[90%] flex flex-row justify-between items-center py-4">
                            <View>
                                <Text className="text-lg font-semibold">{selectedItem.title}</Text>
                                <Text className="text-gray-500">Eligibility: 1st to 6th grade</Text>
                            </View>
                            <TouchableOpacity className="bg-[#59B792] items-center h-10 px-6 rounded-full flex-row justify-center">
                                <View className="flex-row items-center justify-center gap-2">
                                    <Image source={require('../assets/start.png')} />
                                    <Text className="text-white text-base font-semibold">Get Started</Text>
                                </View>
                           </TouchableOpacity>
                        </View>
                        <View className="w-[90%] ">
                            <Text className="border-dashed border-gray-500 border-t-[1px]  text-lg font-semibold pt-2">Description</Text>
                            <Text className="pb-2">{selectedItem.description}</Text>
                        </View>
                        <View className="border-dashed border-gray-500 border-t-[1px] w-[90%] py-2 mb-2">
                            <Text className="text-lg font-semibold mb-2">
                                Modules in Goal
                            </Text>
                            <View className="flex w-full flex-row justify-between  flex-wrap">
                                <View className="flex flex-row items-center gap-1"><Image source={require('../assets/flag.png')}/><Text className="text-base font-semibold">Souvik Moule</Text></View>
                                <View className="flex flex-row items-center gap-1"><Image source={require('../assets/flag.png')}/><Text className="text-base font-semibold">Souvik Moule</Text></View>
                                <View className="flex flex-row items-center gap-1"><Image source={require('../assets/flag.png')}/><Text className="text-base font-semibold">Souvik Moule</Text></View>
                                <View className="flex flex-row items-center gap-1"><Image source={require('../assets/flag.png')}/><Text className="text-base font-semibold">Souvik Moule</Text></View>
                                <View className="flex flex-row items-center gap-1"><Image source={require('../assets/flag.png')}/><Text className="text-base font-semibold">Souvik Moule</Text></View>
                                <View className="flex flex-row items-center gap-1"><Image source={require('../assets/flag.png')}/><Text className="text-base font-semibold">Souvik Moule</Text></View>
                            </View>
                        </View>

                        </View>
                    </View>
                    </Modal>
                )}
                </View>
                <View style={styles.container} className="w-[90%]">
                <View className="flex flex-row gap-2 items-center mb-2">
                <Text className="text-lg font-semibold">For Students from 1st to 6th</Text>
                <ChevronRight className="text-black font-semibold "/>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                {selectedItem && (
                    <Modal
                    animationType="slide"
                    transparent={true}
                    visible={visible}
                    onRequestClose={() => {
                        setVisible(!visible);
                    }}
                    >
                    <View className="flex-1 justify-center items-center w-full " style={{ backgroundColor: 'rgba(128, 128, 128, 0.4)'}}>
                        <View className="min-h-[300px] w-[90%] bg-white justify-center items-center  flex flex-col border-[1px] border-gray-400 shadow-2xl shadow-black rounded-lg">
                        <View className="w-full">
                        <Image className="w-full " source={require('../assets/image.png')} />
                        <TouchableOpacity className="absolute right-4 top-4">
                        <X  className="text-black "
                            title="Close"
                            onPress={() => setVisible(false)}
                        />
                        </TouchableOpacity>
                        <Text className="absolute bottom-6 left-6 text-2xl font-semibold" >{selectedItem.title}</Text>
                        </View>
                        <View className="w-[90%] flex flex-row justify-between items-center py-4">
                            <View>
                                <Text className="text-lg font-semibold">{selectedItem.title}</Text>
                                <Text className="text-gray-500">Eligibility: 1st to 6th grade</Text>
                            </View>
                            <TouchableOpacity className="bg-[#59B792] items-center h-10 px-6 rounded-full flex-row justify-center">
                                <View className="flex-row items-center justify-center gap-2">
                                    <Image source={require('../assets/start.png')} />
                                    <Text className="text-white text-base font-semibold">Get Started</Text>
                                </View>
                           </TouchableOpacity>
                        </View>
                        <View className="w-[90%] ">
                            <Text className="border-dashed border-gray-500 border-t-[1px]  text-lg font-semibold pt-2">Description</Text>
                            <Text className="pb-2">{selectedItem.description}</Text>
                        </View>
                        <View className="border-dashed border-gray-500 border-t-[1px] w-[90%] py-2 mb-2">
                            <Text className="text-lg font-semibold mb-2">
                                Modules in Goal
                            </Text>
                            <View className="flex w-full flex-row justify-between  flex-wrap">
                                <View className="flex flex-row items-center gap-1"><Image source={require('../assets/flag.png')}/><Text className="text-base font-semibold">Souvik Moule</Text></View>
                                <View className="flex flex-row items-center gap-1"><Image source={require('../assets/flag.png')}/><Text className="text-base font-semibold">Souvik Moule</Text></View>
                                <View className="flex flex-row items-center gap-1"><Image source={require('../assets/flag.png')}/><Text className="text-base font-semibold">Souvik Moule</Text></View>
                                <View className="flex flex-row items-center gap-1"><Image source={require('../assets/flag.png')}/><Text className="text-base font-semibold">Souvik Moule</Text></View>
                                <View className="flex flex-row items-center gap-1"><Image source={require('../assets/flag.png')}/><Text className="text-base font-semibold">Souvik Moule</Text></View>
                                <View className="flex flex-row items-center gap-1"><Image source={require('../assets/flag.png')}/><Text className="text-base font-semibold">Souvik Moule</Text></View>
                            </View>
                        </View>

                        </View>
                    </View>
                    </Modal>
                )}
                </View>
{/* Card Section */}                
                <View >
                <View className="flex w-full items-center">
                <View className="w-[90%] h-[100px]  mt-10">
                    <Text className="text-lg  text-center font-bold ">Practise Everyday, Beautiful Problems, Adaptively</Text>
                </View>
                <View className="w-[90%]  mt-10">
                    <Text className="text-xl  text-center font-bold">Track Your Progress</Text>
                    <Text className="text-lg  text-center text-gray-600">Practise Everyday, Beautiful Problems, Adaptively</Text>
                </View>
                <TouchableOpacity className="bg-[#59B792] items-center h-10 px-6 mt-4 rounded-full flex-row justify-center">
                    <View className="flex-row items-center justify-center gap-2">
                        <Image source={require('../assets/start.png')} />
                        <Text className="text-white font-semibold">Start A Quiz</Text>
                        
                    </View>

                </TouchableOpacity>
                <View className="border-gray-400  border mt-6">
                    <Image className="h-[200px] w-[300px]" source={require('../assets/play.png')}/>
                    </View>
                </View>
                </View>
            </View>
            <View>
            {renderitem(carouselItems[currentId])}
            
            </View>
            <View className="items-center my-10 ">
                <Text className="text-xl font-bold">Textmonials</Text>
                <Text className="text-base mb-20">See What our students have to say about us</Text>
                <View className="w-[90%]  flex flex-row gap-4 overflow-y-scroll">
                <FlatList
                    ref={flatListRef}
                    data={feedback}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 20 }}
                    ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                    keyExtractor={(item) => item.id}
                    initialScrollIndex={Math.floor(feedback.length / 2)}
                    getItemLayout={(feedback, index) => (
                        { length: 240, offset: 240 * index, index }
                    )}
                    renderItem={({ item }) => (
                        <View className="w-[250px] min-h-[300px] my-10 shadow-md shadow-black bg-white rounded-xl items-center justify-between">
                        <Image className="absolute top-[-40px] left-4" source={item.image} />
                        <Image className="absolute top-[-30px] right-[-50px]" source={item.stars} />
                        <Text className="mt-12 py-2 items-center text-left w-[90%]">{item.text}</Text>
                        <View className="w-[90%] flex flex-row justify-between items-center py-2">
                            <View>
                            <Text className="font-bold">{item.personName}</Text>
                            <Text>{item.grade}</Text>
                            </View>
                            <View className="flex flex-row gap-1 items-center">
                            <Image source={require('../assets/like.png')} />
                            <Text className="font-bold">Testimonial</Text>
                            </View>
                        </View>
                        </View>
                    )}
                    />
                </View>
            </View>


 {/* Footer            */}
            <View className="h-[300px] flex gap-4 items-center bg-[#59B792]">
                <View className="w-[90%] flex flex-row items-center justify-between ">
                    <View className="flex flex-col gap-1">
                    <Image className="h-[50px] w-[110px]" source={require('../assets/icon.png')} />
                    <Text className="text-white w-[80%]">Try the Live Classroom Programs</Text>
                    </View>
                    <View className="flex flex-row gap-1">
                        <Image source={require('../assets/insta.png')}/>
                        <Image source={require('../assets/face.png')}/>
                        <Image source={require('../assets/linkedin.png')}/>
                        <Image source={require('../assets/youtube.png')}/>
                    </View>
                </View>
                <View className="w-[90%]">
                    <View className="w-[70%] flex flex-row justify-between">
                        <View>
                            <Text className="text-white text-lg font-semibold">Explore</Text>
                            <Text className="text-white ">Sign in</Text>
                            <Text className="text-white ">Sign Up</Text>
                            <Text className="text-white ">Testimonials</Text>
                        </View>
                        <View>
                            <Text className="text-white text-lg font-semibold">More</Text>
                            <Text className="text-white ">Help</Text>
                            <Text className="text-white ">Trems & Condition</Text>
                            <Text className="text-white ">Privacy Policy</Text>
                            <Text className="text-white ">Cancellation Policy</Text>
                        </View>
                    </View>
                </View>
                <View className="w-full border-t-[1px] border-white">
                    <Text className="text-white text-center py-4">Copyright©2024 panini8</Text>
                </View>
            </View>
            </ScrollView>
            </ImageBackground>
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
    },
    item: {
      height: 150,
      width: 250,
      borderRadius: 10,
      padding: 10,
      marginRight: 10, // Space between items
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
      color: '#fff', // White text color
    },
    imageContainer: {
      width: '100%',
      alignItems: 'flex-end',
    },
    image: {
      width: 30, // Adjust width and height as needed
      height: 30,
    },
  });

export default Home;
