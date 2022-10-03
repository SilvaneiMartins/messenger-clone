import React from 'react';
import { useTheme } from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons'
import {
    VStack,
    Text,
    Box,
    IconButton,
    Avatar,
    Center,
    Heading,
} from 'native-base';

import StatusImage from '../../../assets/status.png';
import UserNameImage from '../../../assets/username.png';
import LuaBlackImage from '../../../assets/luablack.png';
import NotificationImage from '../../../assets/notification.png';

export const Profile = () => {
    const { PRIMARY_COLORS } = useTheme();

    return (
        <VStack
            flex={1}
            backgroundColor={PRIMARY_COLORS.WRITE_100}
        >
            <Box
                marginTop={10}
                marginLeft={5}
                flexDirection={'row'}
                alignItems={'center'}
                backgroundColor={PRIMARY_COLORS.WRITE_100}
            >
                <IconButton
                    variant={'ghost'}
                    borderRadius={30}
                    _icon={{
                        size: 25,
                        as: Ionicons,
                        name: 'arrow-back-outline',
                        color: PRIMARY_COLORS.BLACK_100,
                    }}
                    _pressed={{
                        backgroundColor: PRIMARY_COLORS.WRITE_400,
                    }}
                />
                <Text
                    bold
                    fontSize={'md'}
                >Voltar</Text>
            </Box>

            <Box>
                <Box>
                    <Center>
                        <Avatar
                            size={'2xl'}
                            source={{
                                uri: 'https://github.com/silvaneimartins.png'
                            }}
                            borderWidth={2}
                            borderColor={PRIMARY_COLORS.WRITE_700}
                        />
                        <Heading
                            marginTop={5}
                        >Silvanei Martins</Heading>
                    </Center>
                </Box>
                <Box
                    padding={5}
                    flexDirection={'row'}
                >
                    <Avatar
                        source={LuaBlackImage}
                        marginRight={2}
                    />
                    <Box
                        justifyContent={'center'}
                    >
                        <Text
                            bold
                            fontSize={'lg'}
                        >Modo Escuro</Text>
                        <Text>desligado</Text>
                    </Box>
                </Box>
                <Box
                    paddingLeft={5}
                    flexDirection={'row'}
                >
                    <Avatar
                        source={NotificationImage}
                        marginRight={2}
                    />
                    <Box
                        justifyContent={'center'}
                    >
                        <Text
                            bold
                            fontSize={'lg'}
                        >Notificação Modo Escuro</Text>
                        <Text>desligado</Text>
                    </Box>
                </Box>

                <Text
                    marginTop={5}
                    paddingLeft={6}
                    fontSize={'md'}
                    color={PRIMARY_COLORS.WRITE_800}
                >Perfil do usuário</Text>

                <Box
                    marginTop={5}
                    paddingLeft={5}
                    flexDirection={'row'}
                >
                    <Avatar
                        source={StatusImage}
                        marginRight={2}
                    />
                    <Box
                        justifyContent={'center'}
                    >
                        <Text
                            bold
                            fontSize={'lg'}
                        >Status Ativo</Text>
                        <Text>online</Text>
                    </Box>
                </Box>

                <Box
                    marginTop={5}
                    paddingLeft={5}
                    flexDirection={'row'}
                >
                    <Avatar
                        source={UserNameImage}
                        marginRight={2}
                    />
                    <Box
                        justifyContent={'center'}
                    >
                        <Text
                            bold
                            fontSize={'lg'}
                        >Nome de Usuário</Text>
                        <Text>m.me/silvaneimartins.com</Text>
                    </Box>
                </Box>

                <Text
                    marginTop={5}
                    paddingLeft={6}
                    fontSize={'md'}
                    color={PRIMARY_COLORS.WRITE_800}
                >Preferências</Text>

                <Box
                    marginTop={5}
                    paddingLeft={5}
                    flexDirection={'row'}
                >
                    <Avatar
                        source={NotificationImage}
                        marginRight={2}
                    />
                    <Box
                        justifyContent={'center'}
                    >
                        <Text
                            bold
                            fontSize={'lg'}
                        >Privacidade</Text>
                    </Box>
                </Box>

                <Box
                    marginTop={5}
                    paddingLeft={5}
                    flexDirection={'row'}
                >
                    <Avatar
                        source={NotificationImage}
                        marginRight={2}
                    />
                    <Box
                        justifyContent={'center'}
                    >
                        <Text
                            bold
                            fontSize={'lg'}
                        >Avatar</Text>
                    </Box>
                </Box>
            </Box>
        </VStack>
    )
}
