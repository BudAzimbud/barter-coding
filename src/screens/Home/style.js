import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a9ee9',
    paddingBottom: 0,
  },
  wrapper: {
    marginTop: 20,
    backgroundColor: 'white',
    borderColor: 'yellow',
    borderWidth: 1,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconHeader: {
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'orange',
    color: 'orange',
    borderRadius: 50,
    width: 37,
  },
  profileHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner:{
    height:200,
    width:'100%',
    backgroundColor:'red',
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
  },
  bannerMenu: {
    height:56,
    width:'80%',
    backgroundColor:'white',
    bottom:0,
    paddingHorizontal:20,
    marginTop:-40,
    alignItems:'center',
    borderRadius:20,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    alignContent:'center'
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
});

export default styles;
