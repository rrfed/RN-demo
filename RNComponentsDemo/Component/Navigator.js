import React, { Component } from 'react'
import { AppRegistry, Button, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

const App = StackNavigator({
    Main: { screen: MainScreen },
    Profile: { screen: ProfileScreen },
});

class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ backgroundColor: 'red' }}>
                {/* <Button
                    title="Go to Phantom's profile"
                    onPress={() =>
                        navigate('Profile', { name: 'Jane' })
                    }
                /> */}
            </View>

        );
    }
}