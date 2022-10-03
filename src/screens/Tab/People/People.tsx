import React, { useState } from 'react';
import { useTheme } from 'styled-components/native';
import { Box, Button, Center, Text, VStack } from 'native-base';

import { HeaderChat } from '../../../components';
import { OptionLeft, OptionLRight, OptionTitle, Options } from './styles';

export const People = () => {
    const { PRIMARY_COLORS, LINEAR_GRADIENT } = useTheme();

    const [options, setOptions] = useState<'active' | 'stories'>('active');

    const OptionSelectedChange = (optionSelected: 'active' | 'stories') => {
        setOptions(optionSelected);
    }

    return (
        <VStack
            flex={1}
            backgroundColor={PRIMARY_COLORS.WRITE_100}
        >
            <HeaderChat
                title='Pessoas'
                rightIconTwo
                rightIconOne
            />

            <Options>
                <OptionLeft
                    active={options === 'active'}
                    onPress={() => OptionSelectedChange('active')}
                >
                    <OptionTitle
                        active={options === 'active'}
                    >Ativos</OptionTitle>
                </OptionLeft>
                <OptionLRight
                    active={options === 'stories'}
                    onPress={() => OptionSelectedChange('stories')}
                >
                    <OptionTitle
                        active={options === 'stories'}
                    >Stories</OptionTitle>
                </OptionLRight>
            </Options>

            {options === 'active' ? (
                <Box
                    flex={1}
                    padding={10}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Text
                        bold
                        fontSize={'2xl'}
                        textAlign={'center'}
                    >Nenhuma {'\n'} Pessoa Ativa</Text>

                    <Text
                        padding={15}
                        textAlign={'center'}
                    >
                        Você verá quando outros estiverem ativos aqui. Você também pode convidar mais amigos para participar do Messenger.
                    </Text>

                    <Button
                        marginTop={15}
                        width={'full'}
                        borderRadius={30}
                        backgroundColor={LINEAR_GRADIENT.BLUE}
                    >
                        <Text
                            fontSize={'lg'}
                            color={PRIMARY_COLORS.WRITE_100}
                        >Convidar Pessoas</Text>
                    </Button>
                </Box>
            ) : (
                <Box
                    flex={1}
                    padding={10}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Text
                        bold
                        fontSize={'2xl'}
                        textAlign={'center'}
                    >Compartilhar {'\n'} Stories</Text>

                    <Text
                        padding={15}
                        textAlign={'center'}
                    >
                        Compartilhe fotos, vídeos e muito mais por 24 horas. Quando você e seus amigos compartilharem histórias, elas aparecerão aqui.
                    </Text>

                    <Button
                        marginTop={15}
                        width={'full'}
                        borderRadius={30}
                        backgroundColor={LINEAR_GRADIENT.BLUE}
                    >
                        <Text
                            fontSize={'lg'}
                            color={PRIMARY_COLORS.WRITE_100}
                        >Adicionar Storie</Text>
                    </Button>
                </Box>
            )}
        </VStack>
    )
}
