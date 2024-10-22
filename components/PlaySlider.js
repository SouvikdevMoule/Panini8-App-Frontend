import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const PlaySlider = () => {
    const { width } = Dimensions.get('window');
    const data = [
        { id: '1', text: 'Slide 1' },
        { id: '2', text: 'Slide 2' },
        { id: '3', text: 'Slide 3' },
    ];

    return (
        <View style={styles.container}>
            <Carousel
                width={width}
                height={200}
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.slide}>
                        <Text style={styles.text}>{item.text}</Text>
                    </View>
                )}
                loop
                autoPlay
                autoPlayInterval={2000}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        borderRadius: 10,
        padding: 20,
    },
    text: {
        fontSize: 24,
        color: '#333',
    },
});

export default PlaySlider;
