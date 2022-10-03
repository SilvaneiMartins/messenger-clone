import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChatCircleDots, UsersThree, GearSix, Heart } from 'phosphor-react-native';

import theme from '../styles/theme';
import { Chat } from '../screens/Tab/Chat';
import Dimensions from '../utils/Dimension';
import { People } from '../screens/Tab/People';
import { Settings } from '../screens/Tab/Settings';
import { Favorite } from '../screens/Tab/Favorite';


const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Navigator
            initialRouteName='Chat'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarInactiveTintColor: theme.PRIMARY_COLORS.BLACK_500,
                tabBarActiveTintColor: theme.PRIMARY_COLORS.BLACK_100,
                tabBarStyle: {
                    paddingBottom: 7,
                    backgroundColor: theme.PRIMARY_COLORS.WRITE_200,
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    shadowOpacity: 0.2,
                    position: 'absolute',
                    bottom: Dimensions.safeAreaBottomHeight,
                }
            }}
        >
            <Screen
                name='Chat'
                component={Chat}
                options={{
                    tabBarLabel: 'Mensagem',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                marginBottom: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {focused ? (
                                <ChatCircleDots
                                    size={25}
                                    weight="fill"
                                    color={focused ? theme.PRIMARY_COLORS.BLACK_500 : theme.PRIMARY_COLORS.WRITE_100}
                                />
                            ) : (
                                <ChatCircleDots
                                    size={25}
                                    weight="light"
                                    color={focused ? theme.PRIMARY_COLORS.BLACK_500 : theme.PRIMARY_COLORS.BLACK_500}
                                />
                            )}
                        </View>
                    )
                }}
            />
            <Screen
                name='People'
                component={People}
                options={{
                    tabBarLabel: 'Pessoas',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                marginBottom: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {focused ? (
                                <UsersThree
                                    size={25}
                                    weight="fill"
                                    color={focused ? theme.PRIMARY_COLORS.BLACK_500 : theme.PRIMARY_COLORS.WRITE_100}
                                />
                            ) : (
                                <UsersThree
                                    size={25}
                                    weight="light"
                                    color={focused ? theme.PRIMARY_COLORS.BLACK_500 : theme.PRIMARY_COLORS.BLACK_500}
                                />
                            )}
                        </View>
                    )
                }}
            />
            <Screen
                name='Favorite'
                component={Favorite}
                options={{
                    tabBarLabel: 'Favorito',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                marginBottom: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {focused ? (
                                <Heart
                                    size={25}
                                    weight="fill"
                                    color={focused ? theme.PRIMARY_COLORS.BLACK_500 : theme.PRIMARY_COLORS.WRITE_100}
                                />
                            ) : (
                                <Heart
                                    size={25}
                                    weight="light"
                                    color={focused ? theme.PRIMARY_COLORS.BLACK_500 : theme.PRIMARY_COLORS.BLACK_500}
                                />
                            )}
                        </View>
                    )
                }}
            />
            <Screen
                name='Settings'
                component={Settings}
                options={{
                    tabBarLabel: 'Configuração',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                marginBottom: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {focused ? (
                                <GearSix
                                    size={25}
                                    weight="fill"
                                    color={focused ? theme.PRIMARY_COLORS.BLACK_500 : theme.PRIMARY_COLORS.WRITE_100}
                                />
                            ) : (
                                <GearSix
                                    size={25}
                                    weight="light"
                                    color={focused ? theme.PRIMARY_COLORS.BLACK_500 : theme.PRIMARY_COLORS.BLACK_500}
                                />
                            )}
                        </View>
                    )
                }}
            />
        </Navigator>
    )
}
