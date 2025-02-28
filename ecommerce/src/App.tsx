import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from '@navigation/Navigation';
import {Provider} from 'react-redux';
import {store} from '@store/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'}/>
      <Navigation />
    </Provider>
  );
};

export default App;
