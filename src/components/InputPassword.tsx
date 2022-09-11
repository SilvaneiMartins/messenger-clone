import React, { useState } from 'react';
import { useTheme } from 'styled-components/native';
import { Input, Pressable } from 'native-base';
import { Eye, EyeSlash, LockKey } from 'phosphor-react-native';

export const InputPassword = () => {
    const { STATE_COLORS, PRIMARY_COLORS } = useTheme();

    const [show, setShow] = useState(false);

    const handleVisible = () => {
        setShow(v => !v);
    }

    return (
        <Input
            variant="underlined"
            placeholder="Digite sua senha"
            InputLeftElement={
                <LockKey
                    size={18}
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
            fontSize={13}
            fontWeight='light'
            fontFamily='mono'
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
                                size={18}
                                weight="fill"
                                color={PRIMARY_COLORS.GRAY_500}
                            />
                        ) : (
                            <EyeSlash
                                size={18}
                                weight="fill"
                                color={PRIMARY_COLORS.GRAY_500}
                            />
                        )}
                    </Pressable>
                }
        />
    )
}
