import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';


const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          REGISTER PAGE
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUp;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

