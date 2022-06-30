//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {connect} from 'react-redux';

// create a component
class BodyApp extends Component {
  render() {
    const myColor = this.props.myHighlight ? 'yellow' : 'white';
    return (
      <View style={styles.container}>
        <Text style={[styles.textBody, {color: myColor}]}>
          {this.props.myValue}
        </Text>
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
  textBody: {
    fontSize: 50,
  },
});

function mapStateToProps(state) {
  return {myValue: state.value, myHighlight: state.highlight};
}
//make this component available to the app
export default connect(mapStateToProps)(BodyApp);
