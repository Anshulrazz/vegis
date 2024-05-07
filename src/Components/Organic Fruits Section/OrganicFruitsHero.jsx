import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import heroImage from '../../assets/Pages Hero Image.jpeg'

function OrganicFruitsHero({HeroTitle}) {
  return (
    <Box
    width={"100%"}
    height={["30vh" , "30vh" , "50vh" , "50vh"]}
    position={"relative"}
    >
      
        <HStack
        position={'absolute'}
        width={"100%"}
        height={"100%"}
        zIndex={-1}
        >
            <Image 
            width={"100%"}
            height={"100%"}
            objectFit={"cover"}
            src={heroImage} />
        </HStack>


        <HStack
        width={"100%"}
        height={"100%"}
        backgroundColor={[ '#000000ba' , '#000000ba' , '#000000ba' , '#000000a4']}
        className='bg-[#000000ba]'
        >
       
        <VStack
        justifyContent={'center'}
        width={['100%','100%','100%','40%']}
        height={'50%'}
        position={'absolute'}
        left={['0px','0px','25%','50%']}
        >

        <Text
        fontSize={['20px' , '30px' , '40px' , '40px']}
        fontWeight={'700'}
        textTransform={'uppercase'}
        letterSpacing={'2px'}
        color={'white'}
        >
        {HeroTitle}
        </Text>
        </VStack>

        </HStack>

    </Box>
  )
}

export default OrganicFruitsHero
