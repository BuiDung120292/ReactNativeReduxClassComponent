//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';

// create a component
class ControllerApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textController}>Controller App</Text>
        <View style={styles.containerGroupButton}>
          <TouchableOpacity
            style={styles.buttonController}
            onPress={() => {
              this.props.dispatch({type: 'UP'});
            }}>
            <Text style={styles.textButtonController}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonController}
            onPress={() => {
              this.props.dispatch({type: 'DOWN'});
            }}>
            <Text style={styles.textButtonController}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    backgroundColor: 'yellow',
    width: '90%',
    height: '100%',
    margin: 20,
  },
  textController: {
    color: 'black',
    fontSize: 30,
    textTransform: 'uppercase',
  },
  containerGroupButton: {
    flexDirection: 'row',
  },
  buttonController: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    borderRadius: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonController: {
    color: 'yellow',
    fontSize: 30,
  },
});

//make this component available to the app
export default connect()(ControllerApp);
