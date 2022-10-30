import React from 'react';
import { useTheme } from 'styled-components/native';

import { VStack } from 'native-base';

import { HeaderMessage } from '../../../components';
export const ChatVideo = () => {
    const { PRIMARY_COLORS } = useTheme();

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
        </VStack>
    )
}
