import { Box, Flex, Heading, IconButton, Spacer, useColorMode, useColorModePreference } from "@chakra-ui/react"
import { VStack } from "@chakra-ui/react"
import { StackDivider } from "@chakra-ui/react"
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import  Header  from "./components/Header"
import Social from "./components/Social"
import Profile from "./components/Profile"

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <div className="App">
      <VStack p={5}>
        <Flex w="100%">
          <Heading
            ml="8" size="md" fontWeight='semibold' color="cyan.400">May Nhan</Heading>
            <Spacer></Spacer>
          <IconButton icon={<FaLinkedin />} isRound='true' ></IconButton>
          <IconButton ml={2} icon={<FaInstagram />} isRound='true' ></IconButton>
          <IconButton ml={2} icon={<FaGithub />} isRound='true' ></IconButton>
          <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
        </Flex>
        <Header></Header>
        <Social></Social>
        <Profile></Profile>
      </VStack>
    </div>
  );
}

export default App;
