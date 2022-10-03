import { Dimensions, Platform } from "react-native";

export function isIphoneX() {
    const iphoneXLength = 812;
    const iphoneXSMaxLength = 896;
    const windowDimentions = Dimensions.get('window');

    return (
        Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && (
            windowDimentions.width === iphoneXLength ||
            windowDimentions.height === iphoneXLength ||
            windowDimentions.width === iphoneXSMaxLength ||
            windowDimentions.height === iphoneXSMaxLength
        )
    )
}

const DimensionsStyle = {
    tabBarHeight: Platform.OS === 'ios' ? 17 : 20,
    bottomAreaHeight: Platform.OS === 'ios' && isIphoneX() ? 34 : 0,
    safeAreaBottomHeight: Platform.OS === 'ios' && isIphoneX() ? 35 : 0,
    safeAreaTopHeight: Platform.OS === 'ios' ? (isIphoneX() ? 44 : 20) : 0,
}

export default DimensionsStyle;
