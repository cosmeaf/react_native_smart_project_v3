
import React, { useState } from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

export function CarRarioButton({ value }) {
  state = { value: 'first' };
  return (
    <RadioButton.Group value={value} >
      <View >
        <Text>First</Text>
        <RadioButton value="first" />
      </View>
      <View>
        <Text>Second</Text>
        <RadioButton value="second" />
      </View>
      <View>
        <Text>Second</Text>
        <RadioButton value="third" />
      </View>
    </RadioButton.Group>
  );
}
