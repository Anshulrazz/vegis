import React from "react";
import image from "../../assets/Section 1 Card 1 Image.png";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

function Section1Card({ cardImage, cardNumber, cardTitle, cardText }) {
  return (
    <Box
      className="section-1-card"
      width={"18rem"}
      height={"20rem"}
      _hover={{
        ".section-1-card-number": {
          backgroundColor: "#FEE4D7",
          color: "#5DA88A",
          transition: "all 0.1s linear",
        },

        transform: "translateY(-20px)",
        transition: "all 0.3s ease-in-out",
      }}
    >
        
      {/* Card Content */}
      <VStack>
        
        {/* Card Iamge */}
        <HStack
          justifyContent={"center"}
          width={"120px"}
          height={"120px"}
          border={"1px solid #5EA98B"}
          borderRadius={"50%"}
          position={"relative"}
        >
          <Image boxSize={"3rem"} src={cardImage} />

          {/* Card Number */}
          <HStack
            className="section-1-card-number"
            position={"absolute"}
            top={"5rem"}
            left={"5rem"}
            backgroundColor={"#5DA88A"}
            width={"40px"}
            height={"40px"}
            borderRadius={"50%"}
            color={"white"}
            justifyContent={"center"}
            fontWeight={"700"}
            fontSize={"16px"}
          >
            <Text> {cardNumber} </Text>
          </HStack>
        </HStack>


        {/* Card Text */}
        <VStack>
          <h1 className="text-2xl font-semibold mt-5 mb-4">{cardTitle}</h1>
          <p className="w-[15rem] text-center">
            {cardText}
          </p>
        </VStack>
      </VStack>
    </Box>
  );
}

export default Section1Card;
