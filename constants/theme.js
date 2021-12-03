import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
	// base colors
	primary: '#DAAA63',
	secondary: '#2C1810',
	tertiary: '#F2E5D0',

	// colors
	black: '#1E1F20',
	white: '#FFFFFF',

	gray: '#808080',
	lightGray: '#e9e9ea',
	transparent: 'transparent'
};

export const SIZES = {
	// global sizes
	base: 8,
	font: 14,
	icon: 24,
	radius: 30,
	padding: 10,
	padding2: 12,

	// font sizes
	largeTitle: 50,
	h1: 30,
	h2: 22,
	h3: 20,
	h4: 18,
	body1: 30,
	body2: 20,
	body3: 16,
	body4: 14,
	body5: 12,
	body6: 10,

	// app dimensions
	width,
	height
};

export const FONTS = {
	largeTitle: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.largeTitle, lineHeight: 55 },
	h1: { fontFamily: 'Montserrat-SemiBold', fontSize: SIZES.h1, lineHeight: 36 },
	h2: { fontFamily: 'Montserrat-SemiBold', fontSize: SIZES.h2, lineHeight: 30 },
	h3: { fontFamily: 'Montserrat-SemiBold', fontSize: SIZES.h3, lineHeight: 22 },
	h4: { fontFamily: 'Montserrat-SemiBold', fontSize: SIZES.h4, lineHeight: 22 },
	body1: { fontFamily: 'Libre-Regular', fontSize: SIZES.body1, lineHeight: 36 },
	body2: { fontFamily: 'Libre-Regular', fontSize: SIZES.body2, lineHeight: 36 },
	body3: { fontFamily: 'Libre-Regular', fontSize: SIZES.body3, lineHeight: 22 },
	body4: { fontFamily: 'Libre-Regular', fontSize: SIZES.body4, lineHeight: 22 },
	body5: { fontFamily: 'Libre-Regular', fontSize: SIZES.body5, lineHeight: 20 },
	body6: { fontFamily: 'Libre-Regular', fontSize: SIZES.body6, lineHeight: 15 }
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
