import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChatCircleDots } from 'phosphor-react-native';

import theme from '../styles/theme';
import { Chat } from '../screens/Tab/Chat';
import { People } from '../screens/Tab/People';

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Navigator
            initialRouteName='Chat'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarInactiveTintColor: theme.PRIMARY_COLORS.BLACK_500,
                tabBarActiveTintColor: theme.PRIMARY_COLORS.WRITE_500,
                tabBarStyle: {
                    padding: 5,
                    backgroundColor: theme.PRIMARY_COLORS.WRITE_200,
                }
            }}
        >
            <Screen
                name='Chat'
                component={Chat}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {focused ? (
                                <ChatCircleDots
                                    size={18}
                                    weight="bold"
                                    color={focused ? theme.PRIMARY_COLORS.BLACK_500 : theme.PRIMARY_COLORS.WRITE_100}
                                />
                            ) : (
                                <ChatCircleDots
                                    size={18}
                                    weight="fill"
                                    color={focused ? theme.PRIMARY_COLORS.BLACK_500 : theme.PRIMARY_COLORS.WRITE_100}
                                />
                            )}
                        </View>
                    )
                }}
            />
            <Screen
                name='People'
                component={People}
            />
        </Navigator>
    )
}
