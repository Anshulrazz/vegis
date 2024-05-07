import {
  Box,
  Button,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { useState } from "react";


function OrganicFruitsSidebar() {

    const format = (val) => `₹` + val
  const parse = (val) => val.replace(/^\₹/, '')
  const parse1 = (val1) => val1.replace(/^\₹/, '')

  const [value, setValue] = useState('1.53')
  const [value1, setValue1] = useState('1.53')


  return (
    <Box
      width={"100%"}
      height={"100%"}
    >
      <VStack width={["100%" , "100%" , "100%" , "100%" , "80%"]} height={"100%"} margin={"auto"}>
        {/* Category */}
        <VStack width={"100%"} height={"15rem"} alignItems={"flex-start"}>
          <Text fontWeight={"600"} fontSize={"1.2rem"}>
            Category
          </Text>

          <HStack
            width={"100%"}
            height={"2px"}
            backgroundColor={"#5DA88A"}
            marginTop={"0.5rem"}
            marginBottom={"0.5rem"}
          ></HStack>

          <VStack
            width={"100%"}
            height={"10rem"}
            alignItems={"flex-start"}
            fontWeight={"500"}
            fontSize={"0.9rem"}
            letterSpacing={"0.5px"}
          >
            <Checkbox>Citrus Fruits</Checkbox>
            <Checkbox>Tropical Fruits</Checkbox>
            <Checkbox>Exotic Fruits</Checkbox>
            <Checkbox>Stone Fruits</Checkbox>
          </VStack>
        </VStack>

        {/* Availability */}
        <VStack width={"100%"} height={"9rem"}  alignItems={"flex-start"}>
          <Text fontWeight={"600"} fontSize={"1.2rem"}>
            Availability
          </Text>

          <HStack
            width={"100%"}
            height={"2px"}
            backgroundColor={"#5DA88A"}
            marginTop={"0.5rem"}
            marginBottom={"0.5rem"}
          ></HStack>

          <VStack
            width={"100%"}
            height={"10rem"}
            alignItems={"flex-start"}
            fontWeight={"500"}
            fontSize={"0.9rem"}
            letterSpacing={"0.5px"}
          >
            <RadioGroup defaultValue="2">
              <Stack spacing={5} direction="column">
                <Radio  colorScheme="green" value="1" >
                  In Stock (8)
                </Radio>
                <Radio isDisabled colorScheme="red" value="2">
                  Out of Stock (0)
                </Radio>
              </Stack>
            </RadioGroup>
          </VStack>
        </VStack>

        {/* Button */}
        <HStack
        width={"100%"}
        height={"5rem"}
        gap={"1rem"}
        >

        <Button
        width={'7rem'}
        color={"white"}
        backgroundColor={"#5DA88A"}
        borderRadius={'50px'}
        _hover={{backgroundColor: '#FEE4D7', color: '#5DA88A'}}
        >Clear</Button>

        <Button
        width={'7rem'}
        color={"white"}
        backgroundColor={"#5DA88A"}
        borderRadius={'50px'}
        _hover={{backgroundColor: '#FEE4D7', color: '#5DA88A'}}
        >Apply</Button>

        </HStack>
        

        {/* Price */}
        <VStack width={"100%"} height={"15rem"} alignItems={"flex-start"}>
          <Text fontWeight={"600"} fontSize={"1.2rem"}>
            Price
          </Text>

          <HStack
            width={"100%"}
            height={"2px"}
            backgroundColor={"#5DA88A"}
            marginTop={"0.5rem"}
            marginBottom={"0.5rem"}
          ></HStack>

            {/*From  */}
            <Text>From</Text>
            
          <VStack
            width={"100%"}
            height={"10rem"}
            alignItems={"flex-start"}
            fontWeight={"500"}
            fontSize={"0.9rem"}
            letterSpacing={"0.5px"}
          >
          
          <NumberInput
            onChange={(valueString) => setValue(parse(valueString))}
            value={format(value)} backgroundColor={'#EEF6F3'}
            >
         <NumberInputField  />
        <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
        </NumberInputStepper>
        </NumberInput>
        )

          </VStack>

        {/* To */}
        <Text>To</Text>
            
            <VStack
              width={"100%"}
              height={"10rem"}
              alignItems={"flex-start"}
              fontWeight={"500"}
              fontSize={"0.9rem"}
              letterSpacing={"0.5px"}
            >
            
            <NumberInput
              onChange={(valueString) => setValue1(parse1(valueString))}
              value={format(value1)} backgroundColor={'#EEF6F3'} 
              >
           <NumberInputField  />
          <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
          </NumberInputStepper>
          </NumberInput>
          )
  
            </VStack>


        </VStack>
        
         {/* Button */}
         <HStack
        width={"100%"}
        height={"5rem"}
        gap={'1rem'}
        >

        <Button
        width={'7rem'}
        color={"white"}
        backgroundColor={"#5DA88A"}
        borderRadius={'50px'}
        _hover={{backgroundColor: '#FEE4D7', color: '#5DA88A'}}
        >Clear</Button>

        <Button
        width={'7rem'}
        color={"white"}
        backgroundColor={"#5DA88A"}
        borderRadius={'50px'}
        _hover={{backgroundColor: '#FEE4D7', color: '#5DA88A'}}
        >Apply</Button>

        </HStack>


        {/* Product Type */}
        <VStack width={"100%"} height={"9rem"}  alignItems={"flex-start"}>
          <Text fontWeight={"600"} fontSize={"1.2rem"}>
            Product Type
          </Text>

          <HStack
            width={"100%"}
            height={"2px"}
            backgroundColor={"#5DA88A"}
            marginTop={"0.5rem"}
            marginBottom={"0.5rem"}
          ></HStack>

          <VStack
            width={"100%"}
            height={"10rem"}
            alignItems={"flex-start"}
            fontWeight={"500"}
            fontSize={"0.9rem"}
            letterSpacing={"0.5px"}
          >
            <RadioGroup defaultValue="2">
              <Stack spacing={5} direction="column">
                <Radio colorScheme="green" value="1">
                  Fruits  (1)
                </Radio>
                <Radio  colorScheme="green" value="2">
                  Vegetables (8)
                </Radio>
              </Stack>
            </RadioGroup>
          </VStack>
        </VStack>

           {/* Button */}
           <HStack
        width={"100%"}
        height={"5rem"}
        gap={'1rem'}
        >

        <Button
        width={'7rem'}
        color={"white"}
        backgroundColor={"#5DA88A"}
        borderRadius={'50px'}
        _hover={{backgroundColor: '#FEE4D7', color: '#5DA88A'}}
        >Clear</Button>

        <Button
        width={'7rem'}
        color={"white"}
        backgroundColor={"#5DA88A"}
        borderRadius={'50px'}
        _hover={{backgroundColor: '#FEE4D7', color: '#5DA88A'}}
        >Apply</Button>

        </HStack>

        {/* Clear All */}
        <Button 
        width={'100%'}
        height={'3rem'}
        fontSize={'1.2rem'}
        color={"white"}
        backgroundColor={"#5DA88A"}
        borderRadius={'50px'}
        _hover={{backgroundColor: '#FEE4D7', color: '#5DA88A'}}
        >Clear All</Button>
        
        

      </VStack>
    </Box>
  );
}

export default OrganicFruitsSidebar;
