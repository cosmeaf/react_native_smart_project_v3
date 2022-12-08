import React from "react";
import { View, Text, Image } from "react-native";
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
const windowWidth = Dimensions.get('window').width;


class BannerSlideComponents extends comments() {
  render(h) {
    return (
      <View style={{ height: 130, width: 130 borderWidth: 0.5, borderColor: '#DDD' }}>
        <View style={{ flex: 2 }}>
          <Image source={require(this.prps.imageUrl)} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
        </View>
        <View>
          <Text>{this.props.title}</Text>
        </View>
      </View>
    )
  }
}