import React from 'react';
import {View, Text, Modal, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const ConnectWifiModal = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={() => {
        props.close();
      }}>
      <View
        style={{
          maxHeight: 400,
          minHeight: 250,
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          padding: 20,
        }}>
        <TouchableOpacity
          style={{width: 90, alignSelf: 'flex-end'}}
          onPress={() => {
            props.close();
          }}>
          <Text style={{color: 'red', textAlign: 'right'}}>Close X</Text>
        </TouchableOpacity>
        <Text
          style={{
            width: '80%',
            color: 'grey',
            borderBottomWidth: 1,
            textAlign: 'center',
            borderBottomColor: 'silver',
            height: 30,
            alignSelf: 'center',
            marginTop: 20,
          }}>
          * Trying To Connect With {props.WifiID}
        </Text>

        <TextInput
          style={{
            borderWidth: 1,
            color: '#000000',
            marginVertical: 20,
            borderRadius: 5,
            borderColor: '#22a4ef',
            paddingHorizontal: 10,
          }}
          placeholder="Password"
          placeholderTextColor="grey"
          secureTextEntry
        />
        <LinearGradient
          colors={['#22a4ef', '#4568dc']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          style={[styles.btnCont, {alignSelf: 'center'}]}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              console.log('connection req');
            }}>
            <Text style={styles.btnText}>Connect</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </Modal>
  );
};

export default ConnectWifiModal;
