import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'
import { useTheme } from 'styled-components/native';
import { Avatar, Box, IconButton, Text } from 'native-base';

interface IHeaderChatProps {
    title: string;
    rightIconOne?: boolean,
    rightIconTwo?: boolean,
}

export const HeaderChat = ({
    title,
    rightIconOne,
    rightIconTwo,
}: IHeaderChatProps) => {
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
                >{title}</Text>
            </Box>

            <Box
                flexDirection={'row'}
            >
                {!rightIconOne ? (
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
                ) : (
                    <IconButton
                        variant={'ghost'}
                        borderRadius={30}
                        _icon={{
                            size: 25,
                            as: Ionicons,
                            name: 'person-add-outline',
                            color: PRIMARY_COLORS.BLACK_100,
                        }}
                        _pressed={{
                            backgroundColor: PRIMARY_COLORS.WRITE_400,
                        }}
                    />
                )}

                {rightIconTwo && (
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
                )}
            </Box>
        </Box>
    )
}
