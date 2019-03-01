import React, { Component } from 'react'
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default class MyActivityIndicator extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'ActivityIndicator'
    }
  }

  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        {/*在animating为 false 的时候，是否要隐藏指示器（默认为 true）。如果animating和hidesWhenStopped都为 false，则显示一个静止的指示器。*/}
        <ActivityIndicator size="large" color="#DC143C" animating={false} hidesWhenStopped={false} />
        <ActivityIndicator size="small" color="#9932CC" />
        <ActivityIndicator size="large" color="#6495ED" />
        <ActivityIndicator size="small" color="#FA8072" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})