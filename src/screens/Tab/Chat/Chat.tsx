import React from 'react';
import { useTheme } from 'styled-components/native';
import {
    Box,
    VStack,
    Input,
    Center,
    Text,
    Button,
} from 'native-base';
import {
    UsersThree,
    MagnifyingGlass,
    PencilSimpleLine
} from 'phosphor-react-native';

import { HeaderChat } from '../../../components';

export const Chat = () => {
    const { PRIMARY_COLORS, FONTS } = useTheme();

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
            </Box>
        </VStack>
    )
}
