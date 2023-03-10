import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
const Card = ({data, onPress = () => {}}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.wrapperCard}>
        <View style={styles.profile}>
          <Image
            source={{
              uri: 'https://asset.kompas.com/crops/o1K29R-sCa6DQ30jB0qKQwPDGWo=/0x229:4415x3173/750x500/data/photo/2021/10/09/61616eaf1884b.jpg',
            }}
            style={styles.avatar}
          />
          <Text style={{fontSize: 10}}>{data.users.name}</Text>
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
            Request Barter: {data.requestBarter} People
          </Text>
        </View>
        <Button title="Barter" onPress={onPress} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    padding: 10,
    width: '50%',
  },
  wrapperCard: {
    padding: 10,
    backgroundColor: 'white', //    <==== HERE
    borderRadius: 10,
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
    fontSize: 10,
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
    borderRadius: 10,
    borderRadius: 20,
    alignSelf: 'center',
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
  footer: {},
  rating: {
    width: 20,
  },
});

export default Card;
