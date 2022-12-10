import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: '#FFF',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingEnd: 20,
          paddingStart: 20,
          marginBottom: 10,
          borderRadius: 10,
          marginLeft: 14,
          marginRight: 14,
        }}
        onPress={() => navigation.navigate('VehicleDetails')}
      >
        <View>
          <Image source={require('../../../assets/icons/car.png')} resizeMode='cover' style={{ width: 35, height: 35, marginTop: 10, marginBottom: 10 }} />
        </View>
        <Text>HONDA LQV1965</Text>
        <Ionicons name='chevron-forward' color='#252525' size={20} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}