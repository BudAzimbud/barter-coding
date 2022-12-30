import SearchBar from 'react-native-search-bar';
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const InputSearchBar = () => {
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search Products"
        onChangeText={() => {}}
        onSearchButtonPress={() => {}}
        onCancelButtonPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 3,
    width: '100%',
  },
});

export default InputSearchBar;
