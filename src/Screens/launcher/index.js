import React, {useRef, useEffect} from 'react';
import {Text, Animated, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Launcher = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnimBtn = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fadeAnimBtn, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start();
    });
  }, []);
  return (
    <LinearGradient colors={['#b06ab3', '#4568dc']} style={styles.container}>
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}>
        <Text style={styles.appNameStart}>
          <Text style={styles.flagOne}>I</Text>
          <Text style={styles.flagTwo}>N</Text>
          <Text style={styles.flagThree}>P</Text>
          <Text style={styles.appNameEnd}>Share</Text>
        </Text>
      </Animated.View>
      <Animated.View style={[styles.btn, {opacity: fadeAnimBtn}]}>
        <TouchableOpacity
          style={styles.touchableStyle}
          onPress={() => {
            props.navigation.navigate('shareModeSelection');
          }}>
          <Text style={styles.btnText}>Lets Go </Text>
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
};

export default Launcher;
