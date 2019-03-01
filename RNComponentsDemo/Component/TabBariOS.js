import React, { Component } from 'react';
import { Text, View, StyleSheet, TabBarIOS } from 'react-native';

export default class TabBariOS extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'TabBariOS'
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      selectTab: '0'
    }
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor={"#3f3f3f"}
        tintColor={"#ff1111"}
        barTintColor={"#ffffff"}
        translucent={true}>

        <TabBarIOS.Item title="列表"
          selected={this.state.selectTab === '0'}
          icon={{uri: 'tabbar_homepage_normal'}}
          onPress={() => {
            this.setState({
              selectTab: '0'
            })
          }}>
          <View></View>
          {/* <Home></Home>               */}

        </TabBarIOS.Item>

        <TabBarIOS.Item title="其他"
          selected={this.state.selectTab === '1'}
          icon={{uri: 'tabbar_homepage_normal'}}
          onPress={() => {
            this.setState({
              selectTab: '1'
            })
          }}>
          {/* <Invite></Invite> */}
          <View></View>
        </TabBarIOS.Item>



      </TabBarIOS>
    )
  }
}

const style = StyleSheet.create({

});