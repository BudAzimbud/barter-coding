import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Button = ({
  children,
  color = 'skyblue',
  colorText = 'white',
  onPress = () => {},
  icon,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {backgroundColor: color, borderColor: colorText, borderWidth: 1},
      ]}>
      {icon && <Text style={{color: colorText, paddingRight:5}}>{icon}</Text>}
      <Text style={[styles.text, {color: colorText}]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white', //    <==== HERE
    borderRadius: 24,
    paddingHorizontal: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    padding: 10,
    display: 'flex',
    flexDirection: 'row',

    gap: 20,
    paddingHorizontal: 50,
    marginTop: 20,
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 10,
    shadowOpacity: 0.1,
    shadowRadius: 24,
  },
  text: {
    color: 'white',
  },
});

export default Button;
