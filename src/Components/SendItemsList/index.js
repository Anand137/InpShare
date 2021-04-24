import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const SendItemsList = props => {
  return (
    <TouchableOpacity style={styles.mainCont}>
      <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
        {props.data.name}
      </Text>
    </TouchableOpacity>
  );
};

export default SendItemsList;
