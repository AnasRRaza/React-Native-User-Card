import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Counter} from './Container';

const CounterDisplay = () => {
  const counter = Counter.useContainer();

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>Counter {counter.count}</Text>
      <View>
        <TouchableOpacity style={styles.btn} onPress={counter.increment}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={counter.decrement}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 30,
    color: '#000',
  },
});

export default CounterDisplay;
