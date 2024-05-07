import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";


function Section2Card({cardImage , CardSubHeading, cardTitle , cardTitleColor}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box width={["80%", "80%", "80%", "28rem"]} height={["5%", "5%", "5%", "18rem"]}   borderRadius={"100px"}>

      {/* Card Content */}
      <HStack
        width={"100%"}
        height={"100%"}
        position={"relative"}
        borderRadius={"80px"}
      >

        {/* Card Image  */}
        <HStack width={"100%"} height={"100%"} position={"relative"} >
          <Image
            boxSize={"100px"}
            width={"100%"}
            height={"100%"}
            objectFit={"cover"}
            src={cardImage}
            borderRadius={"20px"}
          />
        </HStack>


        {/* Card Details */}
        <VStack
          position={"absolute"}
          // backgroundColor={'yellow'}
          top={['10%' , '10%'  , '20%' ]}
          left={["60%", "60%", "60%", "15rem"]}
          alignItems={"flex-start"}
          gap={['10px' , '10px'  , '15px']}
          width={"40%"}
          height={"70%"}
        >

          {/* Card Sub Heading */}
          <p className="w-[12rem] max-[480px]:text-sm max-[480px]:w-[8rem]">  {CardSubHeading} </p>

          {/* Card Title */}
          <Text
            fontSize={['10px' , '14px' , '20px']}
            width={['7rem' , '8rem' , '11rem']}
            fontWeight={"800"}
            color={cardTitleColor}
            letterSpacing={"0.1rem"}
          >
           {cardTitle}
          </Text>


          {/* Shop Now Button */}
          <Text
            marginTop={['0px' , '0px' , '10px']}
            cursor={"pointer"}
            _hover={{
              // Add styles for hover
             
            }}
            onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        fontSize={['10px' , '12px' , '16px']}
        
          >
            SHOP NOW
          </Text>

            {/* Shop Now Button Line */}
          <HStack
            width={isHovered ? '5rem' : '2rem'}
            border={"1px solid black"}
            marginTop={'-10px'}
            transition="width 0.3s"
          ></HStack>
        </VStack>
      </HStack>
    </Box>
  );
}

export default Section2Card;
