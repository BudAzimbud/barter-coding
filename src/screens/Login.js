import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import CheckBox from '@react-native-community/checkbox';
import Button from '../components/Button';
const Login = () => {
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
              marginBottom: 3,
            },
          ]}>
          <View style={[styles.menus, {marginTop: -70, paddingHorizontal: 25}]}>
            <Button>Login</Button>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    padding: 8,
  },
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 20,
    borderColor: 'rgba(243, 217, 173, 0.86)',
    borderWidth: 2,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    height: '100%',
  },
  shadow: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  form: {
    paddingHorizontal: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: 100,
    height: 100,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    lineHeight: 30,
  },
  titleImage: {
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: 100,
    height: 100,
  },
  textLogin: {
    color: '#FF591D',
    fontSize: 21,
    fontWeight: '400',
  },
  menus: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Login;