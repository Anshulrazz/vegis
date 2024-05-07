import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import Section2Card from "./Section2Card";

import Image1 from '../../assets/Section 2 Card 1 Image.png'
import Image2 from '../../assets/Section 2 Card 2 Image.png'
import Image3 from '../../assets/Section 2 Card 3 Image.png'

function Section2() {
  return (
    <Box width={"100%"} minHeight={"50vh"} marginTop={"5rem"} justifyContent={'center'} alignItems={'center'} display={'flex'} overflow={"hidden"}>
      
      <HStack justifyContent={'center'} gap={"20px"} flexWrap={"wrap"}>
        <Section2Card cardImage={Image1} CardSubHeading={'100% Healthy & Affordable'} cardTitle={'ORGANIC CITRUS FRUITS'} cardTitleColor={'#5EA98B'} />
        
        <Section2Card  cardImage={Image2} CardSubHeading={'Natural Raw Vegtables'} cardTitle={'NEW GREENY VEGTABLES'} cardTitleColor={'white'} />

        <Section2Card cardImage={Image3}  CardSubHeading={'Garden Fresh Fruits'} cardTitle={'HEALTHY ORGANIC EATABLES'} cardTitleColor={'#5EA98B'} />
      </HStack>
    </Box>
  );
}

export default Section2;
