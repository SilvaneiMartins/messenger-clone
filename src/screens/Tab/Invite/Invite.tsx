import React from 'react';
import { useTheme } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import {
    Circle,
    VideoCamera,
    ShareNetwork,
    HandsClapping,
} from 'phosphor-react-native';
import {
    Box,
    Center,
    HStack,
    Pressable,
    Text,
    VStack,
    FlatList,
    Button,
    Avatar,
    Heading,
} from 'native-base';

import { HeaderChat } from '../../../components';
import { InputSearch } from '../../../components';
import { dataContato } from '../../../utils/DataContato';

export const Invite = () => {
    const { PRIMARY_COLORS, LINEAR_GRADIENT, STATE_COLORS } = useTheme();

    const sendInvite = () => {
        console.warn('Convite Enviado.');
    }

    return (
        <VStack
            flex={1}
            backgroundColor={PRIMARY_COLORS.WRITE_100}
        >
            <HeaderChat
                title='Convidar'
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

            <Box
                paddingY={3}
            >
                <InputSearch />

                <FlatList
                    contentContainerStyle={{
                        paddingBottom: 250,
                    }}
                    data={dataContato}
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
                                >{item.receiveMessage}</Text>
                            </Box>
                            <Box
                                paddingX={2}
                            >
                                <Pressable onPress={sendInvite}>
                                    <Circle
                                        size={32}
                                        weight="light"
                                    />
                                </Pressable>
                            </Box>
                        </Box>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </Box>
        </VStack>
    )
}
