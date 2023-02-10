import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react';
  import { Button, ButtonGroup } from '@chakra-ui/react'
  import FetchData from './FectchData';
  import { Routes,Route } from 'react-router-dom';
const DisplayData=()=>{
    return(
        <div>
            
        <Menu>
                <MenuButton as={Button} colorScheme='pink' onClick={<FetchData/>}>
                    Profile
                </MenuButton>
         </Menu> 
         
        </div>
    )
}
export default DisplayData;