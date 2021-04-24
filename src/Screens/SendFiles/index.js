import React from 'react';
import {View, FlatList, Text} from 'react-native';
import SendItemsList from '../../Components/SendItemsList';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const SendFiles = props => {
  const SelectionList = [
    {name: 'Images'},
    {name: 'Documents'},
    {name: 'Apk'},
    {name: 'Files'},
  ];
  return (
    <LinearGradient colors={['#b06ab3', '#4568dc']} style={styles.container}>
      <Text style={styles.headingText}>Sending Options</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{width: '100%', marginTop: 30}}
        data={SelectionList}
        renderItem={({item}) => {
          return <SendItemsList data={item} />;
        }}
        keyExtractor={item => item.name}
      />
    </LinearGradient>
  );
};

export default SendFiles;
