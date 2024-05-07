import { Menu, MenuButton, MenuItem, MenuList, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

function ShopLink() {
    

    
  return (
    <Menu  >
      <MenuButton className="hover:text-[#5EC49D] transition-all duration-150 ease"  >
        <ChakraLink as={Link} className="flex items-center gap-2" to="/shop">
          SHOP <FaAngleDown />
        </ChakraLink>
      </MenuButton>

      <MenuList display={'flex'} flexDirection={'column'}  gap={'10px'} >
        <MenuItem className="hover:text-[#5EC49D] transition-all duration-150 ease" as={Link} to="/organic-fruits">
          Organic Fruits
        </MenuItem>

         <MenuItem className="hover:text-[#5EC49D] transition-all duration-150 ease" as={Link} to="/aggregate-fruits">
          Aggregate Fruits
        </MenuItem>

           <MenuItem className="hover:text-[#5EC49D] transition-all duration-150 ease" as={Link} to="/pits-fruits">
          Pits Fruits
        </MenuItem>
        
        <MenuItem className="hover:text-[#5EC49D] transition-all duration-150 ease" as={Link} to="/legumas-fruits">
          Legumas Fruits
        </MenuItem>

      </MenuList>
    </Menu>
  );
}

export default ShopLink;
