import { Box, Button, HStack, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function ForgetPasswordSection() {
  return (
    <Box width={'100%'} height={'100%'} marginTop={'5rem'}>
      <VStack width={['90%', '90%', '90%', '50%']} height={'100%'} margin={'auto'}>
        <Text fontSize={['25px', '30px', '30px', '40px']} fontWeight={'600'} letterSpacing={'2px'}>
          Forget Password
        </Text>

        <Text letterSpacing={'2px'}>Forgot Your Password? No Worries!</Text>

        {/* Form */}
        <VStack
          width={'100%'}
          paddingBottom={'2rem'}
          marginTop={'4rem'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'2rem'}
          backgroundColor={'#FFF7F3'}
          paddingTop={'2rem'}
          borderRadius={'50px'}
        >
          {/* Email */}
          <VStack 
          width={['90%' , '90%' , '90%' , '70%']}
          
          alignItems={'flex-start'} gap={'1rem'}>
            <Text fontWeight={'600'} fontSize={'18px'}>
              Email
            </Text>
            <Input
              placeholder="Enter Email"
              variant={'filled'}
              bg={'#FEEDE5'}
              borderRadius={'50px'}
              width={'100%'}
              outline={'none'}
              _hover={{ bg: '#FEEDE5' }}
            />
          </VStack>

    
          
        {/* Buttons */}
        <HStack
        width={['90%' , '90%' , '90%' , '70%']}
        justifyContent={'space-between'}
        >

            <Button
             width={"30%"}
             bg={'#5EA98B'}
             color={'white'}
             fontSize={"18px"}
             borderRadius={"50px"}
             _hover={{bg: '#FEE4D7' , color: 'black'}}
            >Submit</Button>

            <Button
              width={"30%"}
              bg={'transparent'}
              color={'black'}
              border={'1px solid #5EA98B'}
              fontSize={"18px"}
              borderRadius={"50px"}
              _hover={{bg: '#FEE4D7' , color: 'black'}}
            ><Link to={"/"}>Cancel</Link></Button>

        </HStack>

        </VStack>
      </VStack>
    </Box>
  );
}

export default ForgetPasswordSection;
