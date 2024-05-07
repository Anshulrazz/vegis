import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'


function WhyChooseUsDetails({detailsImage , DetailsTitle , DetailsText}) {
  return (
    <HStack 
    width={'100%'}
    height={'100%'}
    gap={'20px'}
    justifyContent={'center'}
    flexDirection={["column" , "column" , "column" , "row"]}
    >

    <VStack
    width={['20%','10%','10%','10%']}
    ><Image width={'100%'} height={'100%'} objectFit={"cover"} src={detailsImage} /></VStack>
    

    {/* Text */}
    <VStack
    width={['90%','90%','70%','60%']}
    alignItems={['center' , 'center' , 'center' , 'flex-start']}
    >
    <Text
    fontSize={['25px' , '25px' , '30px' , '30px']}
    fontWeight={'600'}
    letterSpacing={'1px'}
    textAlign={['center' , 'center' , 'center' , 'left']}
    >
    {DetailsTitle}
    </Text>

    <Text
    letterSpacing={'1px'}
    textAlign={['center' , 'center' , 'center' , 'left']}
    fontSize={['13px' , '16px']}
    >
    {DetailsText}
    </Text>
    </VStack>

    </HStack>
  )
}

export default WhyChooseUsDetails
