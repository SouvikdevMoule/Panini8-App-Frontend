import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const MyCarousel = () => {

  const renderItem = ({ item }) => (
    <TouchableOpacity className="h-[150px] w-[250px] bg-red-500 rounded-xl p-3 flex justify-between">
      <Text className="text-base font-semibold">{item.title}</Text>
      <View className="w-full flex items-end">
        <Image source={item.image} />
      </View>
    </TouchableOpacity>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={300} // Width of the carousel container
      itemWidth={260} // Width of each item
      inactiveSlideScale={0.95}
      inactiveSlideOpacity={0.7}
      loop={true}
    />
  );
};

export default MyCarousel;
