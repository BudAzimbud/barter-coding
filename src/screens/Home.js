import {View, Text, ScrollView, RefreshControl, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUsers} from '../redux/reducer/user/userSlicer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Card from '../components/Card';
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Home = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);
  const {user} = useSelector(state => state.users);
  useEffect(() => {
    dispatch(
      setUsers({
        name: 'Azim Sucipta',
      }),
    );
  }, []);

  useEffect(() => {
    console.log(products);
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.profileHeader}>
            <MaterialCommunityIcons
              color={'orange'}
              name="face-man-profile"
              size={24}
            />
            <Text style={{color: 'orange'}}>{user.name}</Text>
          </View>
          <View style={styles.profileHeader}>
            <MaterialCommunityIcons
              style={[styles.searchIcon, {marginTop: -8, borderColor: 'red'}]}
              color="red"
              name="help"
              size={15}
            />
            <Text>Help Center</Text>
          </View>
          <View style={styles.profileHeader}>
            <Feather style={styles.searchIcon} name="search" size={15} />
            <Text>Search barter</Text>
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
            <Card data={data} key={idx} />
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
  searchIcon: {
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 0.5,
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
