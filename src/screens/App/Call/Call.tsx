import React from 'react';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import {
    Microphone,
    VideoCamera,
    CameraRotate,
    PhoneDisconnect,
} from 'phosphor-react-native';
import {
    View,
    Text,
    StatusBar,
    VStack,
    Box,
    Pressable,
    HStack,
    Avatar,
    Center,
    Heading
} from 'native-base';

export const Call = () => {
    const navigation = useNavigation();
    const { PRIMARY_COLORS, ASSORTED_COLOR } = useTheme();

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <>
            <StatusBar hidden />
            <VStack
                flex={1}
                backgroundColor={PRIMARY_COLORS.BLACK_200}
            >
                <VStack
                    alignItems={'center'}
                    marginTop={'40'}
                >
                    <Avatar
                        size={'lg'}
                        source={{
                            uri: 'https://github.com/silvaneimartins.png',
                        }}
                    />
                    <Heading
                        marginTop={5}
                        color={PRIMARY_COLORS.WRITE_100}
                    >
                        Silvanei Martins
                    </Heading>
                    <Text
                        color={PRIMARY_COLORS.WRITE_400}
                    >
                        Ligando...
                    </Text>
                </VStack>

                <Box
                    bottom={0}
                    width={'100%'}
                    height={[137]}
                    position={'absolute'}
                    alignItems={'center'}
                    borderTopLeftRadius={36}
                    borderTopRightRadius={36}
                    backgroundColor={PRIMARY_COLORS.BLACK_700}
                >
                    <View
                        width={[16]}
                        height={[2]}
                        marginTop={4}
                        borderRadius={[5]}
                        backgroundColor={PRIMARY_COLORS.WRITE_400}
                    />

                    <VStack
                        width={'100%'}
                        flexDirection={'row'}
                        alignItems={'center'}
                        marginTop={5}
                        justifyContent={'center'}
                    >
                        <Pressable
                            width={[16]}
                            height={[16]}
                            marginRight={5}
                            borderRadius={'full'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            backgroundColor={PRIMARY_COLORS.BLACK_200}
                        >
                            <VideoCamera
                                size={32}
                                weight="bold"
                                color={PRIMARY_COLORS.WRITE_100}
                            />
                        </Pressable>

                        <Pressable
                            width={[16]}
                            height={[16]}
                            marginRight={5}
                            borderRadius={'full'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            backgroundColor={PRIMARY_COLORS.BLACK_200}
                        >
                            <Microphone
                                size={32}
                                weight="bold"
                                color={PRIMARY_COLORS.WRITE_100}
                            />
                        </Pressable>

                        <Pressable
                            width={[16]}
                            height={[16]}
                            marginRight={5}
                            borderRadius={'full'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            backgroundColor={PRIMARY_COLORS.BLACK_200}
                        >
                            <CameraRotate
                                size={32}
                                weight="bold"
                                color={PRIMARY_COLORS.WRITE_100}
                            />
                        </Pressable>

                        <Pressable
                            width={[16]}
                            height={[16]}
                            onPress={goBack}
                            borderRadius={'full'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            backgroundColor={ASSORTED_COLOR.BG_CALL}
                        >
                            <PhoneDisconnect
                                size={32}
                                weight="bold"
                                color={PRIMARY_COLORS.WRITE_100}
                            />
                        </Pressable>
                    </VStack>
                </Box>
            </VStack>
        </>
    )
}
