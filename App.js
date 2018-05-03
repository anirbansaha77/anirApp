
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import Product from './src/containers/Product';

const store = configureStore({});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Product />
      </Provider>
    );
  }
};
