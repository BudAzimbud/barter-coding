import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import styles from './style';
import {getProduct} from '../../redux/reducer/products/products.action';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();

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

  return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.shadow,styles.containerProfile]}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://i.pinimg.com/originals/34/83/79/3483794198b80fc3746a76760cde6966.jpg',
              }}
              style={styles.imageProfile}
            />
          </TouchableOpacity>

          <Text style={styles.name}>Azim Ganteng</Text>
        </View>
        <View style={[styles.containerMenu, styles.shadow]}>
          {['Information', 'Devices Access','Help', 'Security', 'Exit'].map(menu => {
            return (
              <TouchableOpacity key={menu}>
                <Text style={styles.textMenu}>{menu}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
  );
};

export default Profile;
