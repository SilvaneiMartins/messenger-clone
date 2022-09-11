import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../../src/screens/Auth/HomeScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {

    return (
        <Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Home" component={HomeScreen} />
        </Navigator>
    )
}
