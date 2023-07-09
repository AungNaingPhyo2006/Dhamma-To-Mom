import React, {useEffect, useRef} from 'react';

import {
  Button,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import {
  createDrawerNavigator,
  useDrawerStatus,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import HomeScreen from '../screens/home/HomeScreen';
import AssetSource from '../utils/AssetSource';
import GeneralScreen from '../screens/general/GeneralScreen';
import TellBeadsScreen from '../screens/tellbeads/TellBeadsScreen';
import DhammaList from '../screens/home/DhammaList';
import RefreshIcon from '../components/refresh/RefreshIcon';

const windowWidth = Dimensions.get('window').width;
// <========Custom Drawer Content Component====>
function CustomDrawerContent({navigation}) {
  return (
    <DrawerContentScrollView>
      <View>
        {/* <Text
          style={{
            padding: 16,
            fontWeight: 'bold',
            fontSize: 18,
            alignSelf: 'center',
          }}>
          My App Drawer
        </Text> */}
        <View style={{alignItems: 'center', marginVertical: 5}}>
          <Image
            source={AssetSource.buddha}
            style={{width: '70%', height: 250}}
          />
        </View>
        {/* Additional content for the drawer */}
        {/* Add your custom components or links here */}
        {/* Drawer labels */}
        <DrawerItem
          // label="တရားတော်များ"
          label={() => <Text style={styles.labelStyle}>တရားတော်များ</Text>}
          onPress={() => navigation.navigate('Home')}
        />
        <DrawerItem
          // label="ပုတီးစိပ်မည်"
          label={() => <Text style={styles.labelStyle}>ပုတီးစိပ်မည်</Text>}
          onPress={() => navigation.navigate('TellBeads')}
        />
        <DrawerItem
          // label="အထွေထွေ"
          label={() => <Text style={styles.labelStyle}>အထွေထွေ</Text>}
          onPress={() => navigation.navigate('General')}
        />
      </View>
    </DrawerContentScrollView>
  );
}
// <=============>

// function NotificationsScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       {/* <Button onPress={() => navigation.openDrawer()} title="open" /> */}
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  // <=========Animation========>
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
    // inputRange: [0, 0],
    // outputRange: ['0deg', '0deg'],
  });
  // <========>
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef', //Set Drawer background
            width: windowWidth * 0.8, // Set the Drawer width to 80% of the window width
            paddingTop: 12,
            paddingHorizontal: 12,
          },
          headerStyle: {
            backgroundColor: '#808000', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            // fontWeight: 'bold', //Set Header text style
            fontFamily: 'Notosan Myanmar UI Bold',
          },
          headerTitleAlign: 'center', // Center the header title
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <TouchableOpacity
                style={{paddingHorizontal: 34}}
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Animated.View style={{transform: [{rotate: spin}]}}>
                  <Image
                    source={AssetSource.wheel}
                    style={{width: 40, height: 40}}
                  />
                </Animated.View>
              </TouchableOpacity>
            );
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            // drawerLabel: 'My Home',
            title: 'တရားတော်များ',
          }}
        />
        <Drawer.Screen
          name="General"
          component={GeneralScreen}
          options={{
            title: 'အထွေထွေ',
          }}
        />
        <Drawer.Screen
          name="TellBeads"
          component={TellBeadsScreen}
          options={{
            title: 'ပုတီးစိပ်မည်',
          }}
        />
        <Drawer.Screen
          name="DhammaList"
          component={DhammaList}
          options={{
            title: 'တရားတော်များ',
          }}
        />
        <Drawer.Screen
          name="RefreshIcon"
          component={RefreshIcon}
          options={
            {
              // title: 'တရားတော်များ',
            }
          }
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MyDrawer;

const styles = StyleSheet.create({
  labelStyle: {
    color: 'purple',
    fontFamily: 'Notosan Myanmar UI Bold',
    fontSize: 16,
  },
});
