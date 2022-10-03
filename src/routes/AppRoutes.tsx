import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Profile } from '../screens/App/Profile';
import { FindPhone } from '../screens/App/FindPhone';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
    return (
        <Navigator
            initialRouteName='Profile'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="FindPhone" component={FindPhone} />
            <Screen name="Profile" component={Profile} />
        </Navigator>
    )
}
