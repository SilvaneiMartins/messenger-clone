import React from 'react';
import { useTheme } from 'styled-components/native';
import { VStack } from 'native-base';

import { HeaderChat } from '../../../components';

export const People = () => {
    const { PRIMARY_COLORS } = useTheme();

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
        </VStack>
    )
}
