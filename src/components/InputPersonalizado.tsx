import React, { useState } from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { View, TextInput, StyleSheet, TouchableOpacity, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
    iconName: keyof typeof Icon.glyphMap;
    secureTextEntry?: boolean;
}

export const InputPersonsalizado = ({
    iconName,
    secureTextEntry,
    ...rest
}: InputProps) => {
    const [secury, setSecury] = useState(secureTextEntry);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholderTextColor='#7B8794'
                underlineColorAndroid='transparent'
                secureTextEntry={secury}
                {...rest}
            />
            <Icon
                name={iconName}
                size={25}
                weight="light"
                style={styles.icon}
            />
            {secureTextEntry && (
                <TouchableOpacity
                    onPress={() => setSecury(!secury)}
                >
                    <Icon
                        size={25}
                        color={'#7B8794'}
                        style={styles.iconPassword}
                        name={secury ? 'eye' : 'eye-off'}
                    />
                </TouchableOpacity>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 14,
        borderWidth: 1,
        paddingLeft: 40,
        borderRadius: 8,
        marginHorizontal: 20,
        borderColor: '#E4E7EB',
        backgroundColor: '#F8F9FA',
    },
    icon: {
        position: 'absolute',
        left: 30,
        top: 12,
    },
    iconPassword: {
        position: 'absolute',
        right: 30,
        top: 12,
    }
});
