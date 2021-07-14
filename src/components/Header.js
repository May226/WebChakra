import { Stack, Box, Image, useColorMode, useMediaQuery, Circle, Text, Button, Flex } from '@chakra-ui/react';
import React, { Component } from 'react';

function Header() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const { isNotSmallerScreen } = useMediaQuery("min-width:600px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Bao Cat Nhan</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}> Senior Web Developer HTML, CSS, Javascript, Node, React, MongoDB 
                        YouTuber & Entrepreneur </Text>
                    <Button mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://www.linkedin.com/in/baocatnhan/")
                    }>Hire Me</Button>

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    boxShadow="lg"
                    boxSize="300px" src='https://media-exp3.licdn.com/dms/image/C4E03AQHmvzAfqdeQ4Q/profile-displayphoto-shrink_400_400/0/1602702181378?e=1631750400&v=beta&t=58XmNN0BxC-jLRCBGE99sglaA7WfAt2v9Kzyp4dn8EE' />
            </Flex>

        </Stack>
    );
}
export default Header;
