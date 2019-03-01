import React, { Component } from 'react';
import { View, ScrollView, Image } from 'react-native';

export default class ImageView extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Image'
        }
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                {/* 本地资源文件 */}
                <Image
                    style={{
                        width: 375,
                        height: 375,
                        borderRadius: 50,
                    }}
                    blurRadius={5}  //为图片添加一个指定半径的模糊滤镜。
                    source={require('../src/timg.jpeg')}
                    // source={require('/Users/rr/RNComponentsDemo/src/timg.jpeg')}
                />

                {/* 网络资源文件 */}
                <View style={{
                    overflow: 'hidden',
                    borderTopLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    ovrelayColor: 'white'
                }}>
                    <Image
                        style={{
                            width: 375,
                            height: 580,
                            // borderRadius:50,
                            // borderTopLeftRadius: 50,
                            // borderBottomRightRadius: 50,
                        }}
                        source={{ uri: 'http://n.sinaimg.cn/translate/255/w700h1155/20181224/8KCj-hqqzpku9358427.jpg' }}
                    />
                </View>

                {/* Base64资源文件 */}
                <Image
                    style={{ width: 375, height: 300 }}
                    source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }}
                />

                {/* xcode中的资源文件 */}
                <Image
                    style={{ width: 375, height: 375 }}
                    source={{ uri: 'tabbar_invitation_normal' }}
                />
            </ScrollView>
        )

    }
}