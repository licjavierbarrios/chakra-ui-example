import { extendTheme } from "@chakra-ui/react";

const styles = {
	global: {
		"html, body": {
			color: "white",
			bg: "purple.900",
		},
	},
};

const fonts = {
	heading: "Roboto, sans-serif",
	body: "Roboto, sans-serif",
};

const Heading = {
	variants: {
		primary: {
			fontWeight: "light",
			letterSpacing: "5px",
			_before: {
				content: '""',
				display: "block",
				width: "40px",
				height: "2px",
				bg: "purple.300",
			},
		},
	},
};

export const theme = extendTheme({ styles, fonts, components: { Heading } });

// AppBackup.js
// const fonts = {
// 	heading: "Roboto, sans-serif",
// 	body: "Roboto, sans-serif",
// };

// const Button = {
// 	variants: {
// 		outline: {
// 			borderRadius: "0",
// 			textTransform: "uppercase",
// 			fontWeight: "light",
// 			letterSpacing: "1px",
// 			color: "white",
// 			_hover: {
// 				bg: "black",
// 				color: "white",
// 			},
// 		},
// 	},
// };

// const Heading = {
// 	variants: {
// 		banner: {
// 			fontWeight: "light",
// 			letterSpacing: "5px",
// 			color: "white",
// 			textAlign: "center",
// 			textTransform: "uppercase",
// 		},
// 	},
// };

// export const theme = extendTheme({ fonts, components: { Button, Heading } });
