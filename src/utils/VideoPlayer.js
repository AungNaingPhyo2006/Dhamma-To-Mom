import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {getYoutubeMeta} from 'react-native-youtube-iframe';

const VideoPlayer = ({navigation, videoIds}) => {
  console.log('videoPlayer Id==>', videoIds);
  if (videoIds === null) {
    return (
      <View style={{height: '100%', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="blue" />
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 12,
            marginHorizontal: 30,
            paddingVertical: 12,
            backgroundColor: 'pink',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{color: 'blue'}}>ကျေးဇူးပြု၍ ပြန်ကြိုးစားပါ။</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [videoMeta, setVideoMeta] = useState([]);
  const [visibleVideoIndices, setVisibleVideoIndices] = useState([]);

  useEffect(() => {
    const fetchVideoMeta = async () => {
      const metaPromises = videoIds.map(async videoId => {
        const meta = await getYoutubeMeta(videoId);
        return meta;
      });
      const metaData = await Promise.all(metaPromises);
      setVideoMeta(metaData);
    };

    fetchVideoMeta();
  }, [videoIds]);

  const onStateChange = useCallback(
    state => {
      if (state === 'ended') {
        setPlaying(false);
        // Play the next video if available
        if (currentVideoIndex < videoIds.length - 1) {
          setCurrentVideoIndex(prevIndex => prevIndex + 1);
          setPlaying(true);
        }
      }
    },
    [currentVideoIndex, videoIds],
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

  return (
    <ScrollView style={styles.container} onScroll={handleScroll}>
      {videoMeta?.map((meta, index) => (
        <View key={videoIds[index]} style={styles.videoContainer}>
          <YoutubePlayer
            height={200}
            videoId={videoIds[index]}
            play={playing && currentVideoIndex === index}
            onChangeState={onStateChange}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{meta.title}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    paddingHorizontal: 12,
    paddingTop: 20,
    backgroundColor: 'fuchsia',
  },
  videoContainer: {
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: '#5b28ae',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomEndRadius: 30,
    elevation: 6,
  },
  titleText: {
    color: 'white',
    fontSize: 16,
  },
});
