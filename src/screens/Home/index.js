import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  FlatList,
  Alert,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import React, {useCallback} from 'react';
import Card from '../../components/Card';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useNavigation from './hooks/useNavigation';
import {getProduct} from '../../redux/reducer/products/products.action';
getProduct;

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {products, loading} = useSelector(state => state.products);
  const insets = useSafeAreaInsets();

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
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/34/83/79/3483794198b80fc3746a76760cde6966.jpg',
            }}
            style={styles.banner}
          />
          <View style={{display: 'flex', alignItems: 'center'}}>
            <View style={[styles.bannerMenu, styles.shadow]}>
              <Text style={{flex: 1}}>Barang Saya</Text>
              <Text style={{flex: 1}}>Transaksi Saya</Text>
            </View>
          </View>
        </View>

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
    </ScrollView>
  );
};

export default Home;
