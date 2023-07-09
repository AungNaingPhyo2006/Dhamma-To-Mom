// import {StyleSheet, Text, View, Button} from 'react-native';
// import React from 'react';

// const HomeScreen = ({navigation}) => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'pink',
//       }}>
//       {/* <Button onPress={() => navigation.openDrawer()} title="open" /> */}
//       {/* <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       /> */}
//       {/* <==================> */}
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({});
// <====================>

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  Pressable,
  Animated,
  Easing,
  ScrollView,
  Linking,
} from 'react-native';
import React, {useState, useEffect, useRef, useContext} from 'react';
import AssetResource from '../../utils/AssetSource';

import {
  videoId1,
  videoId2,
  videoId3,
  videoId4,
  videoId5,
  videoId6,
  videoId7,
  videoId8,
  videoId9,
  videoId10,
  videoId11,
  videoId12,
  videoId13,
} from '../../utils/VideoData';

import {convertMmDigit} from '../../utils/NumConverter';
import AppContext from '../../utils/AppContext';
import DhammaModal from './DhammaModal';
import AssetSource from '../../utils/AssetSource';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState(null);
  const {myData, setMyData, modalVisible, setModalVisible} =
    useContext(AppContext);

  // console.log('vidData==>', data);
  const toggleVisible = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.centeredView}>
      <DhammaModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        videoIds={myData}
      />
      {/* <========modal end=======> */}

      <ScrollView
        style={{
          flex: 1,
          marginVertical: 10,
          marginHorizontal: 10,
          borderRadius: 30,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.sayadaw1} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              setMyData(videoId1);
              toggleVisible();
              setModalVisible(!modalVisible);
              // navigation.navigate('DhammaList', {data: myData});
              // handleOpenChannel('m_dDtEL5nyU');
            }}>
            <Text style={styles.txtStyle}>
              ဖားအောက်တောရ ဆရာတော်({convertMmDigit(videoId1.length)})
            </Text>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.sayadaw9} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              setMyData(videoId11);
              toggleVisible();
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.txtStyle}>
              မြောက်ဦး ဆရာတော်({convertMmDigit(videoId11.length)})
            </Text>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.sayadaw3} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              setMyData(videoId2);
              toggleVisible();
              setModalVisible(!modalVisible);
              // navigation.navigate('DhammaList', {data: myData});
            }}>
            <Text style={styles.txtStyle}>
              ပါမောက္ခချုပ် ဆရာတော်({convertMmDigit(videoId2.length)})
            </Text>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.sayadaw2} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              setMyData(videoId3);
              toggleVisible();
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.txtStyle}>
              သီတဂူ ဆရာတော်({convertMmDigit(videoId3.length)})
            </Text>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.sayadaw6} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              setMyData(videoId6);
              toggleVisible();
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.txtStyle}>
              ဖြူး ဆရာတော်({convertMmDigit(videoId6.length)})
            </Text>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.sayadaw8} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              setMyData(videoId10);
              toggleVisible();
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.txtStyle}>
              ဓမ္မရံသီဆရာတော်({convertMmDigit(videoId10.length)})
            </Text>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.sayadaw5} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              setMyData(videoId7);
              toggleVisible();
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.txtStyle}>
              ဆရာတော် ဦးဇောတိက({convertMmDigit(videoId7.length)})
            </Text>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.sayadaw4} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              setMyData(videoId8);
              toggleVisible();
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.txtStyle}>
              သစ္စာရွှေစည် ဆရာတော်({convertMmDigit(videoId8.length)})
            </Text>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.sayadaw7} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              setMyData(videoId9);
              toggleVisible();
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.txtStyle}>
              ချမ်းမြေ့ရိပ်မြိုင် ဆရာတော်({convertMmDigit(videoId9.length)})
            </Text>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.sayadaw11} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              setMyData(videoId13);
              toggleVisible();
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.txtStyle}>
              ဆရာတော်ဦးပုညာနန္ဒ({convertMmDigit(videoId13.length)})
            </Text>
          </TouchableOpacity>
        </View>
        {/* <====================> */}

        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.sayadaw10} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              setMyData(videoId12);
              toggleVisible();
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.txtStyle}>
              မဇ္ဈိမဂုဏ်ရည် ဆရာတော်({convertMmDigit(videoId12.length)})
            </Text>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.sayadaw12} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              setMyData(videoId4);
              toggleVisible();
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.txtStyle}>
              ကြာနီကန် ဆရာတော်({convertMmDigit(videoId4.length)})
            </Text>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.sayadaw13} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              setMyData(videoId5);
              toggleVisible();
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.txtStyle}>
              ဆရာတော် ဦးသုမင်္ဂလ({convertMmDigit(videoId5.length)})
            </Text>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'violet',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'violet',
    paddingVertical: 9,
    paddingHorizontal: 9,
  },

  imgContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    // backgroundColor: 'blue',
    marginHorizontal: 9,
  },
  txtContainer: {
    flex: 1,
    backgroundColor: 'blue',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    // borderColor: 'blue',
  },
  txtStyle: {
    color: '#fff',
    fontFamily: 'Notosan Myanmar UI Bold',
  },
});
