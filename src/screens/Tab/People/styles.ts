import styled, { css } from "styled-components/native";

interface OptionsProps {
    active: boolean;
}

export const Options = styled.View`
    height: 45px;
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: row;
    border-bottom-color: ${({ theme }) => theme.PRIMARY_COLORS.BLACK_400};
`;

export const OptionLeft = styled.TouchableOpacity<OptionsProps>`
    flex: 1;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;

    ${({ active }) => active && css`
        background-color: ${({ theme }) => active ? theme.PRIMARY_COLORS.WRITE_400 : theme.PRIMARY_COLORS.BLACK_100};
        border-bottom-color: ${({ theme }) => theme.LINEAR_GRADIENT.PURPLE};
    `}
`;

export const OptionLRight = styled.TouchableOpacity<OptionsProps>`
    flex: 1;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;

    ${({ active }) => active && css`
        background-color: ${({ theme }) => active ? theme.PRIMARY_COLORS.WRITE_400 : theme.PRIMARY_COLORS.BLACK_100};
        border-bottom-color: ${({ theme }) => theme.LINEAR_GRADIENT.PURPLE};
    `}
`;

export const OptionTitle = styled.Text<OptionsProps>`
    font-size: 15px;
    color: ${({ theme, active }) => active
        ? theme.PRIMARY_COLORS.BLACK_400
        : theme.PRIMARY_COLORS.WRITE_900};
    font-weight: ${({ active }) => active ? 900 : 400};
`;
