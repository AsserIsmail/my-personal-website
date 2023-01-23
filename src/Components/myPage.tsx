import * as React from "react"
import { Box, Heading, Text, Button, Center, Container } from '@chakra-ui/react';

export const MyPage = () => {

  return (
      <Container>
      <Center>
        <Box textAlign="center" py={10} px={6}>
        <Heading
            display="inline-block"
            as="h2"
            size="2xl"
            bgGradient="linear(to-r, blue.400, cyan.600)"
            backgroundClip="text">
            Asser Ismail's Portfolio
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
            -Coming Soon-
        </Text>
        <Text color={'gray.500'} mb={6}>
            Hello World! I'm Asser Ismail, a software engineer based in the Canada. I specialize in building (and occasionally designing) exceptional websites, applications, and everything in between.
        </Text>

        </Box>
    </Center>
    </Container>
  );
}