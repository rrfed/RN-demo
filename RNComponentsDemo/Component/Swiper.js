import React, { Component } from 'react';
import { ScrollView, View, Image, StyleSheet, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import { fetchRequest } from "./API/Network";

import banner0 from "../src/banner0.jpg"
import banner1 from "../src/banner1.jpeg"
import banner2 from "../src/banner2.jpeg"
import banner3 from "../src/banner3.jpg"
import banner4 from "../src/banner4.jpeg"
import banner5 from "../src/banner5.jpg"
import banner6 from "../src/banner6.png"
import banner7 from "../src/banner7.jpeg"
// import console = require('console');

var Dimensions = require('Dimensions')
var { width, height } = Dimensions.get('window')
var BaseImageURL = "http://demo3.renrunkeji.com:8151/api/file/image/"

export default class MySwiper extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Swiper'
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            bannerData: [],
        }
    }

    componentDidMount() {
        this.getBannerData();
    }

    //  获取Banner数据源
    async getBannerData() {
        // try {
        //     const response = await fetch(REQUEST_BANNER_URL);
        //     const responseJson = await response.json();
        //     // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        //     this.setState({
        //         // 注意这里使用了数组的 concat 方法生成新数组，不能直接在原数组上 push！
        //         bannerData: this.state.bannerData.concat(responseJson.records),
        //     }, function() {
        //     });
        //     return responseJson;
        // }
        // catch (error) {
        //     console.error('error:' + error);
        // }
        let params = {
            current: '1',
            size: '20',
            status: '1'
        }
        fetchRequest('wns/banner/page', 'GET', params)
            .then(res => {
                this.setState({
                    // 注意这里使用了数组的 concat 方法生成新数组，不能直接在原数组上 push！
                    bannerData: this.state.bannerData.concat(res.records),
                })
            }).catch(err => {
                alert(err)
            })
    }

    renderNetSwiper() {
        var itemArr = [];
        //  根据bannerData的内容渲染Swiper
        for (let index = 0; index < this.state.bannerData.length; index++) {
            let data = this.state.bannerData[index];
            let imageURL = BaseImageURL + data.fid
            itemArr.push(

                <View style={styles.slide} key={index}>
                    <Image
                        style={styles.image}
                        source={{ uri: imageURL }}
                        resizeMode='stretch'
                    // defaultSource={{ uri: '/Users/rr/RNComponentsDemo/src/banner1.jpeg' }}
                    />
                </View>

            )
        }
        return itemArr;
    }

    //  渲染本地数据源的swiper
    renderLocalSwiper() {
        let images = [
            banner0, banner1, banner2, banner3, banner4, banner5, banner6, banner7,
        ]
        var itemArr = [];
        for (let index = 0; index < images.length; index++) {
            // let imagePath = '/Users/rr/RNComponentsDemo/src/banner' + index
            let image = images[index]
            itemArr.push(
                <View style={styles.slide} key={index}>
                    <Image
                        style={styles.image}
                        source={image}
                        resizeMode='stretch'
                    />
                </View>
            )
        }
        return itemArr;
    }

    render() {
        return (
            <ScrollView
                automaticallyAdjustContentInsets={false}
                scrollEnabled={false}
            >
                <StatusBar barStyle='light-content' />
                <Swiper
                    key={this.state.bannerData.length}
                    style={styles.wrapper}
                    dot={<View style={{ backgroundColor: 'black', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    activeDot={<View style={{ backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    paginationStyle={{
                        bottom: 10, left: null, right: 10
                    }}
                    autoplay={true}
                    autoplayTimeout={2}
                >
                    {this.renderNetSwiper()}

                </Swiper>

                <Swiper
                    key={800}
                    style={{ height: 180 }}
                    dot={<View style={{ backgroundColor: 'black', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    activeDot={<View style={{ backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    paginationStyle={{
                        bottom: 10, left: null, right: 10
                    }}
                    // horizontal={false}
                    autoplay={true}
                    autoplayTimeout={2}
                >
                    {this.renderLocalSwiper()}
                </Swiper>

                <Swiper
                    key={900}
                    style={{ height: 180 }}
                    dot={<View style={{ backgroundColor: 'black', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    activeDot={<View style={{ backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    paginationStyle={{
                        bottom: 10, left: null, right: 10
                    }}
                    autoplayDirection={false}   //  逆向  有点问题 
                    autoplay={true}
                    autoplayTimeout={2}
                >
                    {this.renderLocalSwiper()}
                </Swiper>


            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: 180
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9dd6eb',
    },
    image: {
        width: width,
        height: 180
    },
})