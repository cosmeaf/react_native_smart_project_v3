import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';


const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          ABOUT PAGE
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default About;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

