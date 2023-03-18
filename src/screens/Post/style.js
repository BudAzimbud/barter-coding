import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    center: {
      alignItems: 'center',
    },
    heroContainer: {
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      width: 304,
      height: 304,
      borderColor: '#EB8C7C',
      borderWidth: 4,
      borderTopWidth: 0,
      borderStartWidth: 0.5,
      borderEndWidth: 0.5,
    },
    labelHero: {
      backgroundColor: '#EB8C7C',
      padding: 8,
      borderRadius: 40,
      color: 'white',
      position: 'absolute',
      bottom: -20,
    },
    content: {
      flex: 1,
      marginTop: 40,
      borderRadius: 40,
      borderBottomStartRadius: 0,
      borderBottomEndRadius: 0,
      backgroundColor: 'white', //    <==== HERE
      paddingHorizontal: 20,
      paddingVertical: 23,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 2,
      shadowRadius: 24,
      elevation: 10,
    },
    title: {
      color: 'black',
      fontSize: 20,
      fontWeight: '600',
    },
    description: {
      fontWeight: '300',
      fontSize: 12,
      color: 'black',
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
      elevation: 10,
    },
    badge: {
      width: '50%',
    },
  });
  