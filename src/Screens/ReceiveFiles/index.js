import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Image, FlatList} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Loading from '../../assets/loading.gif';
import {PermissionsAndroid} from 'react-native';
import WifiManager from 'react-native-wifi-reborn';
import WifiListComponent from '../../Components/WifiListComponent';
const ReceiveFiles = props => {
  const [showText, setShowText] = useState(false);
  const [wifiList, setWifiList] = useState([]);
  const [showAvailableWifi, setShowAvailableWifi] = useState(false);
  const searchForHotSpots = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location permission is required for WiFi connections',
        message:
          'This app needs location permission as this is required  ' +
          'to scan for wifi networks.',
        buttonNegative: 'DENY',
        buttonPositive: 'ALLOW',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // You can now use react-native-wifi-reborn
      setShowText(!showText);
      WifiManager.loadWifiList().then(
        wifilist => {
          setWifiList(wifilist);
          setShowAvailableWifi(true);
        },
        () => {
          console.log('Cannot get current wifi list');
        },
      );
    } else {
      // Permission denied
    }
  };
  return (
    <LinearGradient colors={['#b06ab3', '#4568dc']} style={styles.container}>
      <LinearGradient
        colors={['#22a4ef', '#4568dc']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.btnCont}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            searchForHotSpots();
          }}>
          <Text style={styles.btnText}>
            {!showText ? "Search For Available HotSpot's" : 'Cancle Searching'}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      {showText && !showAvailableWifi ? (
        <View style={styles.loaderCont}>
          <Text style={styles.loaderText}>Searching...</Text>
          <Image source={Loading} style={styles.loaderGif} />
        </View>
      ) : null}
      {showAvailableWifi && wifiList ? (
        <View>
          <Text> Currently Available Wifi's</Text>
          <FlatList
            data={wifiList}
            renderItem={({item}) => {
              return <WifiListComponent data={item} />;
            }}
            keyExtractor={item => item.BSSID}
          />
        </View>
      ) : null}
    </LinearGradient>
  );
};

export default ReceiveFiles;
