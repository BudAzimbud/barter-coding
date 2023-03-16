import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  FlatList,
  Alert,
  SafeAreaView,
} from 'react-native';
import React, {useCallback} from 'react';
import Card from '../../components/Card';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import useNavigation from './hooks/useNavigation';
import {getProduct} from '../../redux/reducer/products/products.action';
getProduct;

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
    <SafeAreaView style={styles.container}>
      <View style={[styles.wrapper]}>
        <Text>See top list {'>'}</Text>
        <FlatList
          numColumns={2}
          data={products}
          keyExtractor={item => item.id}
          horizontal={false}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={onRefresh} />
          }
          onEndReached={() => {
            dispatch(getProduct({limit: 20, page: 20}));
          }}
          onEndReachedThreshold={0.01}
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
  );
};

export default Home;
