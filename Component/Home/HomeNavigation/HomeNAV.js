import React from 'react';
import { Image, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AssetScreen from '../../../Component/Home/AssetScreen';
import MarketScreen from '../../../Component/Home/MarketScreen';
import DiscoverScreen from '../../../Component/Home/DiscoverScreen';
import MyScreen from '../../../Component/Home/MyScreen';
import image from '../../../assets/image';


const Tab = createBottomTabNavigator({
    Asset: {
        screen: AssetScreen,
        navigationOptions: {
            tabBarLabel: 'Asset',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={image.icon_asset}
                    resizeMode="contain"
                    style={{ width: 20, height: 20 }} />
            )
        }
    },
    Market: {
        screen: MarketScreen,
        navigationOptions: {
            tabBarLabel: 'Market',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={image.icon_market}
                    resizeMode="contain"
                    style={{ width: 20, height: 20 }} />
            )
        }
    },
    Discover: {
        screen: DiscoverScreen,
        navigationOptions: {
            tabBarLabel: 'Discover',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={image.icon_discover}
                    resizeMode="contain"
                    style={{ width: 20, height: 20 }} />
            )
        }
    },
    My: {
        screen: MyScreen,
        navigationOptions: {
            tabBarLabel: 'My',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={image.icon_my}
                    resizeMode="contain"
                    style={{ width: 20, height: 20 }} />
            )
        }
    }
},{
    tabBarOptions:{
        
    }
}
);
export default createAppContainer(Tab);
