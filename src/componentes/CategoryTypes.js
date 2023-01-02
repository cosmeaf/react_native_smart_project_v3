import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import types from '../model/data/categoryData';

const CategoryTypes = ({ data, onPress = null }) => {
  return (
    <View style={{ marginRight: 10 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item, index) => (
          <TouchableOpacity
            onPress={() => onPress(item.subtitle)}
            style={{
              height: 100,
              width: 130,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F2F2F2',
              marginTop: 20,
              marginLeft: 10,
              borderRadius: 10,
              marginBottom: 20,
            }}
            key={index}
          >
            <Image source={item.image} style={{ width: 50, height: 50, marginBottom: 10 }} />
            <Text style={{ textAlign: 'center', flexWrap: 'wrap', }}> {item.title} </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default CategoryTypes

const styles = StyleSheet.create({})