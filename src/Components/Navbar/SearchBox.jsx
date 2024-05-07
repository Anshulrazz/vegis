import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

function SearchBox() {
  return (
    <InputGroup height={"40px"} backgroundColor={"#EEF6F3"} borderRadius={"20px"} display={'flex'} justifyContent={'space-between'} alignItems={'center'} paddingRight={'0px'}> 
    <Input outline={'none'} width={"90%"} border={'none'} variant={"filled"} color={'#5EA98B'} type="text" placeholder="Search..." /> <FaSearch  className='hover:bg-[#5EA98B] hover:text-white w-12 rounded-full h-12 p-4 text-[#5EA98B]'/>
    <InputRightElement pointerEvents="none"  />
    
  </InputGroup>
  )
}

export default SearchBox
