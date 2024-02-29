import { extendTheme } from '@chakra-ui/react';

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
    accent: {
        100: '#e3f2fd',
        200: '#90cdf4',
        300: '#63b3ed',
    },

};

const components = {
    Button: {
        baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
        },
    },
    Heading: {
        baseStyle: {
        fontWeight: 'bold',
        },
    },
    Image: {
        baseStyle: {
        borderRadius: 'md',
        },
    },

};

const fonts = {
    heading: '"Avenir Next", sans-serif',
    body: '"Roboto", sans-serif',
};

const theme = extendTheme({ colors, components, fonts });

export default theme;
