import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // Add Addvehicle
  dropdown: {
    height: 40,
    borderColor: '#000',
    borderWidth: 0.5,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#DDD'
  },
  button: { marginRight: 10, marginLeft: 10, marginTop: 10, marginBottom: 20, justifyContent: 'center', alignItems: 'center', padding: 10, borderRadius: 10, borderWidth: 0.5 },
  buttonText: { fontSize: 18, fontWeight: 'bold', color: '#212121' },
  modal: { justifyContent: 'center', alignItems: 'center' },
  modalContainer: { justifyContent: 'center', padding: 10, backgroundColor: '#FFF', height: 180, width: '94%', borderRadius: 10 },
  modaTextInput: { height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 14, fontSize: 16, backgroundColor: '#F2F2F2' },
  modalButton: { width: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F16529', padding: 5, borderRadius: 10 },
  modalButtonText: { fontSize: 18, color: '#FFF' },
  excludeButton: { justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  excludeButtonText: { fontSize: 18, fontWeight: '500', color: 'red' },
});
export default styles;