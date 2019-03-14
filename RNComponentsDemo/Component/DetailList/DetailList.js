import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import MyHeader from "./DetailListHeader"

export default class DetailList extends Component {
    render () {
        return (
            <ScrollView>
                <MyHeader></MyHeader>
            </ScrollView>
        )
    }
}