import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
  Image,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import RefreshIcon from '../../components/refresh/RefreshIcon';
import VideoPlayer from '../../utils/VideoPlayer';
import Youtube from '../../utils/Youtube';
import AppContext from '../../utils/AppContext';
import AssetResource from '../../utils/AssetSource';
const DhammaList = ({navigation, route}) => {
  const {data} = route?.params;
  const {myData, setMyData} = useContext(AppContext);

  console.log('mydata==>', myData);

  // <=======Check internet connection=======>
  const [isOnline, setIsOnline] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // <====Open Youtube Link===>
  const handleOpenChannel = channelId => {
    const channelURL = `https://www.youtube.com/watch?v=${channelId}`;

    Linking.openURL(channelURL).catch(error => {
      console.log('Error opening YouTube channel:', error);
    });
  };
  // <====Open Youtube Link End===>

  useEffect(() => {
    checkInternetConnection();
  }, []);
  // <==================>
  const checkInternetConnection = async () => {
    const netInfoState = await NetInfo.fetch();
    setIsOnline(netInfoState.isConnected);
  };

  const handleRefresh = () => {
    // setIsLoading(false);
    checkInternetConnection();
  };

  // if (isLoading) {
  //   return (
  //     <View style={styles.loadingContainer}>
  //       <ActivityIndicator size="large" color="blue" />
  //     </View>
  //   );
  // }

  // <===================>

  // <===================>
  return (
    <View>
      {isOnline ? (
        <>
          {/* <VideoPlayer videoIds={data} navigation={navigation} /> */}
          {data?.map((channelId, index) => (
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.txtContainer}
                key={index}
                onPress={() => handleOpenChannel(channelId)}>
                <Text style={{color: 'white'}}>Video {index + 1}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </>
      ) : (
        <RefreshIcon handleRefresh={handleRefresh} />
      )}
    </View>
  );
};

export default DhammaList;

const styles = StyleSheet.create({
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
    paddingVertical: 12,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    // borderColor: 'blue',
  },
});
