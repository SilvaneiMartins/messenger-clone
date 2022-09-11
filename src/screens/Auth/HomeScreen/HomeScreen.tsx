import React from 'react';
import { useTheme } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Box, Image, Text, Heading, Stack } from 'native-base';

import LogoPng from '../../../assets/Logo.png';

export const HomeScreen = (props: any) => {
    const { ASSORTED_COLOR, LINEAR_GRADIENT, PRIMARY_COLORS } = useTheme();

    return (
        <Stack
            flex={1}
        >
            <Box
                h={400}
                alignItems='center'
                justifyContent='center'
            >
                <Image
                    size='xl'
                    source={LogoPng}
                    resizeMethod='auto'
                    alt='Messenger Clone'
                />
            </Box>

            <Box
                alignItems='center'
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 20,
                }}
            >
                <Text
                    color={ASSORTED_COLOR.TEXT}
                >from</Text>

                <LinearGradient
                    style={{
                        flex: 1,
                        paddingLeft: 15,
                        paddingRight: 15,
                        borderRadius: 30,
                        marginBottom: 15,
                    }}
                    colors={[LINEAR_GRADIENT.BLUE, LINEAR_GRADIENT.PURPLE, LINEAR_GRADIENT.RED]}
                    start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}
                >
                    <Heading
                        fontSize={'lg'}
                        color={PRIMARY_COLORS.WRITE_100}
                    >FACEBOOK</Heading>
                </LinearGradient>
            </Box>
        </Stack>
    )
}
