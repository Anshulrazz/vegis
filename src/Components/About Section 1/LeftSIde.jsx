import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import leftImg from '../../assets/Left SIde Image.png';
import freshImage from '../../assets/Fresh.png';

function LeftSIde() {
  return (
    <Box
      width={'100%'}
      height={'100%'}
      transition={'all 1s linear'}
      _hover={{
        '.img-before-element::before': {
          backgroundColor: '#5CA88A',
        },
      }}
    >
      <HStack 
       
      gap={['2rem' , '2rem' , '2rem ' , '5rem' , '5rem']} 
      width={'100%'} height={'100%'} 
      flexDirection={['column'  , 'column' , 'column' , 'row' , 'row']} >
        {/* Image */}
        <HStack 
         alignItems={'flex-start'}
        paddingTop={'5rem'} 
        width={['100%' , '60%' , '60%' , '50%' , '50%']} 
        overflow={'hidden'} 
        height={'100%'} 
        zIndex={1} 
        position={'relative'}>
          <HStack
         
            className='img-before-element'
            _before={{
              content: '""',
              width: '80%',
              height: '80%',
              backgroundColor: '#96C892',
              position: 'absolute',
              zIndex: -1,
              left: '4%',
              top: '10%',
              transition: 'background-color 0.2s ease-in-out', // Add transition effect
            }}
            width={'100%'}
            height={'100%'}
            justifyContent={['center' , 'center' , 'center' , 'center' , 'center']}
          >
            <Image  width={'100%'} height={'100%'} objectFit={'cover'} boxSize={'80%'} src={leftImg} />
          </HStack>
        </HStack>

        {/* Text */}
        <VStack justifyContent={'center'} alignItems={'flex-start'} width={['100%' , '100%' , '100%' , '50%' , '50%']} height={'100%'}>
          {/* Text Image */}
          <HStack width={'100%'} height={'100%'}>
            <Image boxSize={'50px'} src={freshImage} />
          </HStack>

          {/* Title */}
          <HStack 
          justifyContent={'center'}
             width={['80%' , '100%' , '100%' , '50%' , '50%']} 
          height={'100%'}
          >
            <Text fontSize={'30px'} fontWeight={'600'} letterSpacing={'2px'}>
              Healthy Leaves Saves Life
            </Text>
          </HStack>

          {/* Para */}
          <HStack 
             
          marginTop={'1rem'}  
          justifyContent={['flex-start' , 'center' , 'center' , 'flex-start' , 'flex-start']} 
          textAlign={['left' , 'center' , 'center' , 'left' , 'left']}
          >
            <Text 
            letterSpacing={'1px'}  
            width={['100%' , '80%' , '80%' , '80%' , '80%']} 
            >
              Duis eu libero erat. Nam elementum turpis tortor, ac mattis quam faucibus eget. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec sapien ut velit ultrices porta.
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}

export default LeftSIde;
