import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import Colors from "./Colors"

var { width, height } = Dimensions.get('window')
const PADDING = 10
var BaseImageURL = "http://demo3.renrunkeji.com:8151/api/file/image/"
var REQUEST_BANNER_URL = "http://demo3.renrunkeji.com:8151/api/wns/banner/page?current=1&size=20&status=1"

const renderPagination = (index, total, context) => {
    return (
        <View style={styles.paginationStyle}>
            <Text style={styles.paginationText}>
                <Text style={styles.paginationText}>{index + 1}</Text>/{total}
            </Text>
        </View>
    )
}

export default class DetailListHeader extends Component {
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
        try {
            const response = await fetch(REQUEST_BANNER_URL);
            const responseJson = await response.json();
            // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
            this.setState({
                // 注意这里使用了数组的 concat 方法生成新数组，不能直接在原数组上 push！
                bannerData: this.state.bannerData.concat(responseJson.records),
            }, function () {
            });
            return responseJson;
        }
        catch (error) {
            console.error('error:' + error);
        }
    }

    renderNetSwiper() {
        var itemArr = [];
        //  根据bannerData的内容渲染Swiper
        for (let index = 0; index < this.state.bannerData.length; index++) {
            let data = this.state.bannerData[index];
            let imageURL = BaseImageURL + data.fid
            itemArr.push(
                <View key={index}>
                    <Image
                        style={styles.swiper}
                        source={{ uri: imageURL }}
                        resizeMode='stretch'
                    // defaultSource={{ uri: '/Users/rr/RNComponentsDemo/src/banner1.jpeg' }}
                    />
                </View>
            )
        }
        return itemArr;
    }

    render() {
        return (
            <View style={styles.container}>
                <Swiper
                    key={this.state.bannerData.length}
                    style={styles.swiper}
                    renderPagination={renderPagination}
                    autoplay={true}
                    autoplayTimeout={2}
                >
                    {this.renderNetSwiper()}

                </Swiper>
                <Money></Money>
            </View>
        )
    }
}

class Money extends React.Component {
    render() {
        return (
            <View style={styles.textContainer}>
                <Text style={styles.title}>某某市某某县某某镇某某村20亩鱼塘承包权（两年）</Text>
                <View style={styles.wrap}>
                    <View>
                        <Text style={styles.grayText}>RMB</Text>
                        <Text style={styles.greenText}>当前价</Text>
                    </View>
                    <Text style={styles.bigGreenText}>50,000</Text>
                </View>
                <View style={styles.itemWrap}>
                    <TextItem name='围观 ' number='30' unit=' 人'></TextItem>
                    <Text style={styles.itemGray}>|</Text>
                    <TextItem name='出价 ' number='5' unit=' 人'></TextItem>
                    <Text style={styles.itemGray}>|</Text>
                    <TextItem name='起拍价 ' number='40000' unit=' 元'></TextItem>
                </View>
            </View>
        )
    }
}

class TextItem extends React.Component {
    render() {
        return (
            <Text style={[styles.itemStyle, styles.itemBlack]}>
                <Text style={styles.itemGray}>{this.props.name}</Text>
                {this.props.number}
                <Text style={styles.itemGray}>{this.props.unit}</Text>
            </Text>
        )
    }
}

/* StyleSheet =============================================================== */
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    swiper: {
        height: 250,
    },
    paginationStyle: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        backgroundColor: 'black',
        width: 34,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        opacity: 0.3,
    },
    paginationText: {
        color: 'white',
        fontSize: 12
    },
    textContainer: {
        margin: PADDING,
    },
    wrap: {
        flexDirection: 'row',
        marginTop: PADDING,
    },
    title: {
        fontSize: 14,
        fontFamily: 'PingFang-SC-Regular',
        color: Colors.black,
    },
    grayText: {
        fontSize: 15,
        fontWeight: '500',
        color: Colors.gray,
    },
    greenText: {
        fontSize: 12,
        fontFamily: 'PingFang-SC-Regular',
        color: Colors.appMainColor,
    },
    bigGreenText: {
        fontSize: 32,
        fontFamily: 'Helvetica',
        color: Colors.appMainColor,
        paddingLeft: 15,
    },
    itemWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemStyle: {
        fontSize: 12
    },
    itemGray: {
        color: '#CBCBCB'
    },
    itemBlack: {
        color: Colors.black,
    },
})