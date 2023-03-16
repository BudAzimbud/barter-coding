
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2a9ee9',
      padding: 4,
      paddingBottom: 0,
    },
    wrapper: {
      padding: 10,
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
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingBottom: 100,
    },
  });
  
  export default styles