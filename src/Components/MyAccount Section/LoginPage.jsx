import { Box, Button, HStack, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {

     const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
    
  return (
    <Box
    width={"100%"}
    height={"100%"}
    marginTop={"5rem"}
    >
        
    <VStack
    width={["90%" , "90%" , "90%" , "50%"]}
    height={"100%"}
    // backgroundColor={'red'}
    margin={"auto"}
    >

    <Text
    fontSize={["30px" , "30px" , "30px" , "40px"]}
    fontWeight={"600"}
    letterSpacing={"2px"}
    >
        Log In
    </Text>

    <Text
    letterSpacing={"2px"}
    >
    Login for Existing Users
    </Text>

    {/* Form */}
    <VStack
    width={"100%"}
    paddingBottom={"2rem"}
    // height={"100%"}
    marginTop={"4rem"}
    justifyContent={"center"}
    alignItems={"center"}
    gap={"2rem"}
    backgroundColor={'#FFF7F3'}
    paddingTop={"2rem"}
    borderRadius={"50px"}
    >
        
        {/* Email */}
    <VStack
    width={"70%"}
    alignItems={"flex-start"}
    gap={"1rem"}
    >
        <Text fontWeight={"600"} fontSize={'18px'}>Email</Text>
        <Input 
        placeholder='Enter Email' 
        variant={"filled"} 
        bg={'#FEEDE5'} 
        borderRadius={"50px"} 
        width={"100%"} 
        outline={"none"}
        _hover={{bg: '#FEEDE5'}}
        />
        
    </VStack>


    {/* Password */}
    <VStack
    width={"70%"}
    height={"100%"}
    alignItems={"flex-start"}
    gap={"1rem"}
    >
        <Text fontWeight={"600"} fontSize={'18px'}>Password</Text>
        <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        variant={"filled"} 
        bg={'#FEEDE5'} 
        borderRadius={"50px"} 
        width={"100%"} 
        outline={"none"}
        _hover={{bg: '#FEEDE5'}}
      />
      <InputRightElement width='4.5rem'>
        <Button bg="transparent" _hover={{bg: '#5EA98B' , color: 'white'}} borderRadius={'50px'} h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
        
    </VStack>

    {/* Log in Button */}
    <HStack
    width={'100%'}
    justifyContent={"center"}
    >
        <Button
        width={"40%"}
        bg={'#5EA98B'}
        color={'white'}
        fontSize={"18px"}
        borderRadius={"50px"}
        _hover={{bg: '#FEE4D7' , color: 'black'}}
        >Log In</Button>
    </HStack>


    {/* Divider */}
    <HStack
    width={'70%'}
    height={'5px'}
    bg={'#FEEDE5'}
    
    ></HStack>

    {/* Button Links */}
    <HStack
    width={["100%" , "100%" , "100%" , "100%" , "70%"]}
    gap={["1rem" , "1rem" , "1rem" , "1rem" , "0rem"]}
    justifyContent={["center" , 'center' , 'center' , 'center' , "space-between"]}
    alignItems={"center"}
    textAlign={"center"}
    flexWrap={["wrap" , "wrap" , 'wrap' , 'wrap' , "nowrap"]}
    >
        <Link
        to={"/forgetPassword"}
        className='hover:text-[#5EA98B] transition-all duration-150 ease font-medium'
        >Forgot Password?</Link>

        <Link
        to={"/signUp"}
        className='hover:text-[#5EA98B] transition-all duration-150 ease font-medium'
        >Create account</Link>

         <Link
        to={"/"}
        className='hover:text-[#5EA98B] transition-all duration-150 ease font-medium'
        >Return to Store</Link>
        
    </HStack>

    </VStack>
    
    </VStack>
      
    </Box>
  )
}

export default LoginPage
