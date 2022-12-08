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
  search: {
    flexDirection: 'row',
    borderColor: '#38A68D',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  inputSerarch: {
    paddingLeft: 10,
    fontSize: 18
  },
  bannerImage: {
    width: windowWidth * 0.88, height: windowHeight * 0.28, borderRadius: 10, marginLeft: 5, marginRight: 5, overflow: 'hidden', elevation: 5, borderWidth: 0.25
  },
  categoryView: {
    flexDirection: 'row',

    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  categoryViewText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#38A69D',
    marginTop: 20,
  },
  categoryRenderImage: {
    width: '45%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.2,
    margin: 10
  }
})

export default styles;