import { Stack, Box, Flex, Button } from "@chakra-ui/react"
import { useState } from "react"
import Logo from "../Components/white-black-ai-round.png"
import MenuItem from "./MenuItem"
import MenuToggle from './MenuToggle'
import NavBarContainer from "./Container"
import { AiOutlineCloudDownload } from "react-icons/ai"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return(
    <Flex bg="black" justify="center" align="center" h={['100%', '100%', 20]}>
      <NavBarContainer>
        {/* <Logo/> */}
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Stack
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
            spacing={8}
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "column", "row", "row"]}
            pt={[12, 4, 0, 0]}
          >
            <MenuItem to="#about">About</MenuItem>
            <MenuItem to="#skills">Skills</MenuItem>
            <MenuItem to="#experience">My Experience</MenuItem>
            <MenuItem to="#contact">Contact</MenuItem>
            <MenuItem>
              {/* <Button as="a" bg="white" color="#000" download href="../../assets/CV_ATIRSON.pdf">
                Download CV
                <AiOutlineCloudDownload size={25} style={{ marginLeft: 5 }} />
              </Button> */}
            </MenuItem>
          </Stack> 
        </Box>
      </NavBarContainer>
    </Flex>
   
  )
}

export default Header