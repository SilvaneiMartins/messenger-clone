import React from 'react';
import { VStack } from 'native-base';
import { useTheme } from 'styled-components/native';

import { HeaderChat } from '../../../components';

export const Favorite = () => {
    const { PRIMARY_COLORS } = useTheme();

    return (
        <VStack
            flex={1}
            backgroundColor={PRIMARY_COLORS.WRITE_100}
        >
            <HeaderChat
                title='Favoritos'
                rightIconTwo
                rightIconOne
            />
        </VStack>
    )
}
