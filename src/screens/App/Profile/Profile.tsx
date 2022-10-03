import React from 'react';
import { useTheme } from 'styled-components/native';
import {
    VStack,
    Text,
    Box
} from 'native-base';

export const Profile = () => {
    const { PRIMARY_COLORS } = useTheme();

    return (
        <VStack
            flex={1}
            backgroundColor={PRIMARY_COLORS.WRITE_100}
        >
            <Box>

            </Box>

            <Box>

            </Box>
        </VStack>
    )
}
