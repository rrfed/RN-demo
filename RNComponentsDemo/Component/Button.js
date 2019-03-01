import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Swipeout from 'react-native-swipeout';
import Button from 'react-native-button'

export default class ButtonView extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Button'
        }
    }

    render() {
        var swipeoutBtns = [
            {
                text: '编辑',
                type: 'primary',
                onPress:this._buttonIsClicked
            },
            {
                // backgroundColor:'red',
                text: '删除',
                type: 'delete',
                underlayColor: 'purple'
            },
            {
                text: '二级',
                type: 'secondary',
            }
        ]

        return (
            <View>
                {/* 自带的button */}
                {/* <Button
                    title='button one'
                    color='#841584' //  文本的颜色(iOS)，或是按钮的背景色(Android)
                    backgroundColor='red'
                    onPress={this._buttonIsClicked}
                    disabled={true}
                /> */}

                {/* react-native-button */}
                <Button
                    // 容器样式
                    containerStyle={{ padding: 10, width: 100, height: 45, overflow: 'hidden', borderRadius: 10, backgroundColor: '#008080', alignSelf: 'center', marginTop: 20 }}
                    disabledContainerStyle={{ backgroundColor: 'grey' }}
                    // disabled={true}
                    style={{ fontSize: 20, color: 'white' }}
                    styleDisabled={{ color: 'red' }}
                    onPress={() => this._buttonIsClicked()}
                >
                    Press Me!
                </Button>

                <Button
                    containerStyle={{ padding: 10, width: 350, height: 46, overflow: 'hidden', borderRadius: 8, backgroundColor: '#D2691E', alignSelf: 'center', marginTop: 20 }}
                    disabledContainerStyle={{ backgroundColor: 'grey' }}
                    // disabled={true}
                    style={{ fontSize: 20, color: 'white' }}
                    styleDisabled={{ color: 'red' }}
                    onPress={() => this._buttonIsClicked()}
                >
                    立即购买
                </Button>

                <Swipeout
                    style={{ marginTop: 20 }}
                    right={swipeoutBtns}
                    autoClose={true}
                    backgroundColor='#20B2AA'>
                    <View
                        style={{
                            height: 60,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>向左滑动</Text>
                    </View>
                </Swipeout>


            </View>
        )
    }

    _buttonIsClicked() {
        alert('click');
    }
}