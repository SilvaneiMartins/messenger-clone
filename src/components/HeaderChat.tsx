import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Avatar, Box, IconButton, Text } from 'native-base';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { BadgeAvatar, BadgeAvatarTitle } from '../global/Badge';

interface IHeaderChatProps {
    title: string;
    iconRight?: boolean;
    typePerson?: string;
    typeCamera?: boolean;
    typeCreate?: boolean;
    typeAddress?: boolean;
    typeChatVideo?: boolean;
}

export const HeaderChat = ({
    title,
    iconRight,
    typePerson,
    typeCamera,
    typeCreate,
    typeAddress,
    typeChatVideo,
}: IHeaderChatProps) => {
    const { PRIMARY_COLORS } = useTheme();
    const navigation = useNavigation();

    const handleChatVideo = () => {
        navigation.navigate('ChatVideo');
    };

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
                <BadgeAvatar>
                    <BadgeAvatarTitle>9+</BadgeAvatarTitle>
                </BadgeAvatar>
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
                {iconRight && (
                    <>
                        {typeCamera && (
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
                        )}
                        {typeAddress && (
                            <IconButton
                                variant={'ghost'}
                                borderRadius={30}
                                _icon={{
                                    size: 23,
                                    as: FontAwesome,
                                    name: 'address-book-o',
                                    color: PRIMARY_COLORS.BLACK_100,
                                }}
                                _pressed={{
                                    backgroundColor: PRIMARY_COLORS.WRITE_400,
                                }}
                            />
                        )}
                        {typePerson && (
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
                        {typeCreate && (
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
                        {typeChatVideo && (
                            <IconButton
                                onPress={handleChatVideo}
                                variant={'ghost'}
                                borderRadius={30}
                                _icon={{
                                    size: 25,
                                    as: MaterialCommunityIcons,
                                    name: 'message-video',
                                    color: PRIMARY_COLORS.BLACK_100,
                                }}
                                _pressed={{
                                    backgroundColor: PRIMARY_COLORS.WRITE_400,
                                }}
                            />
                        )}
                    </>
                )}
            </Box>
        </Box>
    )
}
