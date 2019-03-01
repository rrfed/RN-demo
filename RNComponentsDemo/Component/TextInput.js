import React, { Component } from 'react';
import { Text, Button, View, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class UselessTextInput extends Component {
    render() {
        return (
            <View>
                <TextInput
                    style={{ alignSelf:'center' ,height: 40, width: 300, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
                    maxLength={40}
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                    editable={true}
                    // multiline={this.props.multiline} //这个属性会使clearButton无效
                    numberOfLines={this.props.numberOfLines}
                    placeholder='占位符'
                    clearButtonMode='while-editing'
                />
            </View>
        );
    }
}

export default class UselessTextInputMultiline extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'TextInput'
        }
    }

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <KeyboardAwareScrollView>
                <View style={{
                    height: 500,
                    flexDirection: 'column',
                    backgroundColor: this.state.text,
                    alignItems:'center'
                    // borderBottomColor: '#000',
                    // borderBottomWidth: 1,
                }}>
                    <Text style={{ flex: 1 }}>第一行</Text>
                    <Text style={{ flex: 1 }}>第二行</Text>
                    <Text style={{ flex: 1 }}>第三行</Text>
                    <UselessTextInput
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                </View>
            </KeyboardAwareScrollView>
        )
    }
}