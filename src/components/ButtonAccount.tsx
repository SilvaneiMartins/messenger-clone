import React from 'react';
import { useTheme } from 'styled-components/native';
import { Box, Button, IButtonProps, Text } from 'native-base';
import { ChatCircleDots } from 'phosphor-react-native';

interface IButtonAccountProps extends IButtonProps {
    title: string;
    onPress: () => void;
    backGroundColor?: string;
    loading?: boolean;
    loadingText?: string;
    disable?: boolean;
    variant?: "link" | "subtle" | "solid" | "ghost" | "outline" | "unstyled"
}

export const ButtonAccount = ({
    title,
    variant,
    onPress,
    backGroundColor,
    loading,
    loadingText,
    disable,
    ...rest
}: IButtonAccountProps) => {
    const { PRIMARY_COLORS } = useTheme();

    return (
        <Box
            w={{
                md: '25%',
                base: '85%'
            }}
        >
            <Button
                {...rest}
                marginTop={5}
                variant={variant}
                borderRadius={40}
                isLoading={loading}
                isDisabled={disable}
                isLoadingText={loadingText}
                backgroundColor={backGroundColor}
                _loading={{
                    _text: {
                        color: PRIMARY_COLORS.BLACK_100,
                    }
                }}
                _spinner={{
                    color: PRIMARY_COLORS.BLACK_100,
                }}
                _pressed={{
                    borderColor: PRIMARY_COLORS.WRITE_600,
                    backgroundColor: PRIMARY_COLORS.WRITE_600,
                }}
            >
                <Text
                    fontSize={14}
                    fontFamily='mono'
                    fontWeight='medium'
                    color={PRIMARY_COLORS.BLACK_500}
                >{title}</Text>
            </Button>
        </Box>
    )
}
