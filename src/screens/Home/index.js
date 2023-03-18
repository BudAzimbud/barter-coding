import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useCallback} from 'react';
import Card from '../../components/Card';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import useNavigation from './hooks/useNavigation';
import {getProduct} from '../../redux/reducer/products/products.action';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

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
              <View style={{flex: 1, alignItems: 'center'}}>
                <Feather name="gift" color="red" size={30} />
                <Text style={{textAlign: 'center'}}>Gift</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center', backgroundColor:'white',padding:2,borderRadius:10}}>
                <Feather name="dollar-sign" color="green" size={40} />
                <Text style={{textAlign: 'center'}}>Transaction</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                  <Feather name="list" color="blue" size={30} />
                  <Text style={{textAlign: 'center'}}>Post</Text>
                </View>
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
  );
};

export default Home;
