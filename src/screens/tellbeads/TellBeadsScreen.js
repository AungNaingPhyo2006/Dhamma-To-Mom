import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {convertMmDigit} from '../../utils/NumConverter';
import {isUnicode} from 'react-native-mdetect';
import {
  convertUnicodeToZawgyi,
  convertZawgyiToUnicode,
} from '../../utils/FontConverter';

const TellBeads = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <View style={styles.centeredView}>
      <View style={styles.subView}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              paddingVertical: 15,
              width: '60%',
              height: '15%',
              marginVertical: '5%',
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              elevation: 9,
            }}>
            <Text
              style={{
                color: 'blue',
                fontSize: 18,
                fontFamily: 'Notosan Myanmar UI Bold',
              }}>
              {convertMmDigit(count)} - ပတ်
            </Text>
          </View>
          <Pressable
            style={{
              backgroundColor: '#24a0ed',
              padding: 6,
              marginVertical: 9,
              borderRadius: 5,
            }}
            onPress={() => {
              setCount(0);
            }}>
            <Text style={{color: 'white', fontFamily: 'Cherry_Unicode'}}>
              ပြန်စမည်
            </Text>
          </Pressable>
          <TouchableOpacity
            style={{
              backgroundColor: 'pink',
              width: 270,
              height: 270,
              borderRadius: 150,
              borderColor: 'white',
              borderWidth: 6,
            }}
            onPress={increment}></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TellBeads;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  subView: {
    flex: 1,
    backgroundColor: '#50C878',
  },
});
