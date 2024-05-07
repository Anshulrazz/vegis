import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import LeftSIde from './LeftSIde'
import RightSide from './RightSide'

function AboutSection1() {
  return (
    <Box
    width={"100%"}
    minHeight={"100vh"}
    marginTop={"5rem"}
    backgroundColor={"#FBF7F2"}
    >
      
    <VStack
    width={["80%" , "95%" , "95%" , "95%" , "80%"]}
    height={"100%"}
    // backgroundColor={'yellowgreen'}
    margin={"auto"}
    justifyContent={"center"}
    alignContent={"center"}
    gap={"2rem"}
    alignItems={"center"}
    >

    <LeftSIde />

    <RightSide />

    </VStack>

    </Box>
  )
}

export default AboutSection1
