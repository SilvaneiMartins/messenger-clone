import React from 'react';
import { useTheme } from 'styled-components/native';
import { MonitorPlay, CircleWavyCheck } from 'phosphor-react-native';
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
} from 'native-base';
import {
    UsersThree,
    MagnifyingGlass,
    PencilSimpleLine
} from 'phosphor-react-native';

import { data } from '../../../utils/Data';
import { HeaderChat } from '../../../components';
import { dataContato } from '../../../utils/DataContato';

export const Chat = () => {
    const { PRIMARY_COLORS, LINEAR_GRADIENT, STATE_COLORS } = useTheme();

    return (
        <VStack
            flex={1}
            backgroundColor={PRIMARY_COLORS.WRITE_100}
        >
            <HeaderChat
                title='Mensagem'
                rightIconTwo
            />

            <Box
                paddingLeft={5}
                paddingRight={5}
            >
                <Input
                    variant="outline"
                    placeholderTextColor={PRIMARY_COLORS.GRAY_900}
                    InputLeftElement={
                        <MagnifyingGlass
                            size={25}
                            weight="fill"
                            color={PRIMARY_COLORS.BLACK_100}
                            style={{
                                marginLeft: 10,
                            }}
                        />
                    }
                    bg={PRIMARY_COLORS.WRITE_300}
                    borderRadius={30}
                    fontSize={14}
                    fontWeight='light'
                    fontFamily='mono'
                    marginBottom={2}
                    placeholder='Pesquisar contato'
                    _light={{
                        _focus: {
                            bg: PRIMARY_COLORS.WRITE_400,
                            borderColor: PRIMARY_COLORS.GRAY_100,
                            placeholderTextColor: 'black',
                        }
                    }}
                />
            </Box>

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
                marginLeft={7}
                color={LINEAR_GRADIENT.PURPLE}
            >Lista de contato</Text>

            <Box
                flex={1}
                marginLeft={3}
            >
                <FlatList
                        data={dataContato}
                        renderItem={({ item }) => (
                            <>
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
                                        backgroundColor={LINEAR_GRADIENT.BLUE}
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
                            </>
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
