import * as React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import Modal from "react-native-modal";

export default function TabOneLine({ title, subTitle, onPress = null }) {

  return (
    <View style={styles.container}>
      <View style={styles.tabOneView}>
        <Text style={styles.tabTitle}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.tabOneSubTitle}>{subTitle}</Text>
        </TouchableOpacity>
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
    marginLeft: 14, marginRight: 14, marginBottom: 10, fontSize: 14, fontWeight: '500'
  },
  tabTitle: {
    marginLeft: 14, padding: 10, fontSize: 18, fontWeight: '500'
  },
  tabOneSubTitle: {
    marginRight: 14, padding: 10, fontSize: 16
  },
  modal: { justifyContent: 'center', alignItems: 'center' },
  modalContainer: { justifyContent: 'center', padding: 10, backgroundColor: '#FFF', height: 200, width: '94%', borderRadius: 10 },
  modaTextInput: { height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 14, fontSize: 16 },
  modalButton: { alignItems: 'center', backgroundColor: '#F16529', padding: 10, borderRadius: 10 }
});