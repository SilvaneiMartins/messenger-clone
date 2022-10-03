import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AccountScreen } from '../screens/Auth/AccountScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
    return (
        <Navigator
            initialRouteName='Account'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Account" component={AccountScreen} />
        </Navigator>
    )
}
