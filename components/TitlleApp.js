//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
class TitleApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Example 1 :</Text>
        <Text style={styles.textTitle}>App Component</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  textTitle: {
    color: 'white',
    fontSize: 30,
    textTransform: 'uppercase',
  },
});

//make this component available to the app
export default TitleApp;
