import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  headerMenu: {
    alignItems: 'center',
  },
  headerText: {
    alignItems: 'center',
    fontSize: 16,
  },
  headerProfile: {
    alignItems: 'center',
  },
  headerImage: {
    width: 35,
    height: 35
  },
  // Add Addvehicle
  dropdown: {
    height: 50,
    borderColor: '#FFF',
    borderWidth: 0.5,
    borderRadius: 8,
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
    color: '#FFF'
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#FFF'
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#FFF'
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: '#FFF'
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#38A69D'
  },
  button: { backgroundColor: '#FFF', marginTop: 10, justifyContent: 'center', alignItems: 'center', padding: 10, borderRadius: 8 },
  buttonText: { fontSize: 18, fontWeight: 'bold', color: '#38A69D' }
});
export default styles;