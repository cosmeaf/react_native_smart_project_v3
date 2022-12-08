import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';


const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          PROFILE PAGE
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Profile;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

