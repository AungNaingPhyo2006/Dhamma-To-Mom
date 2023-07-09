import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  Pressable,
  ScrollView,
  ActivityIndicator,
  Linking,
  FlatList,
} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
// import DhammaList1 from './DhammaList1';
import {ArrowLeftCircle} from 'lucide-react-native';
import VideoPlayer from '../../utils/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {getYoutubeMeta} from 'react-native-youtube-iframe';
import YoutubePlayer from 'react-native-youtube-iframe';
import AppContext from '../../utils/AppContext';
import {convertMmDigit} from '../../utils/NumConverter';
import NetInfo from '@react-native-community/netinfo';
import RefreshIcon from '../../components/refresh/RefreshIcon';

const DhammaModal = ({setModalVisible, modalVisible}) => {
  // <============>
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [videoMeta, setVideoMeta] = useState([]);
  const [visibleVideoIndices, setVisibleVideoIndices] = useState([]);

  const {myData, setMyData, isOnline, setIsOnline} = useContext(AppContext);
  // console.log('medata', myData);
  //<======check online======>
  // console.warn(isOnline);
  useEffect(() => {
    checkInternetConnection();
  }, []);

  const checkInternetConnection = async () => {
    const netInfoState = await NetInfo.fetch();

    setIsOnline(netInfoState.isConnected);
  };
  // console.warn('hi', isOnline);
  const handleRefresh = () => {
    setModalVisible(!modalVisible);
    checkInternetConnection();
  };
  //<======check online======>

  // <====Open Youtube Link===>
  const handleOpenChannel = channelId => {
    const channelURL = `https://www.youtube.com/watch?v=${channelId}`;

    Linking.openURL(channelURL).catch(error => {
      console.log('Error opening YouTube channel:', error);
    });
  };
  // <====Open Youtube Link End===>

  useEffect(() => {
    const fetchVideoMeta = async () => {
      const metaPromises = myData?.map(async videoId => {
        const meta = await getYoutubeMeta(videoId);
        return meta;
      });
      const metaData = await Promise.all(metaPromises);
      setVideoMeta(metaData);
    };

    fetchVideoMeta();
  }, [myData]);

  // console.log('metadata Modal==>', videoMeta);
  const onStateChange = useCallback(
    state => {
      if (state === 'ended') {
        setPlaying(false);
        // Play the next video if available
        if (currentVideoIndex < myData.length - 1) {
          setCurrentVideoIndex(prevIndex => prevIndex + 1);
          setPlaying(true);
        }
      }
    },
    [currentVideoIndex, myData],
  );

  const togglePlaying = useCallback(() => {
    setPlaying(prevPlaying => !prevPlaying);
  }, []);

  const handleScroll = useCallback(
    event => {
      const {nativeEvent} = event;
      const contentOffsetY = nativeEvent.contentOffset.y;
      const contentHeight = nativeEvent.contentSize.height;
      const containerHeight = nativeEvent.layoutMeasurement.height;

      const visibleIndices = [];

      // Calculate the range of visible videos based on scroll position
      for (let i = 0; i < videoMeta.length; i++) {
        const itemOffset = i * 250; // Assuming each item has a fixed height of 250
        const itemHeight = 250;
        const itemEnd = itemOffset + itemHeight;

        if (
          itemOffset <= contentOffsetY + containerHeight &&
          itemEnd >= contentOffsetY
        ) {
          visibleIndices.push(i);
        }
      }

      setVisibleVideoIndices(visibleIndices);
    },
    [videoMeta],
  );
  // <===================>
  const renderItem = ({item, index}) => (
    <View style={styles.container} key={myData[index]}>
      <TouchableOpacity
        style={styles.txtContainer}
        onPress={() => handleOpenChannel(myData[index])}>
        <Image
          source={{uri: item.thumbnail_url}}
          style={{
            width: 160,
            height: 90,
            alignSelf: 'center',
            borderRadius: 10,
            borderWidth: 1.5,
            borderColor: '#fff',
            marginVertical: 4,
          }}
        />
        <Text style={styles.titleStyle}>
          ({convertMmDigit(index + 1)}) {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
  // <==============>
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      {isOnline ? (
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              data={videoMeta}
              renderItem={renderItem}
              keyExtractor={(item, index) => myData[index]}
            />

            {/* <================> */}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <ArrowLeftCircle
                size={35}
                color="#fff"
                style={{alignSelf: 'center'}}
              />
            </Pressable>
          </View>
        </View>
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <RefreshIcon handleRefresh={handleRefresh} />
        </View>
      )}
    </Modal>
  );
};

export default DhammaModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    flex: 1,
    backgroundColor: 'fuchsia',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    // height: '100%',
    paddingHorizontal: 12,
    paddingTop: 20,
    backgroundColor: 'fuchsia',
  },

  titleContainer: {
    // backgroundColor: '#5b28ae',
    // paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomEndRadius: 30,
    elevation: 6,
  },
  titleText: {
    color: 'white',
    fontSize: 16,
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
    // flexDirection: 'row',
    backgroundColor: 'blue',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  titleStyle: {
    color: 'white',
    fontSize: 16,
    // fontWeight: 'bold',
    fontFamily: 'Cherry_Unicode',
  },
});
