import {View, Text, ScrollView} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: 'orange',
        flex: 1,
        padding: 8,
        paddingBottom: 0,
      }}>
      <View style={{backgroundColor: 'white'}}>
        <Text>Home</Text>
      </View>
    </ScrollView>
  );
};

export default Home;
