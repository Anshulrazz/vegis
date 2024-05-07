
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function AccordianItem({ handleLinkClick }) {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box  as="span" flex="1" textAlign="left">
              SHOP
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <VStack alignItems={"flex-start"} paddingLeft={"10px"} gap={"20px"}>
            <Link onClick={handleLinkClick} to={"./organic-fruits"}>Organic Fruits</Link>
            <Link onClick={handleLinkClick} to={"./aggregate-fruits"}>Aggregate Fruits</Link>
            <Link onClick={handleLinkClick} to={"./pits-fruits"}>Pits Fruits</Link>
            <Link onClick={handleLinkClick} to={"./legumas-fruits"}>Legumas Fruits</Link>
          </VStack>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              PAGES
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        <VStack alignItems={"flex-start"} paddingLeft={"10px"} gap={"20px"}>
            <Link onClick={handleLinkClick} to={"./about"}>About</Link>
            <Link onClick={handleLinkClick} to={"./services"}>Services</Link>
            <Link onClick={handleLinkClick} to={"./faq"}>FAQ'S</Link>
            <Link onClick={handleLinkClick} to={"./my-account"}>My Account</Link>
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordianItem;
