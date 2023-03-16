
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2a9ee9',
      padding: 4,
      paddingBottom: 0,
    },
    wrapper: {
      marginTop: 10,
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
    listProduct: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingBottom: 100,
      padding:10,
      justifyContent: 'center',
    },
  });
  
  export default styles