import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme, Spacer,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { About } from "./Components/About/About";
import { Navbar }  from "./Components/Nav/Navbar";
import { About2 } from "./Components/About/About2";
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
      <Spacer h="100px" />
      {/*<About2 />*/}
      <Spacer h="100px" />
      <Spacer h="100px" />
      <Spacer h="100px" />
      {/* <Projects />
      <Skills />
      <Testimonials />
      <Contact /> */}
    </Box>
  </ChakraProvider>
)
