import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {useRef, useMemo, useCallback} from 'react';
import {Avatar, Button} from 'react-native-paper';
import StarRating from 'react-native-star-rating-widget';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import BottomSheet from '@gorhom/bottom-sheet';
import {useState} from 'react';
import Input from '../../components/Input';
var {width, height} = Dimensions.get('window');

const ProductsDetail = ({route}) => {
  const {product} = route.params;
  const [modalBarter, setModalBarter] = useState(false);
  const bottomSheetRef = useRef();
  const snapPoints = useMemo(() => ['100%', '100%'], []);
  const handleSheetChanges = useCallback(index => {
    if (index === -1) {
      setModalBarter(false);
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={[styles.heroContainer]}>
          <Avatar.Image
            style={styles.heroImage}
            source={{uri: product?.image}}
            size={300}
          />
          <Text style={styles.labelHero}>360</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.title}>{product.name}</Text>
            <View>
              <Text style={{fontSize: 15, marginTop: 5}}>
                {'('}Request Barter : {product.requestBarter}
                {')'}
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Avatar.Image source={{uri: product.users.image}} size={40} />
            <Text>{product?.users?.name}</Text>
            <StarRating
              rating={product?.users?.rating}
              starSize={15}
              starStyle={{marginStart: -4}}
              onChange={() => {}}
            />
          </View>
        </View>

        <Text style={[styles.title, {marginTop: 30}]}>Description</Text>
        <Text style={styles.description}>{product.descripion}</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          padding: 10,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
            borderColor: 'red',
            borderWidth: 1,
          }}>
          <FontAwesomeIcon name="heart" color={'red'} size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalBarter(!modalBarter);
          }}
          style={{
            backgroundColor: '#2a9ee9',
            padding: 10,
            paddingVertical: 13,
            width: 300,
            borderRadius: 10,
          }}>
          <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
            Barter
          </Text>
        </TouchableOpacity>
      </View>
      {modalBarter && (
        <BottomSheet
          ref={bottomSheetRef}
          enablePanDownToClose={true}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View style={{flex: 1}}>
            <View style={{width: width, height: height - 200}}>
              <View style={{paddingHorizontal: 5}}>
                <Text>Whats your barter</Text>
                <Input placeholder={'Name'} />
                <Input placeholder={'Description'} />
                <TouchableOpacity
                  style={[
                    styles.shadow,
                    {
                      borderWidth: 1,
                      borderColor: '#0386D0',
                      width: 150,
                      padding: 10,
                      marginTop: 30,
                      borderRadius: 30,
                    },
                  ]}>
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: 'center',
                      color: '#0386D0',
                    }}>
                    Pick Image
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{width: width, height: 200,paddingHorizontal:20}}>
              <TouchableOpacity
                style={[
                  styles.shadow,
                  {
                    backgroundColor: '#0386D0',
                    padding: 10,
                    marginTop: 30,
                    borderRadius: 30,
                  },
                ]}>
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: 'center',
                    color: 'white',
                  }}>
                 Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: 10000,
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
    fontSize: 15,
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

export default ProductsDetail;
