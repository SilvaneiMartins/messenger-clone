import React, { useState } from 'react';
import { useTheme } from 'styled-components/native';
import { Heart, Trash } from 'phosphor-react-native';
import {
    Avatar,
    Box,
    Button,
    FlatList,
    Heading,
    HStack,
    Pressable,
    VStack
} from 'native-base';

import { favorito } from '../../../utils/Favorito';
import { HeaderChat } from '../../../components';

export const Favorite = () => {
    const { PRIMARY_COLORS, STATE_COLORS, LINEAR_GRADIENT } = useTheme();

    const [favoriteActive, setFavoriteActive] = useState(false);

    const handleFavoriteActive = () => {
        setFavoriteActive(v => !v);
    }

    return (
        <VStack
            flex={1}
            backgroundColor={PRIMARY_COLORS.WRITE_100}
        >
            <HeaderChat
                title='Favoritos'
                rightIconTwo
                rightIconOne
            />

            <VStack
                paddingX={5}
            >
                <FlatList
                    data={favorito}
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={() => { }}
                        >
                            <Box
                                flexDirection={'row'}
                                alignItems={'center'}
                            >
                                <Button
                                    padding={'1.5'}
                                    marginRight={2}
                                    variant={'ghost'}
                                    marginBottom={'1'}
                                    borderRadius={'full'}
                                    backgroundColor={PRIMARY_COLORS.WRITE_500}
                                    onPress={() => { }}
                                >
                                    <Avatar
                                        size={'md'}
                                        source={{ uri: item.avatarUrl }}
                                    >
                                        <Avatar.Badge
                                            bg={STATE_COLORS.GREEN}
                                        />
                                    </Avatar>
                                </Button>
                                <Box
                                    flex={1}
                                >
                                    <Heading
                                        fontSize={'lg'}
                                    >{item.fullName}</Heading>
                                </Box>
                                <HStack>
                                    <Button
                                        variant={'unstyled'}
                                        onPress={handleFavoriteActive}
                                    >
                                        {favoriteActive ? (
                                            <Heart
                                                size={30}
                                                weight="fill"
                                                color={LINEAR_GRADIENT.BLUE}
                                            />
                                        ) : (
                                            <Heart
                                                size={30}
                                                weight="light"
                                                color={LINEAR_GRADIENT.BLUE}
                                            />
                                        )}
                                    </Button>

                                    <Button
                                        variant={'unstyled'}
                                    >
                                        <Trash
                                            size={30}
                                            weight="fill"
                                            color={LINEAR_GRADIENT.RED}
                                        />
                                    </Button>
                                </HStack>
                            </Box>
                        </Pressable>
                    )}
                />
            </VStack>
        </VStack>
    )
}
