// 官方为了减少React Native的表面积，将从React Native核心中删除<WebView />
// 他们推荐使用 react-native-community/react-native-webview
import React, { Component } from "react";
import { WebView } from "react-native-webview";

// ...
export default class MyWebComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Webview'
    }
  }

  render() {
    return (
      <WebView
        source={{ uri: "https://reactnative.cn/" }}
        allowsBackForwardNavigationGestures={true}
        useWebKit={true}
        style={{ marginTop: 20 }}
      />
    );
  }
}