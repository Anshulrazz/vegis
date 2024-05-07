import {
  Box,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import logo from "./Footer-Logo.png";
import './footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <>
      <Box
        width={"100%"}
        min-height={"100vh"}
        paddingTop={"3rem"}
        overflow={"hidden"}
        // marginBottom={'100px'}
        paddingBottom={"0px"}
      >
        {/* Blue Box */}
        <Box
          width={"95%"}
          height={"100%"}
          margin={"auto"}
          backgroundColor={"#6CB095"}
          borderRadius={['30px', '30px', '30px', '80px']}
          color={"white"}

        >
          {/*Footer Top  */}
          <Stack
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            paddingTop={["0px", "0px", "10px", "20px", "50px"]}
          >
            <HStack
              display={["grid", "grid", "grid", "grid", "flex"]}
              gridTemplateColumns={"repeat(1, 1fr)"}

              alignItems={"center"}
              justifyContent={"center"}
              gap={"20px"}
              paddingLeft={["20px", "0px", "20px", "0px", "0px"]}
            >
              {/* Footer Image Logo */}
              <HStack
                justifyContent={"center"}
                alignItems={"center"}
                width={["100%", "100%", "100%", "100%", "10%"]}
                marginTop={["10px", "10px", "10px", "10px", "10px"]}
              >
                <Image
                  src={logo}
                  alt="logo"
                  width={"100px"}
                  height={"100px"}
                  objectFit={"contain"}
                />
              </HStack>

              {/* Footer Top Items */}
              <HStack
                alignItems={"center"}
                justifyContent={"space-evenly"}
                display={["grid", "grid", "grid", "flex", "flex"]}
                gridTemplateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(1, 1fr)",
                  "repeat(2, 1fr)",
                ]}
                gap={["20px", "20px", "20px", "0px", "0px"]}
              >
                {/* Address Details */}
                <HStack width={["100%", "100%", "100%", "24%", "24%"]}>
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    width={"50px"}
                    height={"50px"}
                    backgroundColor={"white"}
                    borderRadius={"50%"}
                  >
                    <FaLocationDot color="#5EA98B" />
                  </Stack>
                  <Text width={"70%"}>
                    No: 58 A, East Madison Street, Baltimore, MD, USA 4508.
                  </Text>
                </HStack>

                {/* Phone Number */}
                <HStack gap={"20px"} width={"fit-content"}>
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    width={"50px"}
                    height={"50px"}
                    backgroundColor={"white"}
                    borderRadius={"50%"}
                  >
                    <IoMdCall color="#5EA98B" />
                  </Stack>
                  <Text className="text-4xl max-[500px]:text-2xl font-semibold">
                    <a href="tel:+916396920349">+916396920349</a>
                  </Text>
                  {/* <Image
                  src={remark}
                  alt="logo"
                  width={"200px"}
                  height={"200px"}
                  objectFit={"contain"}
                /> */}
                </HStack>

                {/* Social Media */}
                <HStack
                  className="max-[]"
                  gap={"10px"}
                  width={"fit-content"}
                  paddingLeft={["0px", "0px", "0px", "0px", "0px"]}
                >
                  {/* Twitter */}
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    width={["30px", "50px", "50px", "50px", "50px"]}
                    height={["30px", "50px", "50px", "50px", "50px"]}
                    backgroundColor={"white"}
                    borderRadius={"50%"}
                  >
                    <FaTwitter color="#5EA98B" />
                  </Stack>

                  {/* Facebook */}
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    width={["30px", "50px", "50px", "50px", "50px"]}
                    height={["30px", "50px", "50px", "50px", "50px"]}
                    backgroundColor={"white"}
                    borderRadius={"50%"}
                  >
                    <FaFacebookF color="#5EA98B" />
                  </Stack>

                  {/* Instagram */}
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    width={["30px", "50px", "50px", "50px", "50px"]}
                    height={["30px", "50px", "50px", "50px", "50px"]}
                    backgroundColor={"white"}
                    borderRadius={"50%"}
                  >
                    <FaInstagram color="#5EA98B" />
                  </Stack>

                  {/* LinkedIn */}
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    width={["30px", "50px", "50px", "50px", "50px"]}
                    height={["30px", "50px", "50px", "50px", "50px"]}
                    backgroundColor={"white"}
                    borderRadius={"50%"}
                  >
                    <FaLinkedinIn color="#5EA98B" />
                  </Stack>
                </HStack>
              </HStack>
            </HStack>
          </Stack>
          <hr className="mt-16 w-[70rem] m-auto" />
        </Box>
        <div className="last">
          <center>
            <p>&copy; 2024 All rights reserved. By <a href="https://www.instagram.com/anshul__000001/" target="_blank">@anshulkumar</a></p>
          </center>
        </div>
      </Box>
    </>
  );
}

export default Footer;
