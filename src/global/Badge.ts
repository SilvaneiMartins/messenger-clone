import styled from "styled-components/native";

export const BadgeAvatar = styled.View`
    width: 30px;
    height: 20px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.STATE_COLORS.RED};

    top: -5px;
    left: 28px;
    z-index: 1;
    position: absolute;
`;

export const BadgeAvatarTitle = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.PRIMARY_COLORS.WRITE_100};
`;
