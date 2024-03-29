import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
// import Button from './Button';
const Card = ({data, onPress = () => {}}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperCard}>
        <View style={styles.profile}>
          <Image
            source={{
              uri: data.users.image,
            }}
            style={styles.avatar}
          />
          <Text style={{fontSize: 12}}>{data?.users?.name}</Text>
        </View>
        <Image
          source={{
            uri: data.image,
          }}
          style={styles.imageCard}
        />
        <Text style={styles.textTitle}>{data.name}</Text>
        <Text
          style={[
            styles.availableText,
            {
              color: 'white',
              backgroundColor: data.available ? '#4D7EF9' : 'red',
            },
          ]}>
          {data.available ? 'Available' : 'Dealad'}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.barterText}>
            Request : {data.requestBarter} 
          </Text>
        </View>
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: '#2a9ee9',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Barter</Text>
        </TouchableOpacity>
        {/* <Button onPress={onPress}>Barter</Button> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginRight: 4,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    gap: 10,
  },
  container: {
    padding: 10,
    width: 195,
  },
  wrapperCard: {
    padding: 10,
    backgroundColor: 'white', //    <==== HERE
    borderRadius: 20,
    color: 'orange',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 10,
  },
  imageCard: {
    width: '100%',
    height: 130,
  },
  textTitle: {
    textAlign: 'center',
    fontWeight: '500',
    color: 'black',
    padding: 10,
  },
  barterText: {
    fontSize: 14,
    color: '#4D7EF9',
    textAlign: 'center',
    marginBottom: 8,
  },
  availableText: {
    padding: 4,
    borderRadius: 30,
    fontSize: 9,
    fontWeight: '600',
    position: 'absolute',
    end: 65,
    top: 150,
    backgroundColor: 'white', //    <==== HERE
    borderRadius: 20,
    alignSelf: 'center',
    color: 'orange',
   
  },
  footer: {},
  rating: {
    width: 20,
  },
});

export default Card;
