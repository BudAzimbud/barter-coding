import {View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUsers} from '../redux/reducer/user/userSlicer';

const Home = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.users);
  useEffect(() => {
    console.log('dispatch set user');
    dispatch(
      setUsers({
        name: 'Azim Sucipta',
      }),
    );
  }, []);

  useEffect(() => {
    console.log(user);
  }, [dispatch]);

  return (
    <ScrollView
      style={{
        backgroundColor: 'orange',
        flex: 1,
        padding: 8,
        paddingBottom: 0,
      }}>
      <View style={{backgroundColor: 'white'}}>
        <Text>Home</Text>
      </View>
    </ScrollView>
  );
};

export default Home;
