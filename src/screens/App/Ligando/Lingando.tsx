import React from 'react';
import { ImageBackground } from 'react-native';
import { useTheme } from 'styled-components/native';
import { ArrowLeft, CaretUp, PaintBrush, PhoneX } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import {
    Box,
    View,
    Text,
    VStack,
    HStack,
    Button,
    Heading,
    FlatList,
    Pressable,
    StatusBar,
    Avatar,
} from 'native-base';

import { ligando } from '../../../utils/Ligando';
import BgCallPng from '../../../assets/bgcall.jpg';

export const Lingando = () => {
    const navigation = useNavigation();
    const { PRIMARY_COLORS, STATE_COLORS } = useTheme();

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <>
            <StatusBar hidden />
            <ImageBackground
                source={BgCallPng}
                resizeMode="cover"
                style={{
                    opacity: 0.8,
                    height: '100%',
                }}
            >
                <HStack
                    padding={10}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Pressable onPress={goBack}>
                        <ArrowLeft
                            size={30}
                            weight='bold'
                            color={PRIMARY_COLORS.BLACK_500}
                        />
                    </Pressable>

                    <Pressable
                        padding={2}
                        onPress={goBack}
                        borderRadius={'full'}
                        backgroundColor={STATE_COLORS.RED}
                    >
                        <PhoneX
                            size={32}
                            weight="bold"
                            color={PRIMARY_COLORS.WRITE_100}
                        />
                    </Pressable>
                </HStack>

                <HStack
                    marginTop={10}
                    alignItems={'center'}
                    justifyContent={'center'}
                    flexDirection={'column'}
                >
                    <Heading
                        fontSize={'2xl'}
                        lineHeight={23.44}
                        fontWeight={'extrabold'}
                    >
                        Silvanei Martins
                    </Heading>
                    <Text
                        fontSize={[16]}
                        marginTop={5}
                        textAlign={'center'}
                        fontWeight={'bold'}
                    >
                        Aguarde alguns minutos {'\n'} para os amigos participarem...
                    </Text>

                    <Button
                        variant={'solid'}
                        marginTop={10}
                        borderRadius={'full'}
                    >
                        <Text
                            fontSize={[16]}
                            fontFamily={'Roboto'}
                            fontWeight={'semibold'}
                            color={PRIMARY_COLORS.WRITE_100}
                        >
                            Compartilhar Link
                        </Text>
                    </Button>
                </HStack>

                <HStack
                    flex={1}
                    marginTop={10}
                    flexDirection={'column'}
                >
                    <VStack
                        flex={1}
                        marginTop={10}
                    >
                        <Box
                            top={10}
                            width={'100%'}
                            alignItems={'center'}
                            position={'absolute'}
                        >
                            <CaretUp
                                size={32}
                                weight="bold"
                                color={PRIMARY_COLORS.WRITE_150}
                            />
                            <Text
                                fontSize={[16]}
                                color={PRIMARY_COLORS.WRITE_150}
                            >
                                Ver tudo (04)
                            </Text>
                        </Box>

                        <VStack
                            bottom={1}
                            width={'100%'}
                            position={'absolute'}
                        >
                            <FlatList
                                data={ligando}
                                marginTop={2}
                                marginLeft={5}
                                marginRight={1}
                                marginBottom={10}
                                renderItem={({ item }) => (
                                    <Box
                                        flexDirection={'row'}
                                        alignItems={'center'}
                                    >
                                        <Button
                                            width={10}
                                            height={10}
                                            marginBottom={1}
                                            variant='ghost'
                                            borderRadius={'full'}
                                            backgroundColor={PRIMARY_COLORS.WRITE_500}
                                        >
                                            <Avatar
                                                size={'sm'}
                                                source={{ uri: item.avatarUrl }}
                                            />
                                        </Button>
                                        <Box
                                            flex={1}
                                        >
                                            <Heading
                                                fontSize={'sm'}
                                                marginLeft={2}
                                                numberOfLines={1}
                                            >{item.fullName}</Heading>
                                            <Text
                                                marginLeft={2}
                                                fontSize={[11]}
                                                numberOfLines={1}
                                                color={PRIMARY_COLORS.WRITE_800}
                                            >{item.recentText}</Text>
                                        </Box>
                                        <Box
                                            paddingX={2}
                                        >
                                            <Pressable
                                                width={'16'}
                                                height={[8]}
                                                alignItems={'center'}
                                                borderRadius={'full'}
                                                onPress={() => { }}
                                                justifyContent={'center'}
                                                backgroundColor={STATE_COLORS.RED}
                                            >
                                                <Text
                                                    fontSize={15}
                                                    fontWeight={'extrabold'}
                                                    color={PRIMARY_COLORS.WRITE_100}
                                                >Ligar</Text>
                                            </Pressable>
                                        </Box>
                                    </Box>
                                )}
                                showsVerticalScrollIndicator={false}
                            />
                        </VStack>
                    </VStack>
                    <Box
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        marginBottom={5}
                    >
                        <Text
                            fontSize={[14]}
                            fontWeight={'medium'}
                            color={PRIMARY_COLORS.WRITE_150}
                        >Saiba como o Aplicativo</Text>
                        <Pressable>
                            <Text
                                marginLeft={1}
                                fontSize={[14]}
                                fontWeight={'medium'}
                                color={STATE_COLORS.BLUE}
                            >Protege sua privacidade</Text>
                        </Pressable>
                    </Box>
                </HStack>
            </ImageBackground>
        </>
    )
}
