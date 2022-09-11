import React from 'react';
import { useTheme } from 'styled-components/native';
import { Box, Button, IButtonProps, Text } from 'native-base';

interface IButtonAccountProps extends IButtonProps {
    title: string;
    onPress: () => void;
}

export const ButtonUnstyled = ({
    title,
    variant,
    onPress,
    ...rest
}: IButtonAccountProps) => {
    const { STATE_COLORS } = useTheme();

    return (
        <Box
            w={{
                md: '25%',
                base: '85%'
            }}
            display='flex'
            alignItems='center'
        >
            <Button
                {...rest}
                marginTop={5}
                variant='unstyled'
            >
                <Text
                    fontSize={14}
                    fontWeight='medium'
                    fontFamily='heading'
                    color={STATE_COLORS.RED}
                >{title}</Text>
            </Button>
        </Box>
    )
}
