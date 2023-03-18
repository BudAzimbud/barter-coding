import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

function Input({placeholder, onChangeText = text => {}, icon}) {
  return (
    <View style={styles.wrapperInput}>
      <TextInput style={{flex:1}} placeholder={placeholder} onChangeText={onChangeText} />
      <View>{icon}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperInput: {
    height: 56,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {},
});

export default Input;
