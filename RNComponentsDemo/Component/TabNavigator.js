import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import SwiperScreen from '../Component/Swiper'
import TabViewScreen from '../Component/TabView'

export default class Navigator extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedTab:'homepage'
        }
    }

    render() {
        return (
            // <View style={{backgroundColor:'blue'}}>
            //     <Text style={{fontSize:50}}>why?</Text>

            // </View>

            <TabNavigator>
                <TabNavigator.Item
                    title='首页'
                    selected={this.state.selectedTab === 'homepage'}
                    titleStyle={{color:'#9d9d9d'}}
                    selectedTitleStyle={{color:'#ed7f30'}}
                    // badgeText='首页'
                    allowFontScaling={false}
                    renderIcon={() => <Image source={{uri: 'tabbar_homepage_normal'}} style={{width:20, height: 20}} />}
                    renderSelectedIcon={() => <Image source={{uri: 'tabbar_homepage_selected'}} style={{width:20, height: 20}} />}
                    onPress={()=>
                        this.setState({
                            selectedTab:'homepage'
                        })
                    }
                >
                    <SwiperScreen></SwiperScreen>
                    {/* <View flex={1} style={{backgroundColor:'red'}}>
                        <Text>首页</Text>
                    </View> */}
                </TabNavigator.Item>

                <TabNavigator.Item
                    title='我的'
                    selected={this.state.selectedTab === 'invitation'}
                    titleStyle={{color:'#9d9d9d'}}
                    selectedTitleStyle={{color:'#ed7f30'}}
                    // badgeText='我的'
                    allowFontScaling={false}
                    renderIcon={() => <Image source={{uri: 'tabbar_invitation_normal'}} style={{width:20, height: 20}} />}
                    renderSelectedIcon={() => <Image source={{uri: 'tabbar_invitation_selected'}} style={{width:20, height: 20}} />}
                    onPress={()=>
                        this.setState({
                            selectedTab:'invitation'
                        })
                    }
                >
                    <TabViewScreen></TabViewScreen>
                    {/* <View flex={1} style={{backgroundColor:'blue'}}>
                        <Text>我的</Text>
                    </View> */}
                </TabNavigator.Item>

            </TabNavigator>
        )
    }
}