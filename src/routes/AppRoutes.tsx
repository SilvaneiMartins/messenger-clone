import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TabRoutes } from './TabRoutes';
import { Call } from '../screens/App/Call';
import { Profile } from '../screens/App/Profile';
import { Lingando } from '../screens/App/Ligando';
import { FindPhone } from '../screens/App/FindPhone';
import { ChatVideo } from '../screens/App/ChatVideo';
import { ChatMessage } from '../screens/App/ChatMessage';

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

            <Screen name="Call" component={Call} />
            <Screen name="Profile" component={Profile} />
            <Screen name="Lingando" component={Lingando} />
            <Screen name="FindPhone" component={FindPhone} />
            <Screen name="ChatVideo" component={ChatVideo} />
            <Screen name="ChatMessage" component={ChatMessage} />
        </Navigator>
    )
}
