import React from 'react'
import { useTheme } from 'styled-components/native'
import { MagnifyingGlass } from 'phosphor-react-native';
import { Box, Input } from 'native-base'

export const InputSearch = () => {
    const { PRIMARY_COLORS } = useTheme();

    return (
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
                placeholder='Pesquisar contato'
                _light={{
                    _focus: {
                        bg: PRIMARY_COLORS.WRITE_400,
                        borderColor: PRIMARY_COLORS.GRAY_100,
                        placeholderTextColor: 'black',
                    }
                }}
            />
        </Box>
    )
}
