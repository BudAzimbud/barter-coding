import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    padding: 8,
  },
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 20,
    borderColor: 'rgba(243, 217, 173, 0.86)',
    borderWidth: 2,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    height: '100%',
  },
  shadow: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  form: {
    paddingHorizontal: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: 100,
    height: 100,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-around',
    lineHeight: 30,
  },
  titleImage: {
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: 100,
    height: 100,
  },
  textLogin: {
    color: '#FF591D',
    fontSize: 21,
    fontWeight: '400',
  },
  menus: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
