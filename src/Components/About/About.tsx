import * as React from "react"
import { Box, Heading, Text, Button, Center, Container, Stack, Circle, Flex, useColorMode, useMediaQuery, Icon, Link } from '@chakra-ui/react';
import { FiLinkedin, FiGithub, FiArrowDownCircle } from 'react-icons/fi'
import { TiArrowRightThick } from 'react-icons/ti'
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
// import  ProfileImg  from './white-black-ai-round.png';

export const About = () => {
  return (
    <Container id="about" maxW={1480} display="flex" justifyContent="space-evenly" h="300" p={8} mt={{ sm: 20, md: 20, '2xl': 36}}>
      <Flex direction="column" w={25} justify="center" mt={{ sm: 564, md: 2 }}>
        <Link _focus={{outline: 'none'}} href="https://www.linkedin.com/in/asserismail/" target="_blank" w={25} title="LinkedIn">
          <FiLinkedin size={25} />
        </Link>
        <Link _focus={{outline: 'none'}} href="https://github.com/AsserIsmail" target="_blank" mt="8" w={25} title="GitHub">
          <FiGithub size={25} />
        </Link>
      </Flex>
      <Flex 
        display="flex" 
        direction={["column-reverse", "column-reverse", "row", "row"]}
        justify={["center", "center", "space-between", "space-between"]}
        align={{ sm: "center", md: "flex-start", '2xl': "flex-start" }}
      >
        <Flex w={{sm: 250, md: 400, lg: 500}} direction="column" justify="center" ml={{ sm: 4, md: 12 }} mt={{ sm: 64, md: 2 }}>
          <Heading as='h2' size='2xl'>
            {`Hello World, I'm Asser Ismail`}
          </Heading>
          <Heading as='h2' size='lg' color="cyan.400" mt="2">
            Software Engineer
          </Heading>
          {/* <Text mt="8"  mb="4">
            {`
              I'm 22 years old and I love everything about technology. 
              At the moment I'm focusing my studies on Node, NextJS, React and React Native with Typescript.
            `}
          </Text> */}
          <Text mt="8"  mb="4">
            {`
              Hello World! I'm Asser Ismail, a software engineer based in the Canada. 
              I specialize in building (and occasionally designing) exceptional websites, applications, and everything in between.
            `}
          </Text>
          {/* <Button as="a" bg="white" color="#000" download href="../../public/My_CS_Resume_Asser_Ismail.pdf">Hi</Button> */}
          {/* https://react-icons.github.io/react-icons/icons?name=fi */}
          <Stack
            direction={"row"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button 
            as={"a"}
            bg="white" 
            display="flex"
            // direction={"row"}
            // justify="center"
            // align="center"
            color="black" 
            maxW={200} 
            minH={10} 
            size='md'
            download
            href="../../My_CS_Resume_Asser_Ismail.pdf"
            target="_black"
            style={{ textDecoration: 'none' }}
          >
            Resume
            <Icon w={5} h={5} ml="2" as={FiArrowDownCircle} />
          </Button>
          </Stack>
          
        </Flex>
        <Flex w={{sm: 200, md: 200, lg: 700}} h={25} align="center" justify="center" mt={{ sm: 568, md: 2 }}>
          {/* <ProfileImg /> */}
        </Flex>
      </Flex>
    </Container>
  );
  // return (
  //     <Container>
  //       <ColorModeSwitcher></ColorModeSwitcher>
  //     <Center>
  //       <Box textAlign="center" py={10} px={6}>
  //       <Heading
  //           display="inline-block"
  //           as="h2"
  //           size="2xl"
  //           bgGradient="linear(to-r, blue.400, cyan.600)"
  //           backgroundClip="text">
  //           Asser Ismail's Portfolio
  //       </Heading>
  //       <Text fontSize="18px" mt={3} mb={2}>
  //           -Coming Soon-
  //       </Text>
  //       <Text color={'gray.500'} mb={6}>
  //           Hello World! I'm Asser Ismail, a software engineer based in the Canada. I specialize in building (and occasionally designing) exceptional websites, applications, and everything in between.
  //       </Text>

  //       </Box>
  //   </Center>
  //   </Container>
  // );
}