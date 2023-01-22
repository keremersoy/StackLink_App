import React from 'react';
import {View} from 'react-native';
import styles from './Loading.style';
import AnimatedLottieView from 'lottie-react-native';

const Loading = ({type}) => {
  return (
    <View style={styles.container}>
      {type == 'question' ? (
        <AnimatedLottieView
          source={require('../../assets/questionLoad.json')}
          autoPlay
        />
      ) : (
        <AnimatedLottieView
          source={require('../../assets/teamLoad.json')}
          autoPlay
        />
      )}
    </View>
  );
};

export default Loading;
