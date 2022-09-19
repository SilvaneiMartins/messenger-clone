import React from 'react';
import { useTheme } from 'styled-components/native';
import { Box, Image, Spacer, Stack, View } from 'native-base';

import LogoPng from '../../../assets/Logo.png';
import { InputPersonsalizado } from '../../../components/InputPersonalizado';
import {
    InputEmail,
    ButtonAccount,
    InputPassword,
    ButtonUnstyled,
    ButtonCadastro,
} from '../../../components';

export const AccountScreen = () => {
    const { PRIMARY_COLORS } = useTheme();

    return (
        <Stack
            flex={1}
        >
            <Box
                h={400}
                alignItems='center'
                justifyContent='center'
            >
                <Image
                    size='xl'
                    source={LogoPng}
                    resizeMethod='auto'
                    alt='Messenger Clone'
                />
            </Box>

            <Box
                flex={1}
                alignItems='center'
            >
                <Box
                    w={{
                        md: '25%',
                        base: '85%'
                    }}
                >
                    <InputEmail
                        autoCorrect={false}
                        autoCapitalize='none'
                        keyboardType='default'
                        placeholder="Digite seu e-mail"
                    />

                    <InputPassword
                        autoCorrect={false}
                        autoCapitalize='none'
                        keyboardType='default'
                        placeholder="Digite sua senha"
                    />
                </Box>

                <ButtonAccount
                    title='Entar'
                    disable={false}
                    variant='subtle'
                    loading={false}
                    onPress={() => { }}
                    loadingText='Carregando...'
                    backGroundColor={PRIMARY_COLORS.WRITE_500}
                />

                <ButtonCadastro
                    title='Não tem conta? criar conta'
                    disable={false}
                    variant='subtle'
                    loading={false}
                    onPress={() => { }}
                    loadingText='Carregando...'
                    backGroundColor={PRIMARY_COLORS.WRITE_500}
                />

                <ButtonUnstyled
                    onPress={() => { }}
                    title='Esqueceu sua senha?'
                />
            </Box>
        </Stack>
    )
}
