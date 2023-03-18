import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
  Alert,
  SafeAreaView,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useCallback} from 'react';
import Card from '../../components/Card';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import useNavigation from './hooks/useNavigation';
import {getProduct} from '../../redux/reducer/products/products.action';
import Feather from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {products, loading} = useSelector(state => state.products);

  useFocusEffect(
    useCallback(() => {
      dispatch(getProduct({limit: 20, page: 20}));
      onRefresh();
      return () => {};
    }, [dispatch, onRefresh]),
  );

  const onRefresh = useCallback(() => {
    dispatch(getProduct({limit: 20, page: 20}));
  }, [dispatch]);

  const {redirectToDetailsProduct} = useNavigation(navigation);

  return (
    <View>
      <View style={styles.navbar}>
        <TouchableHighlight>
          <Feather size={30} color="white" name="search" />
        </TouchableHighlight>
        <TouchableHighlight color="transparent">
          <Feather size={30} color="white" name="bell" />
        </TouchableHighlight>
      </View>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View>
            <Image
              source={{
                uri: 'https://img.freepik.com/premium-vector/handshaking-businessmen-after-success-deal-vector-businesspeople-handshaking-together-successful-signed-agreement-characters-business-partnership-cooperation-flat-cartoon-illustration_87720-5063.jpg',
              }}
              style={styles.banner}
            />
            <View style={{display: 'flex', alignItems: 'center'}}>
              <View style={[styles.bannerMenu, styles.shadow]}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Feather name="gift" color="red" size={30} />
                  <Text style={{textAlign: 'center'}}>Gift</Text>
                </View>
              
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Feather name="list" color="blue" size={30} />
                  <Text style={{textAlign: 'center'}}>Post</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.wrapper]}>
            <FlatList
              numColumns={2}
              data={products}
              keyExtractor={item => item.id}
              horizontal={false}
              style={{paddingBottom: 50}}
              refreshControl={
                <RefreshControl refreshing={loading} onRefresh={onRefresh} />
              }
              renderItem={({item}) => (
                <Card
                  onPress={() => redirectToDetailsProduct(item)}
                  data={item}
                  numColumns={2}
                />
              )}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Home;
