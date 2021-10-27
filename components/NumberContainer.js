import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import theme from '../constants/Color';

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}; 

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: theme.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: theme.primary,
    fontSize: 22
  }
});

export default NumberContainer;
