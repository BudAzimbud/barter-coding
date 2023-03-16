import {View, Text, ScrollView, RefreshControl, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Card from '../../components/Card';
import {useIsFocused} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import styles from './style';
import useNavigation from './hooks/useNavigation';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Home = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const {products} = useSelector(state => state.products);
  const {user} = useSelector(state => state.users);

  const {redirectToDetailsProduct} = useNavigation(navigation);

  const iseFocused = useIsFocused();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);


  React.useEffect(() => {
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
