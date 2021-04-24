import React from 'react';
import {View, StyleSheet} from 'react-native';
import Router from './router';

const App = () => {
  return <Router />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
