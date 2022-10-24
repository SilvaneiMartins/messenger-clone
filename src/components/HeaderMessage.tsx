import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Phone, VideoCamera, Info } from 'phosphor-react-native';
import {
    Avatar,
    Box,
    Divider,
    HStack,
    Pressable,
    Text,
    VStack
} from 'native-base';

export const HeaderMessage = () => {
    const { PRIMARY_COLORS } = useTheme();
    const navigation = useNavigation();

    const GoBack = () => {
        navigation.goBack();
    }

    return (
        <VStack
            paddingY={4}
            height={'20'}
            marginTop={5}
            backgroundColor={PRIMARY_COLORS.WRITE_100}
        >
            <Box
                flexDirection={'row'}
                marginBottom={5}
            >
                <HStack
                    flex={1}
                >
                    <Box
                        marginLeft={2}
                        flexDirection={'row'}
                        alignItems={'center'}
                    >
                        <TouchableOpacity onPress={GoBack}>
                            <ArrowLeft
                                size={25}
                                weight="bold"
                                color={PRIMARY_COLORS.BLACK_200}
                            />
                        </TouchableOpacity>
                        <Avatar
                            marginLeft={2}
                            size={12}
                            source={{
                                uri: 'https://github.com/silvaneimartins.png'
                            }}
                        />
                    </Box>
                    <Box
                        marginLeft={2}
                    >
                        <Text
                            fontSize={17}
                            fontWeight={'bold'}
                        >
                            Silvanei Martins
                        </Text>
                        <Text
                            color={PRIMARY_COLORS.WRITE_700}
                        >Messenger</Text>
                    </Box>
                </HStack>

                <HStack
                    marginRight={2}
                >
                    <Box
                        flexDirection={'row'}
                        alignItems={'center'}
                    >
                        <Pressable
                            padding={1.5}
                        >
                            <Phone
                                size={30}
                                weight="fill"
                                color={PRIMARY_COLORS.BLACK_200}
                            />
                        </Pressable>
                        <Pressable
                            padding={1.5}
                        >
                            <VideoCamera
                                size={30}
                                weight="fill"
                                color={PRIMARY_COLORS.BLACK_200}
                            />
                        </Pressable>
                        <Pressable
                            padding={1.5}
                        >
                            <Info
                                size={30}
                                weight="fill"
                                color={PRIMARY_COLORS.BLACK_200}
                            />
                        </Pressable>
                    </Box>
                </HStack>
            </Box>
            {/* <Divider /> */}
        </VStack>
    )
}
