import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native'

export default function ProgressBar() {

    const screenWidth = Dimensions.get('window').width;
  return (
   <View className="flex-1 items-center">
     <Progress.Bar
    progress={0.05}
    width={screenWidth * 0.9}
    height={25}
    color="#59B792"
    unfilledColor="rgba(255, 255, 255, 0.3)"
    borderWidth={4}
    borderColor="#fff"
    borderRadius={15}
  />
   </View>

  )
}