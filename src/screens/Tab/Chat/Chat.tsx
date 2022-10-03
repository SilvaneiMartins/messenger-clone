import React from 'react';
import { useTheme } from 'styled-components/native';
import { MagnifyingGlass } from 'phosphor-react-native';
import { Box, VStack, Input } from 'native-base';

import { HeaderChat } from '../../../components';

export const Chat = () => {
    const { PRIMARY_COLORS } = useTheme();

    return (
        <VStack
            flex={1}
            backgroundColor={PRIMARY_COLORS.WRITE_100}
        >
            <HeaderChat />

            <Box
                paddingLeft={5}
                paddingRight={5}
            >
                <Input
                    variant="outline"
                    placeholderTextColor={PRIMARY_COLORS.GRAY_900}
                    InputLeftElement={
                        <MagnifyingGlass
                            size={25}
                            weight="fill"
                            color={PRIMARY_COLORS.BLACK_100}
                            style={{
                                marginLeft: 10,
                            }}
                        />
                    }
                    bg={PRIMARY_COLORS.WRITE_300}
                    borderRadius={30}
                    fontSize={14}
                    fontWeight='light'
                    fontFamily='mono'
                    marginBottom={2}
                    _light={{
                        _focus: {
                            bg: PRIMARY_COLORS.WRITE_400,
                            borderColor: PRIMARY_COLORS.GRAY_100,
                            placeholderTextColor: 'black',
                        }
                    }}
                />
            </Box>
        </VStack>
    )
}
