import React from 'react';
import { useTheme } from 'styled-components/native';
import { Box, Image, Spacer, Stack } from 'native-base';

import LogoPng from '../../../assets/Logo.png';
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
                    <InputEmail />
                    <InputPassword />
                </Box>

                <ButtonAccount
                    title='Entar'
                    disable={false}
                    variant='subtle'
                    loading={false}
                    onPress={() => {}}
                    loadingText='Carregando...'
                    backGroundColor={PRIMARY_COLORS.WRITE_500}
                />

                <ButtonCadastro
                    title='Não tem conta? criar conta'
                    disable={false}
                    variant='subtle'
                    loading={false}
                    onPress={() => {}}
                    loadingText='Carregando...'
                    backGroundColor={PRIMARY_COLORS.WRITE_500}
                />

                <ButtonUnstyled 
                    onPress={() => {}}
                    title='Esqueceu sua senha?'
                />
            </Box>
        </Stack>
    )
}
