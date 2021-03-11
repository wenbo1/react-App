import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    RefreshControl,
    Image,
    Alert,
    TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Swiper from 'react-native-swiper'

import Icon from 'react-native-vector-icons/iconfont';

import { px } from "../utils/AdapterUtil";

import { get } from '../utils/request';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class Home extends Component {
    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({ focused }) => {
            if (focused) {
                return (
                    <Icon
                        name='home'
                        size={44 * px}
                        color='#666666'
                    />
                );
            }
            return (
                <Icon
                    name='home'
                    size={44 * px}
                    color='#666666'
                />
            );
        },
    };
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            listItems: ['1', '2', '3']
        };
    }
    //挂载
    componentDidMount() {
        console.log('挂载');
        get('/omr/h5/home/index_v2', { srchn: 101 })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error('err', error);
            });
    }
    //更新
    componentDidUpdate() { }
    //卸载
    componentWillUnmount() {

    }

    _onRefresh = () => {
        this.setState({ refreshing: true });
        setTimeout(() => {
            this.setState({ refreshing: false });
        }, 3000);
    }

    handleClick = () => {
        // Alert.alert(
        //   'Alert Title',
        //   'My Alert Msg',
        //   [
        //     {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        //     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //     {text: 'OK', onPress: () => console.log('OK Pressed')},
        //   ],
        //   { cancelable: false }
        // )
        this.setState(state => ({

            listItems: state.listItems + 1
        }))
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <View style={styles.navigation}></View> */}
                <ScrollView
                    style={styles.scroll}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                >
                    <View style={styles.header}>
                        <Image
                            source={require('../src/images/header-bg.png')}
                            style={styles.header_bg}
                            resizeMode={'stretch'}
                        />
                        <View style={styles.header_search}>
                            <Icon
                                style={{ marginRight: 8 * px }}
                                name='search'
                                size={28 * px}
                                color='#666666'
                            />
                            <Text style={styles.header_text}>输入您想卖的机型</Text>
                        </View>
                        <Swiper
                            autoplay
                            autoplayTimeout={3}
                            style={styles.header_swiper}
                            dotStyle={styles.swiper_dot}
                            activeDotStyle={{ ...styles.swiper_dot, ...styles.swiper_acdot }}
                        >
                            {this.state.listItems.map((item) =>
                                <View style={styles.swiper_item} key={item}>
                                    <Image
                                        source={require('../src/images/banner.png')}
                                        style={styles.swiper_image}
                                        resizeMode={'contain'}
                                    />
                                </View>
                            )}
                        </Swiper>
                        <LinearGradient colors={['#F5F5F5', '#FFFFFF']} style={styles.header_type}>
                            <View style={styles.type_item}>
                                <Image
                                    source={require('../src/images/type-item01.png')}
                                    style={styles.type_item_icon}
                                    resizeMode={'contain'}
                                />
                                <Text style={styles.type_item_text}>手机回收</Text>
                            </View>
                            <View style={styles.type_item}>
                                <Image
                                    source={require('../src/images/type-item02.png')}
                                    style={styles.type_item_icon}
                                    resizeMode={'contain'}
                                />
                                <Text style={styles.type_item_text}>平板回收</Text>
                            </View>
                            <View style={styles.type_item}>
                                <Image
                                    source={require('../src/images/type-item03.png')}
                                    style={styles.type_item_icon}
                                    resizeMode={'contain'}
                                />
                                <Text style={styles.type_item_text}>笔记本回收</Text>
                            </View>
                            <View style={styles.type_item}>
                                <Image
                                    source={require('../src/images/type-item04.png')}
                                    style={styles.type_item_icon}
                                    resizeMode={'contain'}
                                />
                                <Text style={styles.type_item_text}>废旧手机</Text>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={styles.test_data}>
                        <View style={styles.test_data_title}>
                            <View style={styles.title_before}></View>
                            <Text style={styles.title_text}>猜你要卖：iPhone XS Max</Text>
                            <Text style={styles.title_gomore}>其他机型<Icon name='arrow' size={24 * px} color='#8C8F94'></Icon></Text>
                        </View>
                        <View style={styles.test_data_content}>
                            <View style={{ ...styles.data_content_item, ...styles.content_item_border }}>
                                <Text style={styles.content_item_text}>近30天最高成交价</Text>
                                <View style={styles.content_item_box}>
                                    <Text style={styles.content_item_symbol}>￥</Text>
                                    <Text style={styles.content_item_number}>1390</Text>
                                </View>
                            </View>
                            <View style={styles.data_content_item}>
                                <Text style={styles.content_item_text}>比市场回收多赚</Text>
                                <View style={styles.content_item_box}>
                                    <Text style={styles.content_item_symbol}>￥</Text>
                                    <Text style={styles.content_item_number}>390</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                this.props.navigation.navigate('HomeA');
                            }}
                        >
                            <LinearGradient colors={['#04D89E', '#00D87D']} style={styles.test_data_button}>
                                <Text style={styles.data_button_text}>测一测您的手机值多少钱</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <View style={styles.test_data_message}>
                            <Text style={styles.data_message_text}>——累计<Text style={styles.data_message_number}>4,739,561</Text>位用户通过<Text style={styles.data_message_number}>@手机回收</Text>卖出了手机——</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    navigation: {
        height: 130 * px,
        backgroundColor: '#FFFFFF',
    },
    scroll: {
        flex: 1,
    },
    header: {
        marginBottom: 20 * px
    },
    header_bg: {
        width: '100%',
        height: 330 * px,
        position: 'absolute',
        top: 0,
        left: 0
    },
    header_search: {
        width: 690 * px,
        height: 64 * px,
        marginTop: 20 * px,
        marginRight: 'auto',
        marginLeft: 'auto',
        backgroundColor: '#F2F2F2',
        borderRadius: 8 * px,
        opacity: 0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header_text: {
        fontSize: 28 * px,
        color: '#666666'
    },
    header_swiper: {
        height: 280 * px,
        marginTop: 20 * px
    },
    swiper_item: {
        width: 690 * px,
        height: 280 * px,
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    swiper_image: {
        width: '100%'
    },
    swiper_dot: {
        top: 35 * px,
        width: 8 * px,
        height: 6 * px,
        borderRadius: 0,
        backgroundColor: '#ffffff',
        opacity: 0.3,
        marginLeft: 4 * px,
        marginRight: 4 * px
    },
    swiper_acdot: {
        opacity: 1,
        width: 22 * px
    },
    header_type: {
        paddingTop: 46 * px,
        paddingBottom: 42 * px,
        paddingLeft: 30 * px,
        paddingRight: 30 * px,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    type_item: {
        // flex: 1,
        width: 165 * px,
    },
    type_item_icon: {
        width: 114 * px,
        height: 114 * px,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    type_item_text: {
        fontSize: 28 * px,
        color: '#485159',
        textAlign: 'center'
    },
    test_data: {
        paddingTop: 37 * px,
        paddingRight: 30 * px,
        paddingBottom: 40 * px,
        paddingLeft: 30 * px,
        backgroundColor: '#ffffff',
        marginBottom: 20 * px
    },
    test_data_title: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title_before: {
        width: 8 * px,
        height: 32 * px,
        backgroundColor: '#03D779',
        borderRadius: 4 * px
    },
    title_text: {
        fontSize: 34 * px,
        color: '#15171A',
        flex: 1,
        paddingLeft: 13 * px,
        fontWeight: 'bold'
    },
    title_gomore: {
        fontSize: 28 * px,
        color: '#8C8F94'
    },
    test_data_content: {
        paddingTop: 70 * px,
        paddingBottom: 70 * px,
        flexDirection: 'row'
    },
    data_content_item: {
        flex: 1
    },
    content_item_border: {
        borderRightWidth: 1 * px,
        borderRightColor: '#E6E6E6'
    },
    content_item_text: {
        fontSize: 24 * px,
        color: '#8C8F94',
        textAlign: 'center'
    },
    content_item_box: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginTop: 20 * px
    },
    content_item_symbol: {
        fontSize: 32 * px,
        fontWeight: 'bold',
        color: '#F03D3D'
    },
    content_item_number: {
        fontSize: 48 * px,
        fontWeight: 'bold',
        color: '#F03D3D'
    },
    test_data_button: {
        width: 544 * px,
        height: 84 * px,
        borderRadius: 42 * px,
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 52 * px
    },
    data_button_text: {
        fontSize: 34 * px,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    test_data_message: {
    },
    data_message_text: {
        fontSize: 24 * px,
        color: '#8C8F94',
        textAlign: 'center'
    },
    data_message_number: {
        color: '#03D779'
    },
    tabbar: {
        height: 108 * px,
        backgroundColor: '#ffffff'
    },
});