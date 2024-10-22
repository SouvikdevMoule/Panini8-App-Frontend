import { FlatList, Image, ImageBackground, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { useState } from "react";
import { ChevronRight, X } from "lucide-react-native";
import { StyleSheet } from "react-native";
const data = [
    { id: '1', title: 'College Level', image: require('../assets/pic.png'), color: '#ff6347', details: 'Details about College Level', description: 'dwdwdwdw wdw dw d wd w d wd wd wd wd wd w wd wd wd wdwd wd w w dw dw dw dw dw dw dw d wdw d w dw d d wd wd wd w dwd wdw dw dw' },
    { id: '2', title: 'High School Level', image: require('../assets/pic1.png'), color: '#4682b4', details: 'Details about High School Level', description: 'dwdwdwdw wdw dw d wd w d wd wd wd wd wd w wd wd wd wdwd wd w w dw dw dw dw dw dw dw d wdw d w dw d d wd wd wd w dwd wdw dw dw' },
    { id: '3', title: 'Middle School Level', image: require('../assets/pic2.png'), color: '#32cd32', details: 'Details about Middle School Level', description: 'dwdwdwdw wdw dw d wd w d wd wd wd wd wd w wd wd wd wdwd wd w w dw dw dw dw dw dw dw d wdw d w dw d d wd wd wd w dwd wdw dw dw' },
  ];


const Goals = () => {
    const [visible, setVisible] =useState(false)
    const [selectedItem, setSelectedItem] = useState(null);



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



    return(
        <View className="flex-1">
            <View className="flex flex-row justify-between items-center mt-14 px-4  mb-5">
                <Image className="h-[50px] w-[110px]" source={require('../assets/logo.png')} />
                <Image className="h-14 w-14" source={require('../assets/img.png')}/>
          </View>
          <ImageBackground
            source={require('../assets/panini.png')} // Your background image
            style={{ flex: 1 }}
            resizeMode="cover"
            blurRadius={4} // Adjust this based on how you want the image to be displayed
            >
            <ScrollView>
                <View className="flex-1 items-center">
                    <View className="bg-white w-[]">

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
                </View>
            </ScrollView>
            </ImageBackground>
        </View>
    )
}

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

export default Goals;