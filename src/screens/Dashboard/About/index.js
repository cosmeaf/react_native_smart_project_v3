import React, { useState, useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalContext from '../../../Contexts/Context';

export default ({ navigation }) => {

  const { authentication, isLoading, signout } = useContext(GlobalContext);
  if (!authentication) {
    signout();
  }

  useEffect(() => {

  }, [authentication])

  return (
    <SafeAreaView style={{ flex: 1, marginLeft: 14, marginRight: 14 }}>
      <View style={{ flex: 1, backgroundColor: '#DAA', justifyContent: 'center', alignItems: 'center' }}>
        <Text>HEADER</Text>
      </View>
    </SafeAreaView>
  )
}