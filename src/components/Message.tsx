dayjs.locale('pt-br');
import dayjs from 'dayjs';
import React from 'react';
import 'dayjs/locale/pt-br';
dayjs.extend(relativeTime);
import relativeTime from 'dayjs/plugin/relativeTime';
import {
    View,
    Text,
    VStack,
} from 'native-base';

interface IMessage {
    message: string;
}

export const Message = ({ message }: any) => {

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return (
        <VStack
            margin={2}
            padding={3}
            maxWidth={'80%'}
            borderRadius={[10]}
            style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.18,
                shadowRadius: 1,

                elevation: 1,
                alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
                backgroundColor: isMyMessage() ? '#82ddf7' : 'white',
            }}
        >
            <Text>{message.text}</Text>
            <Text
                fontSize={11}
                color={'gray.400'}
                alignSelf={'flex-end'}
            >
                {dayjs(message.createdAt).fromNow(true)}
            </Text>
        </VStack>
    )
}
