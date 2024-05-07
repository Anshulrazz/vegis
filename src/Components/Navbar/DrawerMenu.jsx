import React from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  HStack,
  Text,
} from "@chakra-ui/react";
import AccordianItem from "./AccordianItem";

function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleLinkClick = () => {
    onClose(); // Close the drawer when a link is clicked
  };

  return (
    <>
      <Button ref={btnRef} backgroundColor={'transparent'} _hover={{backgroundColor:'transparent'}} onClick={onOpen}>
        <HStack>
          <IoMdMenu className="w-6 h-6" />
          <Text>Menu</Text>
        </HStack>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Fresh Organic Picks</DrawerHeader>

          <DrawerBody>
            <Box p={4}>
              <HStack>
                {/* Add onClick to close drawer when the link is clicked */}
                <Link to={"/"} onClick={handleLinkClick}>
                  HOME
                </Link>
                
              </HStack>
              
              
            </Box>
            <AccordianItem handleLinkClick={handleLinkClick}/>

            <Box p={4}>
              <HStack>
                {/* Add onClick to close drawer when the link is clicked */}
                <Link to={"/contact"} onClick={handleLinkClick}>
                  CONTACT
                </Link>
                
              </HStack>
              
              
            </Box>
            
          </DrawerBody>

            

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Log In
            </Button>
            <Button colorScheme="blue">Sign Up</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerMenu;
