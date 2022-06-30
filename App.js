//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BodyApp from './components/BodyApp';
import ChangeColor from './components/ChangeColor';
import ControllerApp from './components/ControllerApp';
import TitleApp from './components/TitlleApp';

// create a component
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TitleApp />
        <BodyApp />
        <ControllerApp />
        <ChangeColor />
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
});

//make this component available to the app
export default App;
