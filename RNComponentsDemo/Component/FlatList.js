import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions, TouchableOpacity, Animated } from 'react-native';

const { width, height } = Dimensions.get('window')

export default class FlatListBasics extends Component {
  //构造
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    //  0.5秒后加载数据
    setTimeout(() => {
      this.setState({
        data: [
          { key: '滚动到最下方' },
          { key: 'ViewAndText' },
          { key: 'TextInput' },
          { key: 'Button' },
          { key: 'Image' },
          { key: 'ScrollView' },
          { key: 'SectionList' },
          { key: 'Swiper' },
          { key: 'Picker' },
          { key: 'ActivityIndicator' },
          { key: 'TabBariOS' },
          { key: 'TabNavigator' },
          { key: 'TabView' },
          { key: 'Webview' },
          { key: '滚动到最上方' },
        ]
      })
    }, 500); //  500毫秒
  }

  renderItem(item) {
    return (
      <TouchableOpacity onPress={() => {

        if (item.key == '滚动到最下方') {
          this.refs.flatList.scrollToEnd();

        } else if (item.key == '滚动到最上方') {
          this.refs.flatList.scrollToIndex({ index: 0 });

        } else {
          // alert(item.key);
          this.props.navigation.navigate(item.key, {
            title: item.key
          })
        }
      }}>
        <Text style={styles.item}>{item.key}</Text>
      </TouchableOpacity>
    )
  }

  //  刷新中
  refreshing() {
    //  1.5秒后弹出刷新成功提示框
    let timer = setTimeout(() => {
      clearTimeout(timer)
      // alert('刷新成功')
    }, 1500)
  }

  //  上拉加载
  _onload() {
    let timer = setTimeout(() => {
      clearTimeout(timer)
      // alert('上拉加载成功')
    }, 1500)
  }

  static navigationOptions = {
    title: 'FlatList',
    // header: null 让导航栏消失
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ref='flatList'
          data={this.state.data}
          renderItem={({ item }) => this.renderItem(item)}//  渲染个体
          ListHeaderComponent={this._header}  //  头部内容
          ListFooterComponent={this._footer}  //  脚部内容
          ListEmptyComponent={this._listEmptyComponent} //  空数据时 
          ItemSeparatorComponent={this._separator}  //  个体间的分割样式
          onRefresh={this.refreshing} //  刷新
          refreshing={false}
          onEndReachedThreshold={0.1} // 到底部的阈值，这里是0.1像素
          onEndReached={this._onload} //  到达列表底部触发
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}// 此函数用于为给定的item生成一个不重复的key
        // getItemLayout={(data, index) => ({length: width, offset: renderItem.height * index, index})}
        // numColumns={2}  //列数 必须大于1
        // columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:0}}
        />
      </View>
    );
  }

  //  头部
  _header = () => {
    return <Text style={[styles.headerAndFooterText, { backgroundColor: 'black' }]}>头部</Text>
  }

  //  底部
  _footer = () => {
    return <Text style={[styles.headerAndFooterText, { backgroundColor: 'black' }]}>底部</Text>
  }

  //  列表无数据时
  _listEmptyComponent = () => {
    return <View style={{ backgroundColor: '#4169E1', flex: 1, height: height }}>
      <Text style={styles.headerAndFooterText}>
        暂时没有数据，等待1秒
      </Text>
    </View>
  }

  //  分割线
  _separator = () => {
    return <View style={{ height: 2, backgroundColor: 'yellow' }}></View>
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  paddingTop: 22,
    backgroundColor: '#F5FCFF'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  headerAndFooterText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 30,
    lineHeight: 50,
  }
})