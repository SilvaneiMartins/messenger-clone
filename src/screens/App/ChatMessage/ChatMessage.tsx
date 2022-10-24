import React from 'react';
import { ImageBackground } from 'react-native';
import { useTheme } from 'styled-components/native';
import {
    CirclesFour,
    Camera,
    ImageSquare,
    Microphone,
    ThumbsUp,
    Smiley,
} from 'phosphor-react-native';
import {
    Box,
    HStack,
    Pressable,
    VStack,
    Input,
    Divider,
    View,
    Text,
    Center,
    Avatar,
    Heading,
} from 'native-base';

import BgPng from '../../../assets/bg.png';
import { HeaderMessage } from '../../../components';

export const ChatMessage = () => {
    const { PRIMARY_COLORS, LINEAR_GRADIENT } = useTheme();

    return (
        <VStack
            flex={1}
            backgroundColor={PRIMARY_COLORS.WRITE_100}
        >
            <HeaderMessage />

            <VStack
                flex={1}
            >
                <ImageBackground
                    source={BgPng}
                    resizeMode='cover'
                    style={{
                        flex: 1,
                    }}
                >
                    <VStack
                        flex={1}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Center>
                            <Avatar
                                size={'2xl'}
                                source={{ uri: 'https://avatars.githubusercontent.com/u/4657811?v=4' }}
                            />
                            <Heading
                                mt={'2'}
                            >Silvanei Martins</Heading>
                        </Center>

                        <Text
                            fontSize={16}
                            fontWeight={'bold'}
                        >Facebook</Text>

                        <Text
                            marginTop={5}
                            fontSize={14}
                            fontWeight={'semibold'}
                            textAlign={'center'}
                        >
                            Olá Silvanei Martins! Obrigado por entrar em {'\n'}
                            contato conosco no Messenger. Por favor, envie-nos {'\n'}
                            qualquer dúvida que possa ter.
                        </Text>

                        <Pressable
                            paddingX={5}
                            paddingY={2}
                            marginTop={5}
                            borderRadius={'full'}
                            backgroundColor={LINEAR_GRADIENT.BLUE}
                        >
                            <Text
                                fontSize={17}
                                fontWeight={'extrabold'}
                                color={PRIMARY_COLORS.WRITE_100}
                            >Ver o perfil</Text>
                        </Pressable>
                    </VStack>
                </ImageBackground>
            </VStack>

            {/* <Divider /> */}
            <HStack
                height={12}
                marginLeft={1}
                alignItems={'center'}
            >
                <Pressable
                    paddingX={1}
                    paddingY={3}
                >
                    <HStack>
                        <CirclesFour
                            size={30}
                            weight="fill"
                            color={LINEAR_GRADIENT.BLUE}
                        />
                    </HStack>
                </Pressable>
                <Pressable
                    paddingX={1}
                    paddingY={3}
                >
                    <HStack>
                        <Camera
                            size={30}
                            weight="fill"
                            color={LINEAR_GRADIENT.BLUE}
                        />
                    </HStack>
                </Pressable>
                <Pressable
                    paddingX={1}
                    paddingY={3}
                >
                    <HStack>
                        <ImageSquare
                            size={30}
                            weight="fill"
                            color={LINEAR_GRADIENT.BLUE}
                        />
                    </HStack>
                </Pressable>
                <Pressable
                    paddingX={1}
                    paddingY={3}
                >
                    <HStack>
                        <Microphone
                            size={30}
                            weight="fill"
                            color={LINEAR_GRADIENT.BLUE}
                        />
                    </HStack>
                </Pressable>
                <Box
                    flex={1}
                    height={10}
                    borderRadius={'full'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    backgroundColor={PRIMARY_COLORS.WRITE_300}
                >
                    <Input
                        size={'md'}
                        variant="rounded"
                        placeholder="Sua mensagem..."
                        _input={{
                            marginLeft: 2,
                        }}
                        style={{
                            borderWidth: 0,
                        }}
                        borderWidth={'0'}
                        InputRightElement={
                            <Pressable
                                paddingX={1}
                                paddingY={3}
                            >
                                <Smiley
                                    size={30}
                                    weight="fill"
                                    color={LINEAR_GRADIENT.BLUE}
                                />
                            </Pressable>
                        }
                    />
                </Box>
                <Pressable
                    paddingX={1}
                    paddingY={3}
                >
                    <ThumbsUp
                        size={30}
                        weight="fill"
                        color={LINEAR_GRADIENT.BLUE}
                    />
                </Pressable>
            </HStack>
        </VStack>
    )
}
