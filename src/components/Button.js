import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Button = ({children}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    borderRadius: 24,
    paddingHorizontal: 50,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    marginTop: 20,
    paddingVertical: 10,
    textAlign: 'center',
    alignSelf: 'flex-start',
    shadowOpacity: 0.1,
    shadowRadius: 24,
  },
  text: {
    color: 'white',
  },
});

export default Button;
