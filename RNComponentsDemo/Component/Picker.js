import React, { Component } from 'react'
import {
    DatePickerIOS,
    View,
    StyleSheet,
    Picker
} from 'react-native'

export default class MyPicker extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Picker'
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date(),
            language0: null,
            language1: null,
            language2: null,
            language3: null,
        };
        // 这是一个受约束的(Controlled)组件，所以你必须监听onDateChange回调函数并且及时更新date属性来使得组件更新，
        // 否则用户的修改会立刻被撤销来确保当前显示值和props.date一致。
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate })
    }

    render() {
        return (
            <View style={styles.container}>
                {/**iOS的日期选择器 */}
                <DatePickerIOS
                    date={this.state.chosenDate}    //  当前被选中的日期。
                    onDateChange={this.setDate}     //  日期/时间变化的监听函数。
                />

                {/* Android和iOS都能显示的Picker */}
                <Picker
                    selectedValue={this.state.language0}    //  默认选中的值。可以是字符串或整数。

                    /**
                     * 某一项被选中时执行此回调。调用时带有如下参数：
                        itemValue: 被选中项的value属性
                        itemPosition: 被选中项在picker中的索引位置
                     */
                    onValueChange={(itemValue, itemIndex) => this.setState({ language0: itemValue })}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="Objective-C" value="oc" />
                    <Picker.Item label="Swift" value="swift" />
                </Picker>

                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                    <Picker
                        selectedValue={this.state.language1}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ language1: itemValue })}
                    >
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                        <Picker.Item label="Objective-C" value="oc" />
                        <Picker.Item label="Swift" value="swift" />
                    </Picker>
                    <Picker
                        selectedValue={this.state.language2}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ language2: itemValue })}
                    >
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                        <Picker.Item label="Objective-C" value="oc" />
                        <Picker.Item label="Swift" value="swift" />
                    </Picker>
                    <Picker
                        selectedValue={this.state.language3}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ language3: itemValue })}
                    >
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                        <Picker.Item label="Objective-C" value="oc" />
                        <Picker.Item label="Swift" value="swift" />
                    </Picker>
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
})