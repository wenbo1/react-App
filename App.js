import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// 先引入这个方法
import { HeaderStyleInterpolator } from 'react-navigation';

import Home from './pages/Home';
import HomeA from './pages/HomeA';
import HomeB from './pages/HomeB';
import HomeC from './pages/HomeC';

import CustomTabComponent from './components/TabBar';

// const AppNavigator = createStackNavigator({
//     HomeA: {
//         screen: HomeA,
//     },
//     Home: {
//         screen: Home,
//     }
// }, {
//     initialRouteName: 'Home',
// });

const TabNavigator = createBottomTabNavigator({
    Home: Home,
    HomeB: HomeB,
    HomeC: HomeC,
}, {
    // tabBarComponent: props => (
    //     <CustomTabComponent {...props} />
    // ),
    tabBarOptions: {
        //当前选中的tab bar的文本颜色和图标颜色
        activeTintColor: '#4BC1D2',
        //当前未选中的tab bar的文本颜色和图标颜色
        inactiveTintColor: '#000',
        //是否显示tab bar的图标，默认是false
        showIcon: true,
        //showLabel - 是否显示tab bar的文本，默认是true
        showLabel: true,
        //是否将文本转换为大小，默认是true
        upperCaseLabel: false,
        //material design中的波纹颜色(仅支持Android >= 5.0)
        pressColor: '#788493',
        //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
        pressOpacity: 0.8,
        //tab bar的样式
        style: {
            backgroundColor: '#fff',
            paddingBottom: 1,
            borderTopWidth: 0.2,
            paddingTop: 1,
            borderTopColor: '#ccc',
        },
        //tab bar的文本样式
        labelStyle: {
            fontSize: 11,
            margin: 1
        },
        //tab 页指示符的样式 (tab页下面的一条线).
        indicatorStyle: { height: 0 },
    },
    //tab bar的位置, 可选值： 'top' or 'bottom'
    tabBarPosition: 'bottom',
    //是否允许滑动切换tab页
    swipeEnabled: true,
    //是否在切换tab页时使用动画
    animationEnabled: true,
    //是否懒加载
    lazy: true,
    //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
    backBehavior: 'none'
});

const App = createStackNavigator({
    // Home: { screen: Home },
    HomeA: HomeA,
    Main: {
        screen: TabNavigator,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    }
},
    {
        initialRouteName: 'Main',
        headerMode: 'screen'
    });

export default createAppContainer(App);

// export default Home;
// export default createAppContainer(AppNavigator);