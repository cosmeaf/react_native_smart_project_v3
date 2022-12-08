import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import styles from '../styles';

const Vehicle = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerMenu}>
          <Icon name="ios-menu" size={30} color="#4F8EF7" onPress={() => Alert.alert('Menu Smart Mecânico')} />
        </View>
        <Text style={styles.headerText}> Jamerson </Text>
        <View tyle={styles.headerProfile}>
          <ImageBackground
            source={require('../../../assets/image/avatar.png')}
            style={styles.headerImage}
            imageStyle={{ borderRadius: 25 }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Vehicle;