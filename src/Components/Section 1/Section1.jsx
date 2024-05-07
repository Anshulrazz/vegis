import { Box, HStack } from '@chakra-ui/react'
import Section1Card from './Section1Card'

import Image1 from '../../assets/Section 1 Card 1 Image.png'
import Image2 from '../../assets/Section 1 Card 2 Image.png'
import Image3 from '../../assets/Section 1 Card 3 Image.png'
import Image4 from '../../assets/Section 1 Card 4 Image.png'

function Section1() {
  return (
    <Box
    width={'100%'}
    min-height={'100vh'}
    // backgroundColor={'red'}
    >
     
     {/* Section 1 Cards */}
     <HStack justifyContent={'center'} alignItems={'center'} height={'100%'} flexWrap={'wrap'}>
      <Section1Card cardImage={Image1}  cardNumber={'01'} cardTitle={'No Pesticides'} cardText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
      <Section1Card cardImage={Image2}  cardNumber={'02'} cardTitle={'Organic Products'} cardText={"Cras pulvinar mattis nunc sed blandit libero volutpat sed tempus"}/>
      <Section1Card cardImage={Image3}  cardNumber={'03'} cardTitle={'Fresh Eatables'} cardText={"Quam pellentesque nec nam aliquam sem et. Quis enim lobortis scel"}/>
      <Section1Card cardImage={Image4}  cardNumber={'04'} cardTitle={'Healthy Life'} cardText={"Ut sem viverra aliquet eget sit amet tellus. In aliquam sem fringilla ut"} />
      
     </HStack>
    </Box>
  )
}

export default Section1
