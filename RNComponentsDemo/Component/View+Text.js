import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

//  View
//  创建 UI 时最基础的组件
//  View 是一个支持 Flexbox 布局、样式、一些触摸处理、和一些无障碍功能的容器
//  它可以放到其它的视图里，也可以有任意多个任意类型的子视图
//  不论在什么平台上，View 都会直接对应一个平台的原生视图，无论它是 UIView、还是 android.view.View


export default class ViewColoredBoxesWithText extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'View+Text'
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            titleText: "Bird's Nest",
            bodyText: 'This not a really a bird nest.This not a really a bird nest.This not a really a bird nest.This not a really a bird nest.This not a really a bird nest.'
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.blueStyle} />
                <View style={styles.redStyle} />
                <Text style={styles.textStyle}>{this.state.titleText}{'\n'}{'\n'}</Text>
                <Text numberOfLines={5}> 
                    <Text style={{color: 'blue'}}>嵌套文本的开头</Text>
                    {this.state.bodyText}
                    <Text style={{color: 'red'}}>嵌套文本的结尾</Text>
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex:1,
        height: 300,
        padding: 20,
        backgroundColor:'yellow',
    },
    blueStyle: {
        backgroundColor: 'blue',
        flex: 0.3,
    },
    redStyle: {
        backgroundColor: 'red',
        flex: 0.5,
    },
    textStyle: {
        fontSize: 20,
        // fontSize: 34,
        color: '#000',
    }
})