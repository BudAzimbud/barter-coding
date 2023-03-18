import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import {getProfile} from '../../redux/reducer/profile/profile.action';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const profileResponse = useSelector(state => state.profile.profileResponse[0]);
  console.log('iki profile', profileResponse)
  useEffect(() => {
    dispatch(getProfile());
    return () => {};
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.shadow, styles.containerProfile]}>
        <TouchableOpacity>
          <Image
            source={{
              uri: profileResponse?.image,
            }}
            style={styles.imageProfile}
          />
        </TouchableOpacity>

        <Text style={styles.name}>{profileResponse?.name}</Text>
        <Text>{profileResponse?.member}</Text>
      </View>
      <View style={[styles.containerMenu, styles.shadow]}>
        {['Information', 'Devices Access', 'Help', 'Security', 'Exit'].map(
          menu => {
            return (
              <TouchableOpacity key={menu}>
                <Text style={styles.textMenu}>{menu}</Text>
              </TouchableOpacity>
            );
          },
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
