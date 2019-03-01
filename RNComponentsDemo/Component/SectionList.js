import React, { Component } from 'react';
import { Text, View, SectionList } from 'react-native';

/**
 * 本组件实质是基于<VirtualizedList>组件的封装，继承了其所有 props（也包括所有<ScrollView>)的 props）。此外还有下面这些需要注意的事项：

1.当某行滑出渲染区域之外后，其内部状态将不会保留。请确保你在行组件以外的地方保留了数据。
2.本组件继承自PureComponent而非通常的Component，这意味着如果其props在浅比较中是相等的，则不会重新渲染。
所以请先检查你的renderItem函数所依赖的props数据（包括data属性以及可能用到的父组件的state），
如果是一个引用类型（Object或者数组都是引用类型），则需要先修改其引用地址（比如先复制到一个新的Object或者数组中），
然后再修改其值，否则界面很可能不会刷新。（译注：这一段不了解的朋友建议先学习下js中的基本类型和引用类型。）
3.为了优化内存占用同时保持滑动的流畅，列表内容会在屏幕外异步绘制。这意味着如果用户滑动的速度超过渲染的速度，则会先看到空白的内容。这是为了优化不得不作出的妥协，而我们也在设法持续改进。
4.默认情况下每行都需要提供一个不重复的key属性。你也可以提供一个keyExtractor函数来生成key。
 */

export default class MySectionList extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'SectionList'
        }
    }

    _renderItem = (info) => {
        var text = ' ' + info.item.title;
        return <Text style={{
            height: 60,
            lineHeight: 60, //  text垂直居中
            // textAlignVertical: 'center', //无用
            backgroundColor: '#fff',
            color: '#5c5c5c',
            fontSize: 15
        }}>{text}</Text>
    }

    _sectionHeader = (info) => {
        var text = info.section.key;
        return <Text style={{
            height: 50,
            textAlign: 'center',
            textAlignVertical: 'center',
            backgroundColor: '#F0E68C',
            color: 'white',
            fontSize: 30
        }}>{text}</Text>
    }

    refreshing() {
        //  0.5秒后弹出刷新成功提示框
        let timer = setTimeout(() => {
            clearTimeout(timer)
            alert('刷新成功')
        }, 500)
    }

    render() {
        var sections = [
            { key: "A", data: [{ title: "abandon" }, { title: "ability" }, { title: "able" }] },
            { key: "B", data: [{ title: "Baby" }, { title: "bachelor" }, { title: "back" }] },
            { key: "C", data: [{ title: "cab" }, { title: "cabbage" }, { title: "cafeteria" }] },
            { key: "D", data: [{ title: "dad" }, { title: "daily" }, { title: "dam" }] },
        ];

        return (
            <View style={{ flex: 1 }}>
                <SectionList
                /**如果设置了此选项，则会在列表头部添加一个标准的RefreshControl控件，以便实现“下拉刷新”的功能。同时你需要正确设置refreshing属性。
                 * 如果你想把刷新控件往下移动一些（比如100个pt），可以设置progressViewOffset={100}。 */
                    onRefresh={this.refreshing}
                    refreshing={false}
                    renderSectionHeader={this._sectionHeader}// header
                    renderItem={this._renderItem}// 用来渲染每一个section中的每一个列表项的默认渲染器。可以在section级别上进行覆盖重写。必须返回一个react组件。
                    sections={sections}// 用来渲染的数据
                    ItemSeparatorComponent={() => <View style={{ backgroundColor: '#B0C4DE', height: 5 }}><Text></Text></View>}//  行与行之间的分隔线组件
                    ListHeaderComponent={() => <View style={{ backgroundColor: '#48D1CC', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>高考重点词汇3500</Text></View>}
                    ListFooterComponent={() => <View style={{ backgroundColor: '#48D1CC', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>高考重点词汇3500底部</Text></View>}
                    keyExtractor={(item, index) => item + index}// 此函数用于为给定的item生成一个不重复的key
                />
            </View>
        )
    }
}