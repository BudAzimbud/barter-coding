import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

function Input({placeholder, onChangeText = text => {}}) {
  return (
    <View style={styles.wrapperInput}>
      <TextInput placeholder={placeholder} onChangeText={onChangeText} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperInput: {
    backgroundColor: 'white', //    <==== HERE
    borderRadius: 24,
    paddingHorizontal: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    marginTop: 20,
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 10,
  },
  input: {},
});

export default Input;
