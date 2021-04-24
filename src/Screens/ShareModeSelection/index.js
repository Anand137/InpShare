import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const ShareModeSelection = props => {
  return (
    <LinearGradient colors={['#b06ab3', '#4568dc']} style={styles.container}>
      <LinearGradient
        colors={['#BA8B02', '#181818']}
        style={styles.SelectionCircle}>
        <TouchableOpacity
          style={styles.SelectionCircleTouch}
          onPress={() => {
            props.navigation.navigate('sendFiles');
          }}>
          <Text style={styles.SelectionText}>Send Files</Text>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient
        colors={['#BA8B02', '#181818']}
        style={styles.SelectionCircle}>
        <TouchableOpacity
          style={styles.SelectionCircleTouch}
          onPress={() => {
            props.navigation.navigate('receiveFiles');
          }}>
          <Text style={styles.SelectionText}>Receive Files</Text>
        </TouchableOpacity>
      </LinearGradient>
    </LinearGradient>
  );
};

export default ShareModeSelection;
