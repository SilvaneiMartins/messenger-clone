import React, { useState } from 'react';
import { useTheme } from 'styled-components/native';
import {
    Avatar,
    Box,
    Button,
    Center,
    FlatList,
    Heading,
    Text,
    VStack
} from 'native-base';

import { dataContato } from '../../../utils/DataContato';
import { HeaderChat } from '../../../components';
import { OptionLeft, OptionLRight, OptionTitle, Options } from './styles';

export const People = () => {
    const { PRIMARY_COLORS, LINEAR_GRADIENT, STATE_COLORS } = useTheme();

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
                    >Ativos (158)</OptionTitle>
                </OptionLeft>
                <OptionLRight
                    active={options === 'stories'}
                    onPress={() => OptionSelectedChange('stories')}
                >
                    <OptionTitle
                        active={options === 'stories'}
                    >Stories (35)</OptionTitle>
                </OptionLRight>
            </Options>

            {options === 'active' ? (
                <Box>
                    <FlatList
                        contentContainerStyle={{
                            paddingBottom: 170,
                        }}
                        data={dataContato}
                        marginLeft={5}
                        marginTop={5}
                        renderItem={({ item }) => (
                            <Box
                                flexDirection={'row'}
                                alignItems={'center'}
                            >
                                <Button
                                    width={20}
                                    height={20}
                                    marginBottom={1}
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
                                <Heading
                                    fontSize={'lg'}
                                    marginLeft={5}
                                >{item.fullName}</Heading>
                            </Box>
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </Box>
                // <Box
                //     flex={1}
                //     padding={10}
                //     alignItems={'center'}
                //     justifyContent={'center'}
                // >
                //     <Text
                //         bold
                //         fontSize={'2xl'}
                //         textAlign={'center'}
                //     >Nenhuma {'\n'} Pessoa Ativa</Text>

                //     <Text
                //         padding={15}
                //         textAlign={'center'}
                //     >
                //         Você verá quando outros estiverem ativos aqui. Você também pode convidar mais amigos para participar do Messenger.
                //     </Text>

                //     <Button
                //         marginTop={15}
                //         width={'full'}
                //         borderRadius={30}
                //         backgroundColor={LINEAR_GRADIENT.BLUE}
                //     >
                //         <Text
                //             fontSize={'lg'}
                //             color={PRIMARY_COLORS.WRITE_100}
                //         >Convidar Pessoas</Text>
                //     </Button>
                // </Box>
            ) : (
                <Box
                    flexDirection={'row'}
                >
                    <Box>

                    </Box>
                </Box>
                // <Box
                //     flex={1}
                //     padding={10}
                //     alignItems={'center'}
                //     justifyContent={'center'}
                // >
                //     <Text
                //         bold
                //         fontSize={'2xl'}
                //         textAlign={'center'}
                //     >Compartilhar {'\n'} Stories</Text>

                //     <Text
                //         padding={15}
                //         textAlign={'center'}
                //     >
                //         Compartilhe fotos, vídeos e muito mais por 24 horas. Quando você e seus amigos compartilharem histórias, elas aparecerão aqui.
                //     </Text>

                //     <Button
                //         marginTop={15}
                //         width={'full'}
                //         borderRadius={30}
                //         backgroundColor={LINEAR_GRADIENT.BLUE}
                //     >
                //         <Text
                //             fontSize={'lg'}
                //             color={PRIMARY_COLORS.WRITE_100}
                //         >Adicionar Storie</Text>
                //     </Button>
                // </Box>
            )}
        </VStack>
    )
}
