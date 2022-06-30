//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

// create a component
class ChangeColor extends Component {
  render() {
    const myColor = this.props.myHighlight ? 'red' : 'white';
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.dispatch({type: 'CHANGE_COLOR'});
          }}>
          <Text style={[styles.text, {color: myColor}]}>Change Color</Text>
        </TouchableOpacity>
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
  button: {
    width: 200,
    height: 100,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 20,
  },
});

function mapStateToProps(state) {
  return {myHighlight: state.highlight};
}
//make this component available to the app
export default connect(mapStateToProps)(ChangeColor);
