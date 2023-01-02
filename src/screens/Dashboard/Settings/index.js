import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalContext from '../../../Contexts/Context';

export default ({ navigation }) => {
  const { authentication, isLoading, signout } = useContext(GlobalContext);

  if (!authentication) {
    signout();
  }

  useEffect(() => {

  }, [authentication]);
  const [list, setList] = useState([]);
  return (
    <SafeAreaView style={{ flex: 1, marginLeft: 14, marginRight: 14 }}>
      <View style={{ flex: 1, backgroundColor: '#DAA', justifyContent: 'center', alignItems: 'center' }}>
        <Text>HEADER SETTINGS</Text>
      </View>
    </SafeAreaView>
  )
}