import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'
import { useTheme } from 'styled-components/native';
import { Avatar, Box, IconButton, Text } from 'native-base';

export const HeaderChat = () => {
    const { PRIMARY_COLORS } = useTheme();

    return (
        <Box
            padding={5}
            marginTop={5}
            flexDirection={'row'}
        >
            <Box
                flex={1}
                alignItems={'center'}
                flexDirection={'row'}
            >
                <Avatar
                    marginRight={2}
                    source={{
                        uri: 'https://github.com/silvaneimartins.png'
                    }}
                />
                <Text
                    bold
                    fontSize={'2xl'}
                >Chat</Text>
            </Box>

            <Box
                flexDirection={'row'}
            >
                <IconButton
                    variant={'ghost'}
                    borderRadius={30}
                    _icon={{
                        size: 25,
                        as: Ionicons,
                        name: 'camera-outline',
                        color: PRIMARY_COLORS.BLACK_100,
                    }}
                    _pressed={{
                        backgroundColor: PRIMARY_COLORS.WRITE_400,
                    }}
                />

                <IconButton
                    variant={'ghost'}
                    borderRadius={30}
                    _icon={{
                        size: 25,
                        as: Ionicons,
                        name: 'create-outline',
                        color: PRIMARY_COLORS.BLACK_100,
                    }}
                    _pressed={{
                        backgroundColor: PRIMARY_COLORS.WRITE_400,
                    }}
                />
            </Box>
        </Box>
    )
}
