import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';

const Login = ({navigation}) => {
  const redirectToHome = () => {
    navigation.navigate('Public');
  };
  useEffect(() => {
    Dimensions.addEventListener('change', e => {
      const {height} = e.window;
      setfirst(height);
    });
  }, []);

  const [first, setfirst] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        style={[
          styles.shadow,
          {
            backgroundColor: '#0386D0',
            marginTop: 20,
          },
        ]}>
        <View
          style={[
            styles.form,
            styles.wrapper,
            styles.shadow,
            {
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              paddingBottom: 70,
            },
          ]}>
          <View style={[styles.center]}>
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
          </View>
          <View>
            <Input placeholder={'Email Address'} />
            <Input
              placeholder={'Password'}
              icon={
                <MaterialCommunityIcons
                  name="eye"
                  backgroundColor="#3b5998"
                  size={20}
                />
              }
            />
          </View>
          <View style={styles.menus}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
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
          <View
            style={[
              styles.menus,
              {marginTop: -85, paddingHorizontal: 25, height: 140},
            ]}>
            <Button color="white" colorText="skyblue" onPress={redirectToHome}>
              Sign In
            </Button>
            <Button>Sign Up</Button>
          </View>
          <View style={[styles.center, {marginTop: 10, paddingBottom: 10}]}>
            <Text>Or connect with</Text>
            <View>
              <Button
                color="white"
                colorText="#FF591D"
                icon={
                  <MaterialCommunityIcons
                    name="google"
                    backgroundColor="#3b5998"
                    size={18}
                  />
                }>
                Login with Google
              </Button>
              <Button
                color="#2a9ee9"
                colorText="white"
                icon={
                  <MaterialCommunityIcons
                    name="facebook"
                    backgroundColor="#3b5998"
                    size={20}
                  />
                }>
                Login with facebook
              </Button>
              <Button
                color="black"
                colorText="white"
                icon={
                  <MaterialCommunityIcons
                    name="github"
                    backgroundColor="#3b5998"
                    size={20}
                  />
                }>
                Login with Github
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
