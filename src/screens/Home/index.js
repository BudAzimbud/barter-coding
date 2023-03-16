import {View, Text, ScrollView, RefreshControl, StyleSheet} from 'react-native';
import React from 'react';
import Card from '../../components/Card';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import useNavigation from './hooks/useNavigation';
import { getProduct } from '../../redux/reducer/products/products.action';
getProduct
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Home = ({navigation}) => {

  const dispatch = useDispatch()

  const [refreshing, setRefreshing] = React.useState(false);
  const {products} = useSelector(state => state.products);

  const {redirectToDetailsProduct} = useNavigation(navigation);

  const iseFocused = useIsFocused();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);


  React.useEffect(() => {
    dispatch(getProduct())
    onRefresh();
  }, [iseFocused]);

  return (
    <View style={styles.container}>
      
      <ScrollView
        style={[styles.wrapper]}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text>See top list {'>'}</Text>
        <View style={styles.listProduct}>
          {products.map((data, idx) => (
            <Card
              onPress={() => redirectToDetailsProduct(data)}
              data={data}
              key={idx}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
