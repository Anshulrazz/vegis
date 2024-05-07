import React from 'react';
import { Select } from '@chakra-ui/react';

function SortSection() {
  return (
    <Select
      bg='#5DA88A'
      color='white'
      placeholder=''
      width={['80%', '100%', '12rem']}
      height={'2.5rem'}
      border='none'
      focusBorderColor='transparent'
      variant='outlined'
      _focus={{bg: '#5DA88A'}}
      
    >

      <option style={{ background: '#F8F0E5' , color: 'black' , ':hover': { background: '#3498DB' } }} value='featured' >
        Featured
      </option>

      <option
      style={{ background: '#F8F0E5' , color: 'black' , ':hover': { background: '#3498DB' } }} 
      value='bestSelling' >
        Best Selling
      </option>
      
      <option
      style={{ background: '#F8F0E5' , color: 'black' , ':hover': { background: '#3498DB' } }} 
      value='A-Z' >
        A-Z
      </option>

      <option
      style={{ background: '#F8F0E5' , color: 'black' , ':hover': { background: '#3498DB' } }} 
      value='Z-A' >
        Z-A
      </option>

      <option
      style={{ background: '#F8F0E5' , color: 'black' , ':hover': { background: '#3498DB' } }} 
      value='Z-A' >
        Z-A
      </option>

      <option
      style={{ background: '#F8F0E5' , color: 'black' , ':hover': { background: '#3498DB' } }} 
      value='price-low-to-high' >
        Price - Low to High
      </option>

      <option
      style={{ background: '#F8F0E5' , color: 'black' , ':hover': { background: '#3498DB' } }} 
      value='price-high-to-low' >
        Price - High to Low
      </option>

      <option
      style={{ background: '#F8F0E5' , color: 'black' , ':hover': { background: '#3498DB' } }} 
      value='price-high-to-low' >
        Price - High to Low
      </option>

    </Select>
  );
}

export default SortSection;
