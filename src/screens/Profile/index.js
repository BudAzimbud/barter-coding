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


const menus = [
  {
    label: 'Information',
    navigation: 'Information',
  },
  {
    label: 'Devices Access',
    navigation: 'Android',
  },
  {
    label: 'Help',
    navigation: 'Help',
  },
  {
    label: 'Security',
    navigation: 'Security',
  },
  {
    label: 'Exit',
    navigation: 'Login',
  },
];

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const profileResponse = useSelector(
    state => state.profile.profileResponse[0],
  );
  console.log('iki profile', profileResponse);
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
        {menus.map(
          menu => {
            return (
              <TouchableOpacity key={menu.navigation} onPress={()=>navigation.navigate(menu.navigation)} key={menu}>
                <Text style={styles.textMenu}>{menu.label}</Text>
              </TouchableOpacity>
            );
          },
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
