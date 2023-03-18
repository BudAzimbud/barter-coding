import {View, Text, Dimensions} from 'react-native';
import React, {useRef, useMemo, useCallback} from 'react';
import {Avatar} from 'react-native-paper';
import StarRating from 'react-native-star-rating-widget';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import BottomSheet from '@gorhom/bottom-sheet';
import {useState} from 'react';
import Input from '../../components/Input';
import {styles} from './style';
var {width, height} = Dimensions.get('window');

const Post = () => {
  const bottomSheetRef = useRef();
  const snapPoints = useMemo(() => ['100%', '100%'], []);
  const handleSheetChanges = useCallback(index => {
   
  }, []);
  return (
    <View style={styles.container}>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View style={{flex: 1}}>
            <View style={{width: width, height: height - 200}}>
              <View style={{paddingHorizontal: 5}}>
                <Text>Whats your barter</Text>
                <Input placeholder={'Name'} />
                <Input placeholder={'Description'} />
                <Input placeholder={'Tags'} />
                <TouchableOpacity
                  style={[
                    styles.shadow,
                    {
                      borderWidth: 1,
                      borderColor: '#0386D0',
                      width: 150,
                      padding: 10,
                      marginTop: 30,
                      borderRadius: 30,
                    },
                  ]}>
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: 'center',
                      color: '#0386D0',
                    }}>
                    Pick Image
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{width: width, height: 200, paddingHorizontal: 20}}>
              <TouchableOpacity
                style={[
                  styles.shadow,
                  {
                    backgroundColor: '#0386D0',
                    padding: 10,
                    marginTop: 30,
                    borderRadius: 30,
                  },
                ]}>
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: 'center',
                    color: 'white',
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
    </View>
  );
};
export default Post;
