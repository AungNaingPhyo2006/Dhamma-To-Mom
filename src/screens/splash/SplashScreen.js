import {StyleSheet, Text, View, Animated, Image} from 'react-native';
import React, {useEffect, useRef} from 'react';
import AssetSource from '../../utils/AssetSource';

const SplashScreen = () => {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  // <======dancing text end=======>
  const translateY = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
    // <===== dancing text end=======>
    Animated.timing(translateY, {
      toValue: 0,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <Animated.View
        style={{
          transform: [{translateY}],
          // transform: [{scale}],
          // opacity,
        }}>
        <Image
          source={AssetSource.mom}
          style={{
            width: 90,
            height: 90,
            borderRadius: 50,
            borderColor: '#fff',
            borderWidth: 2,
          }}
        />
      </Animated.View> */}
      <Animated.Text
        style={{
          fontSize: 18,
          color: '#fff',
          fontWeight: 'bold',
          transform: [{translateY}],
          // transform: [{scale}],
          // opacity,
        }}>
        Daw Khin Nyo Win
      </Animated.Text>
      <Animated.Text
        style={{
          fontSize: 14,
          color: 'pink',
          fontWeight: 'bold',
          marginVertical: 18,
          transform: [{scale}],
          opacity,
        }}>
        စိန်ရတု အကြို မွေးနေ့ အမှတ်တရ
      </Animated.Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
