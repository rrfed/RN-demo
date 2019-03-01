import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';

export default class MyScrollView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'ScrollView'
    }
  }
  /**ScrollView适合用来显示数量不多的滚动元素。放置在ScrollView中的所有组件都会被渲染，哪怕有些组件因为内容太长被挤出了屏幕外。
   * 如果你需要显示较长的滚动列表，那么应该使用功能差不多但性能更好的FlatList组件。 */
  render() {
    return (
      <ScrollView>
        <Text style={{ fontSize: 46 }}>Scroll me plz</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Text style={{ fontSize: 46 }}>If you like</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Text style={{ fontSize: 46 }}>Scrolling down</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Text style={{ fontSize: 46 }}>What's the best</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Text style={{ fontSize: 46 }}>Framework around?</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Text style={{ fontSize: 80 }}>React Native</Text>
      </ScrollView>
    );
  }
}