import {Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Youtube = ({videoId}) => {
  const openYouTubeVideo = () => {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    Linking.openURL(url);
  };
  return (
    <View>
      <Text>Youtube</Text>
    </View>
  );
};

export default Youtube;

const styles = StyleSheet.create({});
