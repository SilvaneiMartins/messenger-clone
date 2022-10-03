import React from 'react';
import { View, StatusBar } from 'react-native';
import { NativeBaseProvider } from "native-base";
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import theme from './styles/theme';
import { Routes } from './routes';

const MyApp = () => {
    return (
        <NativeBaseProvider>
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <StatusBar
                        translucent
                        barStyle='dark-content'
                        backgroundColor={theme.BACKGROUND.LIGHT}
                    />

                    <View
                        style={{
                            flex: 1,
                            backgroundColor: theme.BACKGROUND.LIGHT,
                        }}
                    >
                        <Routes />
                    </View>
                </NavigationContainer>
            </ThemeProvider>
        </NativeBaseProvider>
    )
}

export default MyApp
