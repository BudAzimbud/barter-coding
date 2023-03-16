import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import React from 'react';
import Card from '../../components/Card';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import useNavigation from './hooks/useNavigation';
import {getProduct} from '../../redux/reducer/products/products.action';
getProduct;

const Home = ({navigation}) => {

  const dispatch = useDispatch();
  const {products, loading} = useSelector(state => state.products);

  const iseFocused = useIsFocused();

  React.useEffect(() => {
    dispatch(getProduct({limit: 20, page: 20}));
    onRefresh();
  }, [iseFocused]);

  const onRefresh = React.useCallback(() => {
    dispatch(getProduct({limit: 20, page: 20}));
  }, []);

  const {redirectToDetailsProduct} = useNavigation(navigation);

  return (
    <View style={styles.container}>
      <View style={[styles.wrapper]}>
        <Text>See top list {'>'}</Text>
        <FlatList
          numColumns={2}
          data={products}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listProduct}
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
    </View>
  );
};

export default Home;
