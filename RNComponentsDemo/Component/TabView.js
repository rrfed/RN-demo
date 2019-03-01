import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';


const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);

export default class MyTabView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'TabView',
      // header: null 让导航栏消失
    }
  }

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  // _renderTabBar = props => {
  //   const inputRange = props.navigationState.routes.map((x, i) => i);

  //   return (
  //     <View style={styles.tabBar}>
  //       {props.navigationState.routes.map((route, i) => {
  //         const color = Animated.color(
  //           Animated.round(
  //             Animated.interpolate(props.position, {
  //               inputRange,
  //               outputRange: inputRange.map(
  //                 inputIndex => (inputIndex === i ? 255: 0)
  //               )
  //             })
  //           ), 0, 0
  //         );

  //         return (
  //           <TouchableOpacity
  //             style={styles.tabItem}
  //             onPress={() => this.setState({ index: i })}>
  //             {/* <Text style={backgroundColor='red'}>{route.title}</Text> */}
  //             <Animated.Text style={{ color }}>{route.title}</Animated.Text>
  //           </TouchableOpacity>
  //         );
  //       })}
  //     </View>
  //   );
  // };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
      <TabView  
        //  （必需）：当前导航状态应包含一个routes包含选项卡列表的数组，以及一个index表示当前选项卡的属性。
        navigationState={this.state}
        //  （必需）：回调，返回一个React Element作为选项卡的场景。
        renderScene={this._renderScene}
        //  在自定义标签栏上遇到坑了，似乎是要装Expo家的SDK
        // renderTabBar={this._renderTabBar}
        //  （必填）：当前标签索引更改时的回调，应更新导航状态。
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: StatusBar.currentHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'purple'
  },
});
