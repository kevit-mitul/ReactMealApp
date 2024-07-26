
const selectedTheme = "light"

export const FONTFAMILY: FontFamily = {
    poppins_black: 'Poppins-Black',
    poppins_bold: 'Poppins-Bold',
    poppins_extrabold: 'Poppins-ExtraBold',
    poppins_extralight: 'Poppins-ExtraLight',
    poppins_light: 'Poppins-Light',
    poppins_medium: 'Poppins-Medium',
    poppins_regular: 'Poppins-Regular',
    poppins_semibold: 'Poppins-SemiBold',
    poppins_thin: 'Poppins-Thin',
};

export const SPACING = {
    space_2: 2,
    space_4: 4,
    space_8: 8,
    space_10: 10,
    space_12: 12,
    space_15: 15,
    space_16: 16,
    space_18: 18,
    space_20: 20,
    space_24: 24,
    space_28: 28,
    space_30: 30,
    space_32: 32,
    space_36: 36,
};
export const COLORS:{
    light:{
        primaryRedHex: '#DC3535',
        primaryOrangeHex: '#D17842',
        primaryBlackHex: '#0C0F14',
        primaryDarkGreyHex: '#141921',
        secondaryDarkGreyHex: '#21262E',
        primaryGreyHex: '#252A32',
        secondaryGreyHex: '#252A32',
        primaryLightGreyHex: '#52555A',
        secondaryLightGreyHex: '#AEAEAE',
        primaryWhiteHex: '#FFFFFF',
        primaryBlackRGBA: 'rgba(12,15,20,0.5)',
        secondaryBlackRGBA: 'rgba(0,0,0,0.7)',
    },
    dark:{
        primaryRedHex: '#230b0b',
        primaryOrangeHex: '#D17842',
        primaryBlackHex: '#0C0F14',
        primaryDarkGreyHex: '#141921',
        secondaryDarkGreyHex: '#21262E',
        primaryGreyHex: '#252A32',
        secondaryGreyHex: '#252A32',
        primaryLightGreyHex: '#52555A',
        secondaryLightGreyHex: '#AEAEAE',
        primaryWhiteHex: '#FFFFFF',
        primaryBlackRGBA: 'rgba(12,15,20,0.5)',
        secondaryBlackRGBA: 'rgba(0,0,0,0.7)',
    }
}

export const COLOR = selectedTheme === "light" ? {
    ...COLORS.light,
    testColor : "#4545s4d5s"

} : {
    ...COLORS.dark,
};

export const FONTSIZE = {
    size_xs: 10,
    size_sm: 14,
    size_md: 16,
    size_lg: 20,
    size_xl: 24,
    size_2xl: 28,
    size_3xl: 32,
    size_4xl: 36,
    size_5xl: 40,
    size_6xl: 44,
    size_7xl: 48,
};

export const BORDERRADIUS = {
    rounded_sm: 4,
    rounded_md: 8,
    rounded_lg: 10,
    rounded_xl: 15,
    rounded_2xl: 20,
    rounded_3xl: 25,
    rounded_full : 999
};
