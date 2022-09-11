import React from 'react';
import { View, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from './styles/theme';

const MyApp = () => {
    return (
        <ThemeProvider theme={theme}>
            <View>
                <Text>MyApp</Text>
            </View>
        </ThemeProvider>
    )
}

export default MyApp
