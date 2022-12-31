import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';

const ProductsDetail = ({route}) => {
  const {product} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={[styles.heroContainer]}>
          <Avatar.Image
            style={styles.heroImage}
            source={{uri: product?.image}}
            size={300}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  center: {
    alignItems: 'center',
  },
  heroContainer: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 10000,
    width: 304,
    height: 304,
    borderColor: 'orange',
    borderWidth: 4,
    borderTopWidth: 0,
    borderStartWidth: 0.5,
    borderEndWidth: 0.5,
  },
});

export default ProductsDetail;
