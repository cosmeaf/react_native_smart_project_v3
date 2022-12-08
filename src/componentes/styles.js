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
});
export default styles;