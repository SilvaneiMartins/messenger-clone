import React from 'react';
import {
    VideoCamera,
    HandsClapping,
    ShareNetwork
} from 'phosphor-react-native';
import {
    Box,
    HStack,
    Pressable,
    Text,
    VStack
} from 'native-base';

import { HeaderChat } from '../../../components';

export const Invite = () => {
    return (
        <VStack>
            <HeaderChat
                title='Convidar'
                rightIconOne
            />

            <HStack
                marginLeft={5}
                flexDirection={'row'}
                alignItems={'center'}
            >
                <Box
                    width={[88]}
                    height={[84]}
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderTopLeftRadius={[20]}
                    borderBottomLeftRadius={[20]}

                    backgroundColor={'amber.400'}
                >
                    <VideoCamera size={45} weight="light" />
                </Box>

                <Box>
                    <Box>
                        <HandsClapping size={32} weight="light" />
                        <Text>de Sadek Hossen {'\n'} Quarto</Text>
                    </Box>
                    <Text>msngr.com/silvaneimartins</Text>
                </Box>

                <Pressable>
                    <ShareNetwork size={32} weight="light" />
                </Pressable>
            </HStack>
        </VStack>
    )
}
