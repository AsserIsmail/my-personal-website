import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { About } from "./Components/About/About";
import { Navbar }  from "./Components/Nav/Navbar";
// import { Contact } from "./Components/Contact";
// import { Navbar } from "./Components/Navbar";
// import { Projects } from "./Components/Projects";
// import { Skills } from  "./Components/Skills";
// import { Testimonials } from "./Components/Testimonials";


export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Navbar />
      <About />
      {/* <Projects />
      <Skills />
      <Testimonials />
      <Contact /> */}
    </Box>
  </ChakraProvider>
)
