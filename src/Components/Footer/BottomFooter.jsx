import { HStack, VStack } from "@chakra-ui/react";

function BottomFooter() {
  return (
    <>
      <VStack width={"100%"} height={"100%"} paddingBottom={"50px"}>
        {/* Footer Bottom Links  */}
        <HStack
        height={"100%"}
          width={"92%"}
          justifyContent={['flex-start' , 'flex-start' , 'flex-start' , 'center']}
          gap={['40px' , '80px' , '80px' , '80px']}
          marginTop={"50px"}
          flexWrap={["wrap", "wrap", "wrap", "wrap"]}
         alignItems={"flex-start"}
        >
          {/* Legal */}
          <VStack alignItems={"flex-start"} >
            <h1 className="text-xl font-semibold mb-4">Legal</h1>
            <p>Terms Of Service</p>
            <p>Privacy Policy</p>
            <p>Cookies</p>
            <p>Ad Cookies</p>
          </VStack>

          {/* Opening Hours */}
          <VStack alignItems={"flex-start"}>
            <h1 className="text-xl font-semibold mb-4">Opening Hours</h1>
            <p>Monday - Wednesday............. 09:00 - 20:00</p>
            <p>Wednesday- Friday............. 09:00 - 19:00</p>
            <p>Friday- Saturday............. 09:00 - 13:00</p>
            <p>Sunday......................... CLOSED</p>
          </VStack>

          {/* Partners */}
          <VStack alignItems={"flex-start"}>
            <h1 className="text-xl font-semibold mb-4">Partners</h1>
            <p>Retailers</p>
            <p>Affilates</p>
            <p>For Developers</p>
            <p>Press Releases</p>
          </VStack>

          {/* Services */}
          <VStack alignItems={"flex-start"}>
            <h1 className="text-xl font-semibold mb-4">Services</h1>
            <p>ABout Us</p>
            <p>Careers</p>
            <p>Buzz</p>
            <p>Activity Index</p>
          </VStack>

          {/* Information */}
          <VStack alignItems={"flex-start"}>
            <h1 className="text-xl font-semibold mb-4">Information</h1>
            <p>Our Company</p>
            <p>Partners</p>
            <p>Affiliates Program</p>
            <p>Vendors & Authors</p>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
}

export default BottomFooter;
