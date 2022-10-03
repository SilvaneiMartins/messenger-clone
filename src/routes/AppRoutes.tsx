import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Chat } from '../screens/App/Chat';
import { Profile } from '../screens/App/Profile';
import { FindPhone } from '../screens/App/FindPhone';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
    return (
        <Navigator
            initialRouteName='Chat'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="FindPhone" component={FindPhone} />
            <Screen name="Profile" component={Profile} />
            <Screen name='Chat' component={Chat} />
        </Navigator>
    )
}
