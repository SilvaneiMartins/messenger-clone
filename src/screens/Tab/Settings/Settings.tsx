import React from 'react';
import { useTheme } from 'styled-components/native';
import {
    Bell,
    Camera,
    LockKey,
    MagnifyingGlass,
    MarkerCircle,
    Phone, ThumbsUp, Trash, User, VideoCamera,
} from 'phosphor-react-native';
import {
    Avatar,
    Center,
    Heading,
    HStack,
    Image,
    Text,
    View,
    VStack,
    Pressable,
    Box,
    ScrollView,
} from 'native-base';

import { HeaderChat } from '../../../components';

export const Settings = () => {
    const { PRIMARY_COLORS } = useTheme();

    return (
        <VStack
            flex={1}
            backgroundColor={PRIMARY_COLORS.WRITE_100}
        >
            <HeaderChat
                title='Configuração'
                rightIconOne
            />

            <Center>
                <Avatar
                    size={'2xl'}
                    source={{ uri: 'https://avatars.githubusercontent.com/u/4657811?v=4' }}
                />
                <Heading
                    mt={'2'}
                >Silvanei Martins</Heading>
            </Center>

            <HStack
                marginTop={5}
                paddingLeft={10}
                paddingRight={10}
                alignItems={'center'}
                flexDirection={'row'}
                justifyContent={'center'}
            >
                <Pressable
                    paddingRight={3}
                    alignItems={'center'}
                >
                    <View
                        padding={2}
                        borderRadius={'full'}
                        backgroundColor={PRIMARY_COLORS.WRITE_400}
                    >
                        <Phone size={35} weight="light" />
                    </View>
                    <Text
                        marginTop={3}
                    >Audio</Text>
                </Pressable>

                <Pressable
                    paddingRight={3}
                    alignItems={'center'}
                >
                    <View
                        padding={2}
                        borderRadius={'full'}
                        backgroundColor={PRIMARY_COLORS.WRITE_400}
                    >
                        <VideoCamera size={35} weight="light" />
                    </View>
                    <Text
                        marginTop={3}
                    >Vídeo</Text>
                </Pressable>

                <Pressable
                    paddingRight={3}
                    alignItems={'center'}
                >
                    <View
                        padding={2}
                        borderRadius={'full'}
                        backgroundColor={PRIMARY_COLORS.WRITE_400}
                    >
                        <User size={35} weight="light" />
                    </View>
                    <Text
                        marginTop={3}
                    >Perfil</Text>
                </Pressable>

                <Pressable
                    alignItems={'center'}
                >
                    <View
                        padding={2}
                        borderRadius={'full'}
                        backgroundColor={PRIMARY_COLORS.WRITE_400}
                    >
                        <Bell size={35} weight="light" />
                    </View>
                    <Text
                        marginTop={3}
                    >Mudo</Text>
                </Pressable>
            </HStack>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <VStack
                    marginTop={3}
                >
                    <Box
                        paddingX={7}
                        paddingY={2}
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Text
                            fontSize={18}
                            fontWeight={'bold'}
                        >Theme</Text>
                        <MarkerCircle size={28} weight="fill" />
                    </Box>

                    <Box
                        paddingX={7}
                        paddingY={2}
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Text
                            fontSize={18}
                            fontWeight={'bold'}
                        >Emoji</Text>
                        <ThumbsUp size={28} weight="fill" />
                    </Box>

                    <Box
                        paddingX={7}
                        paddingY={2}
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Text
                            fontSize={18}
                            fontWeight={'bold'}
                        >Nikenames</Text>
                    </Box>
                </VStack>

                <Text
                    marginTop={3}
                    marginLeft={7}
                    color={PRIMARY_COLORS.WRITE_500}
                >Mais configurações</Text>


                <VStack
                    marginTop={3}
                >
                    <Box
                        paddingX={7}
                        paddingY={2}
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Text
                            fontSize={18}
                            fontWeight={'bold'}
                        >Ver fotos e vídeos</Text>
                        <Camera size={28} weight="fill" />
                    </Box>

                    <Box
                        paddingX={7}
                        paddingY={2}
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Text
                            fontSize={18}
                            fontWeight={'bold'}
                        >Pesquisar na conversa</Text>
                        <MagnifyingGlass size={28} weight="fill" />
                    </Box>

                    <Box
                        paddingX={7}
                        paddingY={2}
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Text
                            fontSize={18}
                            fontWeight={'bold'}
                        >Notificações</Text>
                        <Bell size={28} weight="fill" />
                    </Box>
                </VStack>


                <Text
                    marginTop={3}
                    marginLeft={7}
                    color={PRIMARY_COLORS.WRITE_500}
                >On</Text>

                <VStack>
                    <Box
                        paddingX={7}
                        paddingY={2}
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Text
                            fontSize={18}
                            fontWeight={'bold'}
                        >Ir para conversa secreta</Text>
                        <LockKey size={28} weight="fill" />
                    </Box>

                    <Box
                        paddingX={7}
                        paddingY={2}
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Text
                            fontSize={18}
                            fontWeight={'bold'}
                        >Deletar todas as conversas</Text>
                        <Trash size={28} weight="fill" />
                    </Box>
                </VStack>
            </ScrollView>
        </VStack>
    )
}
