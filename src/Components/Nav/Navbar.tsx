import { Stack, Box, Flex, Button, Collapse, Container, HStack, IconButton,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure, Image} from "@chakra-ui/react"
import { useState } from "react"
import Logo from "../white-black-ai-round.png"
import MenuItem from "./MenuItem"
// import MenuToggle from './MenuToggle'
import NavBarContainer from "./Container"
import { AiOutlineCloudDownload } from "react-icons/ai"
import { ColorModeSwitcher } from "../../ColorModeSwitcher"

export const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false)

  // const toggle = () => setIsOpen(!isOpen)
  return(
    <Flex bg="black" justify="center" align="center" h={['100%', '100%', 20]}>
      <NavBarContainer>
        {/* <Logo/> */}
        {/*<MenuToggle toggle={toggle} isOpen={isOpen} />*/}
        <Box
          // display={{ base: isOpen ? "block" : "none", md: "block" }}
          // display={{ base: isOpen ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Stack
            align={"center"}
            alignSelf={"center"}
            position={"relative"} // relative what isi does is that it will position the element relative to its normal position
            spacing={8}
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "column", "row", "row"]}
            pt={[12, 4, 0, 0]}
          >
            <MenuItem to="#about">About</MenuItem>
            <MenuItem to="#skills">Skills</MenuItem>
            <MenuItem to="#experience">My Experience</MenuItem>
            <MenuItem to="#contact">Contact</MenuItem>
            {/*<MenuItem>*/}
            {/*  <Button as="a" bg="white" color="#000" download href="../../assets/CV_ATIRSON.pdf">*/}
            {/*    Download CV*/}
            {/*    <AiOutlineCloudDownload size={25} style={{ marginLeft: 5 }} />*/}
            {/*  </Button>*/}
            {/*</MenuItem>*/}
              <Stack
            align={"right"}
            alignSelf={"right"}
            position={"relative"} // relative what isi does is that it will position the element relative to its normal position
            spacing={8}
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "column", "row", "row"]}
            pt={[12, 4, 0, 0]}
          >

                <ColorModeSwitcher justifySelf="flex-end" />
              </Stack>

          </Stack>
        </Box>
        <Box>
      {/* <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>

        <Flex
            flex={{ base: 1 }}
            justify={{ base: 'center', md: 'start' }}
            verticalAlign={'middle'}>
          <HStack>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>

            </Flex>
          </HStack>
        </Flex>
        <ColorModeSwitcher justifySelf="flex-end"/>
      </Flex> */}

      {/*<Collapse in={isOpen} animateOpacity>*/}
      {/*</Collapse>*/}
      {/*<Box p="4">*/}
      {/*  <Container maxW='l' maxWidth={'1200px'}>*/}

      {/*  </Container>*/}
      {/*</Box>*/}
    </Box>
      </NavBarContainer>
    </Flex>

  )
}
