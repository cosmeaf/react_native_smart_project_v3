import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";



const Carousel = () => {
  const images = [
    require('../assets/image/slide/001_image.jpg'),
    require('../assets/image/slide/002_image.jpg'),
    require('../assets/image/slide/003_image.jpg'),
    require('../assets/image/slide/004_image.jpg'),
    require('../assets/image/slide/005_image.jpg'),
    require('../assets/image/slide/006_image.jpg'),
    require('../assets/image/slide/007_image.jpg'),
  ];

  return (
    <View>
      <SliderBox
        images={images}
        sliderBoxHeight={200}
        onCurrentImagePressed={index => index}
        dotColor="#DD1"
        inactiveDotColor="#F1F1F1"
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
        resizeMethod={'resize'}
        resizeMode={'cover'}
        paginationBoxStyle={{
          position: "absolute",
          bottom: 0,
          padding: 0,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          paddingVertical: 10
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: "rgba(128, 128, 128, 0.92)"
        }}
        ImageComponentStyle={{ borderRadius: 15, width: '92%', marginTop: 5 }}
        imageLoadingColor="#F1F1F1"
      />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({})