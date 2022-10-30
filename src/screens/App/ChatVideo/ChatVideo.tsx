import React from 'react';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import {
    Avatar,
    Box,
    Button,
    FlatList,
    Heading,
    Pressable,
    Text,
    VStack,
} from 'native-base';

import { dataContato } from '../../../utils/DataContato';
import { InputSearch, HeaderMessage } from '../../../components';

export const ChatVideo = () => {
    const navigation = useNavigation();
    const { PRIMARY_COLORS, STATE_COLORS } = useTheme();

    const handleLigando = () => {
        navigation.navigate('Lingando');
    }

    return (
        <VStack
            flex={1}
            backgroundColor={PRIMARY_COLORS.WRITE_100}
        >
            <HeaderMessage
                title={'Chat Vídeo'}
                subTitle={'Grupo de Vídeo'}
                iconRight
                typeAudio
                typeVideo
                typeAdd
            />

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
                                <Pressable
                                    width={'16'}
                                    height={[8]}
                                    alignItems={'center'}
                                    borderRadius={'full'}
                                    onPress={handleLigando}
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
            </Box>
        </VStack>
    )
}
