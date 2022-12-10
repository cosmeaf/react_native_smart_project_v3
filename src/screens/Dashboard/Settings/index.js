import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default ({ navigation }) => {
  const [list, setList] = useState([]);
  return (
    <SafeAreaView style={{ flex: 1, marginLeft: 14, marginRight: 14 }}>
      <View style={{ flex: 1, backgroundColor: '#DAA', justifyContent: 'center', alignItems: 'center' }}>
        <Text>HEADER SETTINGS</Text>
      </View>
    </SafeAreaView>
  )
}