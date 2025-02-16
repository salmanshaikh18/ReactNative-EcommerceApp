import {View, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {screenHeight, screenWidth} from '@utils/Constants';
import {resetAndNavigate} from '@navigation/NavigationUtil';

const Splash = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resetAndNavigate('Home');
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('@assets/images/logo_t.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'salmon',
  },
  image: {
    width: screenWidth * 0.35,
    height: screenHeight * 0.35,
    resizeMode: 'contain',
  },
});

export default Splash;
