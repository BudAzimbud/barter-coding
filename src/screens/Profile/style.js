import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    padding: 10,
    height:'100%',
    backgroundColor:'#2a9ee9',
  },
  containerProfile: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    marginTop: 10,
    paddingVertical: 20,
    borderRadius: 40,
  },
  imageProfile: {
    height: 150,
    width: 150,
    borderRadius: 80,
  },
  name: {
    fontSize: 24,
    paddingTop: 10,
  },
  containerMenu: {
    backgroundColor: 'white',
    width: '100%',
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
  },
  textMenu: {
    fontSize: 20,
    marginBottom: 30,
    color: '#2a9ee9',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    elevation: 24,
  },
});

export default styles;
