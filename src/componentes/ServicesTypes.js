import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import types from '../model/data/serviceData';

const ServicesTypes = ({ data, onPress = null }) => {

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {types.map((item, index) => (
        <TouchableOpacity
          onPress={() => onPress(item.title)}
          style={{
            height: 100,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F2F2F2',
            marginTop: 20,
            marginLeft: 10,
            borderRadius: 10,
          }}
          key={index}
        >
          <Image source={item.image} style={{ width: 40, height: 40, marginBottom: 10 }} />
          <Text style={{ textAlign: 'center', flexWrap: 'wrap', }}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default ServicesTypes

const styles = StyleSheet.create({})