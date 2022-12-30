import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Input from '../../../components/Input';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../../components/Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './Style';
const Login = ({navigation}) => {
  const redirectToHome = () => {
    navigation.navigate('Public');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={[styles.shadow, {backgroundColor: 'orange', paddinBottom: 100}]}>
        <View
          style={[
            styles.form,
            styles.wrapper,
            styles.shadow,
            {
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              paddingBottom: 70,
              marginTop: 5,
            },
          ]}>
          <View style={styles.center}>
            <Image
              source={{
                uri: 'https://img.freepik.com/premium-vector/handshaking-businessmen-after-success-deal-vector-businesspeople-handshaking-together-successful-signed-agreement-characters-business-partnership-cooperation-flat-cartoon-illustration_87720-5063.jpg',
              }}
              style={styles.heroImage}
            />
          </View>
          <View style={styles.title}>
            <View>
              <Text style={styles.textLogin}>Login</Text>
              <Text style={{color: '#6B5E5E'}}>
                By signing in you are agreeing
              </Text>
              <Text style={{color: '#0386D0'}}>Term and Privacy policy</Text>
            </View>
            <Image
              style={[styles.titleImage, styles.shadow]}
              source={{
                uri: 'https://i.pinimg.com/originals/84/dd/92/84dd92604cba7d058dab8ce76323c0c7.jpg',
              }}
            />
          </View>
          <View>
            <Input placeholder={'Email Address'} />
            <Input placeholder={'Password'} />
          </View>
          <View style={styles.menus}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                tintColors={{true: 'blue', false: 'black'}}
                value={true}
              />
              <Text>Remember Password</Text>
            </View>
            <TouchableOpacity>
              <Text style={{fontWeight: '400', fontSize: 14, color: '#4D7EF9'}}>
                Forget Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            styles.form,
            styles.wrapper,
            {
              borderTopLeftRadius: 100,
              borderTopRightRadius: 100,
              paddingTop: 50,
              marginTop: -40,
              paddingBottom: 50,
            },
          ]}>
          <View style={[styles.menus, {marginTop: -70, paddingHorizontal: 25}]}>
            <Button onPress={redirectToHome}>Login</Button>
            <Button color="white" colorText="red">
              Register
            </Button>
          </View>
          <View style={[styles.center, {marginTop: 10, paddingBottom: 10}]}>
            <Text>Or connect with</Text>
            <View>
              <Button color="white" colorText="#747070">
                Login with facebook
              </Button>
              <Button color="white" colorText="#747070">
                Login with Instagram
              </Button>
              <Button color="white" colorText="#747070">
                Login with Linkedin
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
