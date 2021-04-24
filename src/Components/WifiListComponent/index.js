import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const WifiListComponent = props => {
  return (
    <TouchableOpacity style={styles.mainCont}>
      <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
        {props.data.SSID}
      </Text>
    </TouchableOpacity>
  );
};

export default WifiListComponent;
