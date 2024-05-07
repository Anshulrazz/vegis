import { Box, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SortSection from './SortSection'
import OrganicFruitsCards from './OrganicFruitsCards'
import OrganicFruitsSidebar from './OrganicFruitsSIdebar'

function OrganicFruitsSection() {
  return (
    <Box
    width={"100%"}
    min-height={'100vh'}
    
    marginTop={"5rem"}
    >

      {/* Center Box */}
    <Stack
    width={"80%"}
    min-height={'100vh'}
    margin={"auto"}
    flexDirection={["column" , "column" , "column" , 'column' , "row"]}
    >

    {/* Card Side */}
    <VStack
    width={['100%' , '100%' , '100%' , '100%' , '70%']}
    height={'100%'}
    marginBottom={"2rem"}
    >
        
        {/* Sort Section */}
    <VStack
    width={'100%'}
    height={'5rem'}
    backgroundColor={'#EEF6F3'}
    padding={"1rem"}
    gap={"1rem"}
    alignItems={"flex-start"}
    >
        <HStack>
        <Text
        fontWeight={"600"}
        letterSpacing={'1px'}
        >Sort By</Text>
        
        <SortSection />
        </HStack>

        </VStack>
        {/* Cards Section */}
    <Stack 
    width={"100%"}
    min-height={'100%'}
    marginTop={"2rem"}
    overflow={"hidden"}
    alignItems={'center'}
    justifyContent={'center'}
    >
        <OrganicFruitsCards />
        
        </Stack>        


    </VStack>

    {/* SideBar side */}
    <VStack
    width={['100%' , '100%' , '100%' , '100%' , '30%']}
    height={'100%'}
    justifyContent={"flex-start"}
    >
        
    <OrganicFruitsSidebar />

    </VStack>

    </Stack>

    </Box>
  )
}

export default OrganicFruitsSection
