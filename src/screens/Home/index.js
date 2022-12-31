import {View, Text, ScrollView, RefreshControl, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Card from '../../components/Card';
import {useIsFocused} from '@react-navigation/native';
import {useSelector} from 'react-redux';
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Home = ({navigation}) => {
  const iseFocused = useIsFocused();

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const redirectToDetailsProduct = React.useCallback(product => {
    navigation.navigate('ProductDetail', {product});
  }, []);

  React.useEffect(() => {
    onRefresh();
  }, [iseFocused]);

  const {products} = useSelector(state => state.products);
  const {user} = useSelector(state => state.users);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.profileHeader}>
            <MaterialCommunityIcons
              name="face-man-profile"
              size={15}
              style={styles.iconHeader}
            />
            <Text>{user.name}</Text>
          </View>

          <View style={styles.profileHeader}>
            <Feather style={styles.iconHeader} name="search" size={15} />
            <Text>Search barter</Text>
          </View>
          <View style={styles.profileHeader}>
            <Feather style={[styles.iconHeader]} name="bell" size={15} />
            <Text>Notifications</Text>
          </View>
        </View>
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    padding: 4,
    paddingBottom: 0,
  },
  wrapper: {
    padding: 10,
    marginTop: 10,
    backgroundColor: 'white',
    borderColor: 'yellow',
    borderWidth: 1,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconHeader: {
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'orange',
    color: 'orange',
    borderRadius: 50,
    width: 37,
  },
  profileHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listProduct: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingBottom: 100,
  },
});

export default Home;
