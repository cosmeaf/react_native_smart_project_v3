import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const SearcheArea = () => {
  return (
    <View style={styles.searchArea}>
      <TextInput
        style={{ flex: 1, fontSize: 18 }}
        placeholder='Procure por um Serviço'
      />
      <Ionicons name="ios-search" size={24} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
  searchArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    marginLeft: 14,
    marginRight: 14,
    marginBottom: 10,
    marginTop: 10,
    paddingStart: 10,
    paddingEnd: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
})

export default SearcheArea