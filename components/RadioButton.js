import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const RadioButton = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex-row items-center my-2 border-[1px] border-gray-400 rounded-lg p-2 bg-white">
      <View
        className={`w-5 h-5 rounded-full border-2 ${
          selected ? 'border-[#59B792]' : 'border-black'
        } justify-center items-center`}
      >
        {selected && <View className="w-3 h-3 rounded-full bg-[#59B792]" />}
      </View>
      <Text className="ml-3 text-black font-semibold">{label}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
