import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import DhammaModal from '../home/DhammaModal';
import AppContext from '../../utils/AppContext';
import {dawKhinHlaTin, homeVideo, shortIds} from '../../utils/VideoData';
import AssetResource from '../../utils/AssetSource';
import {convertMmDigit} from '../../utils/NumConverter';
const General = navigation => {
  const {myData, setMyData, modalVisible, setModalVisible} =
    useContext(AppContext);

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
            <Image
              source={AssetResource.dhammaWheel}
              style={styles.imageStyle}
            />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              setMyData(shortIds);
              toggleVisible();
              setModalVisible(!modalVisible);
              // navigation.navigate('DhammaList', {data: myData});
              // handleOpenChannel('m_dDtEL5nyU');
            }}>
            <Text style={styles.txtStyle}>
              တိုတိုထွာထွာ တရားတော်များ({convertMmDigit(shortIds.length)})
            </Text>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              source={AssetResource.dhammaWheel}
              style={styles.imageStyle}
            />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              setMyData(homeVideo);
              toggleVisible();
              setModalVisible(!modalVisible);
              // navigation.navigate('DhammaList', {data: myData});
              // handleOpenChannel('m_dDtEL5nyU');
            }}>
            <Text style={styles.txtStyle}>
              ပဌာန်း တရားတော်များ ({convertMmDigit(homeVideo.length)})
            </Text>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              source={AssetResource.dhammaWheel}
              style={styles.imageStyle}
            />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              setMyData(dawKhinHlaTin);
              toggleVisible();
              setModalVisible(!modalVisible);
              // navigation.navigate('DhammaList', {data: myData});
              // handleOpenChannel('m_dDtEL5nyU');
            }}>
            <Text style={styles.txtStyle}>
              သုတ ဓမ္မ ({convertMmDigit(dawKhinHlaTin.length)})
            </Text>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
      </ScrollView>
    </View>
  );
};

export default General;

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
