import React from 'react';
import { useTheme } from 'styled-components/native';
import { Input, IInputProps } from 'native-base';
import { EnvelopeSimple } from 'phosphor-react-native';

export const InputEmail = ({ ...rest }: IInputProps) => {
    const { PRIMARY_COLORS } = useTheme();

    return (
        <Input
            {...rest}
            variant="underlined"
            placeholderTextColor={PRIMARY_COLORS.GRAY_900}
            InputLeftElement={
                <EnvelopeSimple
                    size={23}
                    weight="fill"
                    color={PRIMARY_COLORS.GRAY_500}
                    style={{
                        marginLeft: 10,
                        marginRight: 10,
                    }}
                />
            }
            bg={PRIMARY_COLORS.WRITE_500}
            borderRadius={2}
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
    )
}
