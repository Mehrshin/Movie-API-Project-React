import React from 'react';
import { Box, Flex, Text, IconButton, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import './index.css'; 

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box className={colorMode === 'light' ? 'headerContainer' : 'headerContainer darkMode'}>
            <Flex className='headerContent'>
                <Box className='logo'>Logo</Box>
                <Flex alignItems='center'>
                    <Text p={4}>
                        <Link to="/">Home</Link>
                    </Text>
                    <Text p={4}>
                        <Link to="/browse">Movie</Link>
                    </Text>
                    <IconButton
                        aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
                        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        onClick={toggleColorMode}
                    />
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;
