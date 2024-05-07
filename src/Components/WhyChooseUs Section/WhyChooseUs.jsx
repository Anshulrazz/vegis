import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import bgImage from '../../assets/Why Choose Us Image.png'
import fresh from '../../assets/Fresh.png'
import organic from '../../assets/Organic.png'
import chemicalFree from '../../assets/ChemicalFree.png'
import WhyChooseUsDetails from './WhyChooseUsDetails'


function WhyChooseUs() {
  return (
    <Box
    width={'100%'}
    min-height={'100vh'}
    marginTop={'5rem'}
    >

      {/* Why Choose Us Details */}
      <VStack 
      width={'100%'}
      height={'100%'}
      >

      {/* Heading Container */}
      <VStack>

        {/* Heading */}
        <Text 
        fontSize={["20px" , "30px" , "30px" , "40px"]}
        fontWeight={"600"}
        letterSpacing={"2px"}
        >
          Why Choose Us 
        </Text>

        {/* Sub Heading */}
        <Text
        fontSize={["15px" , "20px" , "20px" , "20px"]}
        width={['85%' , '85%' , '85%' , '75%' , '50%']}
        textAlign={"center"}
        marginTop={"0.8rem"}
        >
        Arcu non odio euismod lacinia sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

      </VStack>

      <HStack
      width={'100%'}
      height={'100%'}
      justifyContent={'center'}
      display={['grid' , 'grid' , 'grid' , 'flex']}
      gridAutoRows={['auto' , 'auto' , 'auto' , 'auto' , 'auto']}
      gridAutoColumns={['auto' , 'auto' , 'auto' , 'auto' , 'auto']}
      placeItems={'center'}
      marginTop={['50px' , '50px' , '50px' , '50px']}
      gap={['50px' , '50px' , '50px' , '0px']}
      >
      {/* Image */}
      <VStack
      width={['50%' , '50%' , '30%' , '30%' ,  '30%']}
      height={'100%'}
      
      >

      <Image  width={'100%'} height={'100%'} objectFit={"cover"} src={bgImage} />

      </VStack>
      
      <VStack
      width={['100%' , '100%' , '100%' , '100%' ,  '60%']}
      height={'100%'}
      gap={'40px'}
      marginTop={['20px' , '20px' , '20px'  , '0px']}
      >

         <WhyChooseUsDetails detailsImage={fresh} DetailsTitle={"Healthy Fresh Eatbales"} DetailsText={"Arcu non odio euismod lacinia sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />

        <WhyChooseUsDetails detailsImage={organic} DetailsTitle={"Authorized Organic Farm"} DetailsText={"Accumsan in nisl nisi scelerisq amet sed due eu ultrices vitae auctor. Felis eget velit aliquet sagittis amet lor."} />

        <WhyChooseUsDetails detailsImage={chemicalFree} DetailsTitle={"100% Non Chemical Fertilizers"} DetailsText={"Est lorem ipsum dolor sit amet sit smret consectetur. Arcu risus quis varius quam quisque id diam vel tellus."} />

      </VStack>

      </HStack>

      </VStack>

    </Box>
  )
}

export default WhyChooseUs
