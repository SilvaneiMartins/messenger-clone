import React, { useState } from 'react';
import { useTheme } from 'styled-components/native';
import { Input, Pressable, IInputProps } from 'native-base';
import { Eye, EyeSlash, LockKey } from 'phosphor-react-native';

interface InputProp extends IInputProps {
    secureTextEntry?: boolean;
}

export const InputPassword = ({
    secureTextEntry,
    ...rest
}: InputProp) => {
    const { PRIMARY_COLORS } = useTheme();

    const [show, setShow] = useState(false);

    const handleVisible = () => {
        setShow(v => !v);
    }

    return (
        <Input
            {...rest}
            variant="underlined"
            placeholderTextColor={PRIMARY_COLORS.GRAY_900}
            InputLeftElement={
                <LockKey
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
            secureTextEntry={secureTextEntry}
            _light={{
                _focus: {
                    bg: PRIMARY_COLORS.WRITE_400,
                    borderColor: PRIMARY_COLORS.GRAY_100,
                    placeholderTextColor: 'black',
                }
            }}
            type={show ? "text" : "password"}
            InputRightElement={
                <Pressable
                    onPress={handleVisible}
                    style={{
                        marginRight: 10,
                    }}
                >
                    {show ? (
                        <Eye
                            size={23}
                            weight="fill"
                            color={PRIMARY_COLORS.GRAY_500}
                        />
                    ) : (
                        <EyeSlash
                            size={23}
                            weight="fill"
                            color={PRIMARY_COLORS.GRAY_500}
                        />
                    )}
                </Pressable>
            }
        />
    )
}
