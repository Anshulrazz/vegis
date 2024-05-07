import { Box, VStack, Image, Button, Flex } from "@chakra-ui/react";
import HeroBg from "../../assets/Hero bg.jpg";
import Login from "../Navbar/Login";

function Hero() {
  return (
    <Flex
      width="100%"
      height={["auto", "auto", "auto", "auto", "100vh"]}
      overflow="hidden"
      marginBottom="5rem"
      position="relative" // Ensure relative positioning for absolute elements
    >
      {/* Hero Content */}
      <VStack
        width="100%"
        height="90%"
        backgroundColor="#6CB095"
        borderRadius={["0px", "0px", "0px", "0px", "80px"]}
        color="white"
        overflow="hidden"
        position="relative"
      >
        {/* Hero Image */}
        <Image
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition={["right", "right", "right", "center", "center"]}
          src={HeroBg}
        />

        {/* Hero Content */}
        <VStack
          position="absolute"
          width="100%"
          height="100%"
          top={0}
          left={0}
          alignItems={["center", "center", "center", "flex-start", "flex-start"]}
          justifyContent={["center", "center", "center", "center", "flex-start"]}
          backgroundColor={["#ffffffc5", "#ffffffc5", "#ffffffc5", "transparent", "transparent"]}
          className="bg-[#ffffffc5]"
          padding={["2rem", "2rem", "2rem", "4rem", "6rem"]}
        ><br></br>
          <h1 className="text-2xl max-md:text-xl max-[500px]:text-lg  tracking-widest font-normal text-[#000]">
            Fresh & Organically Grown
          </h1>
          <h1 className="text-4xl max-md:text-3xl max-[500px]:text-2xl font-medium tracking-wider mt-4 text-[#5EA98B]">
            FLOURISHED VEGGIES
          </h1>
          <h1 className="text-4xl max-md:text-3xl max-[500px]:text-2xl font-light tracking-widest mt-4 text-[#000] ">
            Save Upto <span className="font-medium italic">20% off</span>
          </h1>

          <Button
            fontSize="1.1rem"
            padding={["0.5rem 1.5rem", "0.5rem 1.5rem", "1.2rem 2rem"]}
            backgroundColor="#5EA98B"
            borderRadius="20px"
            color="white"
            textTransform="uppercase"
            marginTop={["0.8rem", "0.8rem", "1.5rem"]}
            _hover={{
              backgroundColor: "transparent",
              border: "1px solid black",
              color: "black",
            }}
          >
            Shop Now
          </Button>
        </VStack>
      </VStack>
      {/* Login Component */}
      <Box position="absolute" top="3rem" right="1rem">
        <Login />
      </Box>
    </Flex>
  );
}

export default Hero;
