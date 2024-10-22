import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Header() {
    const navigation = useNavigation()
  return (
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

  )
}