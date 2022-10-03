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
                        backgroundColor={theme.PRIMARY_COLORS.WRITE_100}
                    />

                    <View
                        style={{
                            flex: 1,
                            backgroundColor: theme.PRIMARY_COLORS.WRITE_100,
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
