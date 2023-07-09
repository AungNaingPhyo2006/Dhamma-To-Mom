import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Platform, NativeModules} from 'react-native';
import {isUnicode} from 'react-native-mdetect';
import Rabbit from 'rabbit-node';
import {convertUnicodeToZawgyi, convertZawgyiToUnicode} from './FontConverter';

const MDetect = () => {
  const zawgyi = `မင္းကလြဲရင္ ကိုယ္မခ်စ္ဘူး`;
  const unicode = `မင်းကလွဲရင် ကိုယ်မချစ်ဘူး`;

  return (
    <View>
      <Text>MDetect</Text>
      {isUnicode ? (
        <View>
          <Text> Zawgyi to unicode:{convertZawgyiToUnicode(zawgyi)}</Text>
          <Text> Unicode to Zawgyi:{convertUnicodeToZawgyi(unicode)}</Text>
        </View>
      ) : (
        <Text>I am Zaw</Text>
      )}
    </View>
  );
};

export default MDetect;

const styles = StyleSheet.create({});
