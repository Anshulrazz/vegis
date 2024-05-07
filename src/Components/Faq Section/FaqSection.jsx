import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import FaqDrawer from './FaqDrawer'

function FaqSection() {
  return (
    <Box
    width={"100%"}
    min-height={"100vh"}
    marginTop={"5rem"}
    >
      
    <VStack>

    {/* Faq Title */}
    <VStack>
        <Text
        fontSize={["20px" , "30px" , "30px" , "40px"]}
        fontWeight={"600"}
        letterSpacing={"2px"}
        >
        FAQ Block
        </Text>

        <Text
        width={['80%' , '80%' , '100%' , '100%' , '100%']}
        textAlign={"center"}
        fontWeight={"100"}
        letterSpacing={"2px"}
        marginTop={"1rem"}
        >Check Out Our Ecommerce Questions And Answers Blocks</Text>

        <Text
        fontWeight={"500"}
        marginTop={"0.6rem"}
        >
        Track Your Queries
        </Text>
        
    </VStack>


    {/* Faq Details */}
    <VStack
    width={["80%" , "80%" , "80%" , "80%"]}
    height={["100%" , "100%" , "100%" , "100%"]}
    // backgroundColor={'yellowgreen'}
    >

        <FaqDrawer/>

    </VStack>
    

    </VStack>

    </Box>
  )
}

export default FaqSection
