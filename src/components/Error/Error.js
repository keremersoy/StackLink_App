import React from 'react';
import {View} from 'react-native';
import styles from './Error.style';
import AnimatedLottieView from 'lottie-react-native';

const Error = () => {
  return (
    <View style={styles.container}>
        <AnimatedLottieView
          source={require('../../assets/error.json')}
          autoPlay
        />
    </View>
  );
};

export default Error;
