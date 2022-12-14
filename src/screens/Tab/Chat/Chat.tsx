import React from 'react';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { MonitorPlay, CircleWavyCheck } from 'phosphor-react-native';
import { UsersThree, PencilSimpleLine } from 'phosphor-react-native';
import {
    Box,
    VStack,
    Input,
    Center,
    Text,
    Button,
    FlatList,
    Avatar,
    Heading,
    Icon,
    Pressable,
} from 'native-base';

import { data } from '../../../utils/Data';
import { HeaderChat } from '../../../components';
import { InputSearch } from '../../../components';
import { dataContato } from '../../../utils/DataContato';

export const Chat = () => {
    const { PRIMARY_COLORS, LINEAR_GRADIENT, STATE_COLORS } = useTheme();
    const navigation = useNavigation();

    const handleChatMessagem = () => {
        navigation.navigate('ChatMessage');
    }

    return (
        <VStack
            flex={1}
            backgroundColor={PRIMARY_COLORS.WRITE_100}
        >
            <HeaderChat
                iconRight
                typeCamera
                typeCreate
                typeChatVideo
                title='Chat'
            />

            <InputSearch />

            <Box
                flexDirection={'row'}
            >
                <FlatList
                    data={data}
                    horizontal
                    marginLeft={5}
                    renderItem={({ item }) => (
                        <>
                            <Button
                                width={20}
                                height={20}
                                marginRight={1.5}
                                variant='ghost'
                                borderRadius={'full'}
                                backgroundColor={PRIMARY_COLORS.WRITE_500}
                            >
                                <Avatar
                                    size={'lg'}
                                    source={{ uri: item.avatarUrl }}
                                >
                                    <Avatar.Badge
                                        bg={STATE_COLORS.GREEN}
                                    />
                                </Avatar>
                            </Button>
                        </>
                    )}
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={
                        <Button
                            width={20}
                            height={20}
                            marginRight={2}
                            borderRadius={'full'}
                            backgroundColor={PRIMARY_COLORS.WRITE_500}
                        >
                            <MonitorPlay
                                size={40}
                                weight="fill"
                            />
                        </Button>
                    }
                />
            </Box>

            <Text
                bold
                marginTop={2}
                fontSize={'md'}
                marginLeft={5}
                paddingY={3}
                color={LINEAR_GRADIENT.PURPLE}
            >Lista de contato</Text>

            <Box
                flex={1}
                marginLeft={3}
            >
                <FlatList
                    data={dataContato}
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={handleChatMessagem}
                        >
                            <Box
                                flexDirection={'row'}
                                alignItems={'center'}
                            >
                                <Button
                                    padding={'1.5'}
                                    marginRight={2}
                                    variant={'ghost'}
                                    marginBottom={'1'}
                                    borderRadius={'full'}
                                    backgroundColor={PRIMARY_COLORS.WRITE_500}
                                    onPress={handleChatMessagem}
                                >
                                    <Avatar
                                        size={'md'}
                                        source={{ uri: item.avatarUrl }}
                                    >
                                        <Avatar.Badge
                                            bg={STATE_COLORS.GREEN}
                                        />
                                    </Avatar>
                                </Button>
                                <Box
                                    flex={1}
                                >
                                    <Heading
                                        fontSize={'lg'}
                                    >{item.fullName}</Heading>
                                    <Box
                                        flexDirection={'row'}
                                    >
                                        <Text
                                            color={PRIMARY_COLORS.WRITE_700}
                                        >{item.recentText}</Text>
                                        <Text
                                            marginLeft={5}
                                            color={PRIMARY_COLORS.WRITE_700}
                                        >{item.timeStamp}</Text>
                                    </Box>
                                </Box>
                                <Button
                                    variant={'unstyled'}
                                >
                                    <CircleWavyCheck
                                        size={22}
                                        weight="fill"
                                        color={STATE_COLORS.GREEN}
                                    />
                                </Button>
                            </Box>
                        </Pressable>
                    )}
                />
            </Box>

            {/* <Box
                flex={1}
                marginTop={'32'}
                alignItems={'center'}
            >
                <Text
                    bold
                    fontSize={'3xl'}
                >Iniciar</Text>
                <Box
                    marginTop={5}
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Text
                        fontSize={'md'}
                        fontFamily={'heading'}
                    >Toque</Text>
                    <Button
                        variant={'unstyled'}
                    >
                        <PencilSimpleLine size={20} weight="fill" />
                    </Button>
                    <Text
                        fontSize={'md'}
                    >para enviar mensagem</Text>
                </Box>
                <Box
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Text
                        fontSize={'md'}
                        fontFamily={'heading'}
                    >Toque</Text>
                    <Button
                        variant={'unstyled'}
                    >
                        <UsersThree size={20} weight="fill" />
                    </Button>
                    <Text
                        fontSize={'md'}
                        fontFamily={'heading'}
                    >para encontrar pessoas</Text>
                </Box>
            </Box> */}
        </VStack>
    )
}
