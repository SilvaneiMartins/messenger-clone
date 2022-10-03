import React from 'react';
import { useTheme } from 'styled-components/native';

import { Center, Box, Image, Heading, Text, Button, VStack } from 'native-base';
import FindImage from '../../../assets/Find.png';

export const FindPhone = () => {
    const { PRIMARY_COLORS, LINEAR_GRADIENT } = useTheme();

    return (
        <VStack
            flex={1}
        >
            <Box
                flex={1}
                backgroundColor={PRIMARY_COLORS.WRITE_100}
            >
                <Center>
                    <Image
                        alt='Find'
                        width={250}
                        height={250}
                        marginTop={20}
                        source={FindImage}
                    />
                </Center>

                <Box
                    padding={2}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Heading
                        textAlign={'center'}
                    >
                        Encontre seus contatos de telefone no Messenger
                    </Heading>
                </Box>

                <Box
                    padding={5}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Text
                        textAlign={'justify'}
                    >
                        O upload contínuo de seus contatos ajuda o Facebook e o Messenger a sugerir conexões e fornecer e melhorar anúncios para você e outras pessoas. e oferecer um melhor serviço.
                    </Text>
                    <Button
                        variant={'unstyled'}
                        position={'absolute'}
                        right={3}
                        bottom={2}
                    >
                        <Text
                            bold
                            fontSize={'md'}
                            color={LINEAR_GRADIENT.RED}
                        >Saber mais</Text>
                    </Button>
                </Box>
            </Box>

            <Box
                paddingLeft={10}
                paddingRight={10}
                backgroundColor={PRIMARY_COLORS.WRITE_100}
            >
                <Button
                    borderRadius={30}
                    backgroundColor={LINEAR_GRADIENT.BLUE}
                >
                    <Text
                        bold
                        color={PRIMARY_COLORS.WRITE_100}
                    >LIGAR</Text>
                </Button>
            </Box>
            <Box
                padding={3}
                paddingLeft={10}
                paddingRight={10}
                backgroundColor={PRIMARY_COLORS.WRITE_100}
            >
                <Button
                    variant={'unstyled'}
                    borderRadius={30}
                >
                    <Text
                        bold
                        color={PRIMARY_COLORS.BLACK_100}
                    >AGORA NÃO</Text>
                </Button>
            </Box>
        </VStack>
    )
}
