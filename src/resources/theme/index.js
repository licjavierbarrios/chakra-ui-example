import { extendTheme } from '@chakra-ui/react';

const colors = {
	brand: {
		primary: '#F2D7EE',
		secondary: '#0E103D',
		accent: '#69306D',
	},
};

const Button = {
	baseStyle: {
		fontWeight: 'light',
		borderRadius: '30px',
		_hover: {
			boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.18)',
		},
	},
	variants: {
		outline: {
			_hover: {
				bg: 'brand.primary',
				borderColor: 'brand.primary',
			},
		},
		cta: {
			fontWeight: 'normal',
			textTransform: 'uppercase',
			bg: 'brand.accent',
			color: 'brand.primary',
			borderRadius: 'none',
			_hover: {
				bg: 'brand.primary',
				color: 'brand.accent',
			},
		},
	},
	sizes: {
		lg: {
			fontWeight: 'bold',
		},
	},
};

export const theme = extendTheme({ colors, components: { Button } });
