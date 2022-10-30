import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TabRoutes } from './TabRoutes';
import { Profile } from '../screens/App/Profile';
import { FindPhone } from '../screens/App/FindPhone';
import { ChatVideo } from '../screens/Auth/ChatVideo/ChatVideo';
import { ChatMessage } from '../screens/App/ChatMessage/ChatMessage';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
    return (
        <Navigator
            initialRouteName='TabRoutes'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="TabRoutes" component={TabRoutes} />

            <Screen name="Profile" component={Profile} />
            <Screen name="FindPhone" component={FindPhone} />
            <Screen name="ChatVideo" component={ChatVideo} />
            <Screen name="ChatMessage" component={ChatMessage} />
        </Navigator>
    )
}
