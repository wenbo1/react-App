import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/iconfont';

import { px } from "../utils/AdapterUtil";

export default class CustomTabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
    }
    render() {
        return (
            this.state.visible &&
            <ImageBackground
                source={require('../src/images/tabbar-bg.png')}
                style={styles.tabbar}
            >
                <TouchableOpacity
                    style={styles.tabbar_item}
                    activeOpacity={0.5}
                    onPress={() => {
                        this.props.navigation.navigate('HomeA');
                    }}
                >
                    <View style={styles.tabbar_item}>
                        <Icon
                            style={{ marginBottom: 8 * px }}
                            name='home'
                            size={44 * px}
                            color='#666666'
                        />
                        <Text>首页</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tabbar_item}
                    activeOpacity={0.5}
                    onPress={() => {
                        this.props.navigation.navigate('HomeA');
                    }}
                >
                    <View style={styles.tabbar_item}>
                        <Icon
                            style={{ marginBottom: 8 * px }}
                            name='home'
                            size={44 * px}
                            color='#666666'
                        />
                        <Text>首页</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tabbar_item}
                    activeOpacity={0.5}
                    onPress={() => {
                        this.props.navigation.navigate('HomeA');
                    }}
                >
                    <View style={styles.tabbar_item}>
                        <Icon
                            style={{ marginBottom: 8 * px }}
                            name='home'
                            size={44 * px}
                            color='#666666'
                        />
                        <Text>首页</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tabbar_item}
                    activeOpacity={0.5}
                    onPress={() => {
                        this.props.navigation.navigate('HomeA');
                    }}
                >
                    <View style={styles.tabbar_item}>
                        <Icon
                            style={{ marginBottom: 8 * px }}
                            name='home'
                            size={44 * px}
                            color='#666666'
                        />
                        <Text>首页</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tabbar_item}
                    activeOpacity={0.5}
                    onPress={() => {
                        this.props.navigation.navigate('HomeA');
                    }}
                >
                    <View style={styles.tabbar_item}>
                        <Icon
                            style={{ marginBottom: 8 * px }}
                            name='home'
                            size={44 * px}
                            color='#666666'
                        />
                        <Text>首页</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    tabbar: {
        width: '100%',
        height: 119 * px,
        position: 'absolute',
        left: 0,
        bottom: 0,
        flexDirection: 'row'
    },
    tabbar_item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});