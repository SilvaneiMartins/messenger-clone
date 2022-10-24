import React from 'react';
import { useTheme } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import {
    VideoCamera,
    HandsClapping,
    ShareNetwork
} from 'phosphor-react-native';
import {
    Box,
    Center,
    HStack,
    Pressable,
    Text,
    VStack
} from 'native-base';

import { HeaderChat } from '../../../components';

export const Invite = () => {
    const { PRIMARY_COLORS, LINEAR_GRADIENT, STATE_COLORS } = useTheme();

    return (
        <VStack>
            <HeaderChat
                title='Convidar'
                rightIconOne
            />

            <HStack
                marginLeft={5}
                flexDirection={'row'}
                alignItems={'center'}
            >
                <LinearGradient
                    locations={[0, 0.9]}
                    end={{ x: 0.3, y: 0 }}
                    start={{ x: 0, y: 0.5 }}
                    colors={[LINEAR_GRADIENT.PURPLE, LINEAR_GRADIENT.RED]}
                    style={{
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 20,
                    }}
                >
                    <Box
                        width={[88]}
                        height={[95]}
                        alignItems={'center'}
                        justifyContent={'center'}
                        borderTopLeftRadius={[20]}
                        borderBottomLeftRadius={[20]}
                    >
                        <VideoCamera
                            size={45}
                            weight="fill"
                            color={PRIMARY_COLORS.WRITE_100}
                        />
                    </Box>
                </LinearGradient>

                <HStack
                    // flex={1}
                    width={[270]}
                    height={[95]}
                    alignItems={'center'}
                    borderTopRightRadius={[20]}
                    borderBottomRightRadius={[20]}
                    backgroundColor={PRIMARY_COLORS.WRITE_400}
                >
                    <Box
                        flex={1}
                        marginX={3}
                    >
                        <Box
                            flexDirection={'row'}
                        >
                            <Box
                                width={[12]}
                                height={[12]}
                                alignItems='center'
                                borderRadius={'full'}
                                justifyContent={'center'}
                                backgroundColor={PRIMARY_COLORS.WRITE_100}
                            >
                                <HandsClapping
                                    size={32}
                                    weight="fill"
                                    color={STATE_COLORS.ORANGE}
                                />
                            </Box>
                            <Box>
                                <Text
                                    fontSize={14}
                                    marginLeft={2}
                                    fontWeight={'bold'}
                                >de Silvanei Martins</Text>
                                <Text
                                    fontSize={17}
                                    marginLeft={2}
                                    fontWeight={'bold'}
                                    color={LINEAR_GRADIENT.RED}
                                >Sala Privada</Text>
                            </Box>
                        </Box>
                        <Text
                            fontSize={14}
                            marginLeft={2}
                            fontWeight={'normal'}
                        >msngr.com/silvaneimartins</Text>
                    </Box>

                    <Pressable
                        paddingY={5}
                        marginRight={5}
                        paddingLeft={2}
                    >
                        <ShareNetwork
                            size={32}
                            weight="fill"
                            color={LINEAR_GRADIENT.BLUE}
                        />
                    </Pressable>
                </HStack>
            </HStack>
            <Center
                marginTop={3}
                flexDirection={'row'}
            >
                <Text
                    fontSize={13}
                    marginRight={2}
                >Qualquer pessoa pode pode participar.</Text>
                <Pressable>
                    <Text
                        fontSize={15}
                        fontWeight={'extrabold'}
                    >Editar</Text>
                </Pressable>
            </Center>
        </VStack>
    )
}
