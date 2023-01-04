import * as React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import Modal from "react-native-modal";

export default function TabOneLine({ title, subTitle, onPress = null }) {

  return (
    <View style={styles.container}>
      <View style={styles.tabOneView}>
        <View style={{ flex: 1 }}>
          <Text style={styles.tabTitle}>{title}</Text>
        </View>

        <View style={{ flex: 1.5 }}>
          <TouchableOpacity onPress={onPress} >
            <Text style={styles.tabOneSubTitle}>{subTitle}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabOneView: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 5
  },
  tabOneViewText: {
    fontSize: 14, fontWeight: '500',
  },
  tabTitle: {
    paddingLeft: 10, paddingTop: 10, paddingBottom: 10, fontSize: 18, fontWeight: '500',
  },
  tabOneSubTitle: {
    paddingRight: 10, paddingTop: 10, paddingBottom: 10, fontSize: 16, textAlign: "right"
  },
});