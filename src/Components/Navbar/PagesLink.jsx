import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuList, Link as ChakraLink } from "@chakra-ui/react";

function PagesLink() {
  return (
    <Menu  >
    <MenuButton className='hover:text-[#5EC49D] transition-all duration-150 ease' >
      <ChakraLink as={Link} className="flex items-center gap-2" to="/shop">
        PAGES <FaAngleDown />
      </ChakraLink>
    </MenuButton>

    <MenuList display={'flex'} flexDirection={'column'}  gap={'10px'}>
      <MenuItem className='hover:text-[#5EC49D] transition-all duration-150 ease' as={Link} to="/about">
        About
      </MenuItem>

       <MenuItem className='hover:text-[#5EC49D] transition-all duration-150 ease' as={Link} to="/services">
        Services
      </MenuItem>

         <MenuItem className='hover:text-[#5EC49D] transition-all duration-150 ease' as={Link} to="/faq">
        FAQ'S
      </MenuItem>
      
      <MenuItem className='hover:text-[#5EC49D] transition-all duration-150 ease' as={Link} to="/my-account">
        My Account
      </MenuItem>

    </MenuList>
  </Menu>
  )
}

export default PagesLink
