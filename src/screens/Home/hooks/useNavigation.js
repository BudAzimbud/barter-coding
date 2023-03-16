import React from 'react';

function useNavigation(navigation) {
    
  const redirectToDetailsProduct = React.useCallback(product => {
    navigation.navigate('ProductDetail', {product});
  }, []);

  return {
    redirectToDetailsProduct,
  };
}

export default useNavigation;
