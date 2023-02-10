import React ,{useState,useEffect}from 'react';
import axios from 'axios';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react';
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
const FetchData=()=>{
    const [users,setUsers] = useState([]);
    const[show,setShow]=useState(false)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").
        then((res)=>setUsers(res.data)).
        catch((err)=>console.log(err))
    })
    const showTable=()=>{
        setShow(true)
    }
    return(
        <div >
            <div style={{"border":"2px solid white","height":"60px","background":"yellowgreen"}}>
                <Menu >
                    <MenuButton as={Button} colorScheme='pink' onClick={showTable}>
                        Profile
                    </MenuButton>
            </Menu> 
           </div>
           { show ? <TableContainer id="table">
                <Table size="md" variant='striped' colorScheme='teal'>
                    <Thead>
                         <Tr>
                            <Th>USER ID</Th>
                            <Th>USER NAME</Th>
                            <Th >USER EMAIL</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users.map((user)=>{
                            return (
                                        <>
                                            <Tr>
                                            <Td>{user.id}</Td>
                                            <Td>{user.name}</Td>
                                            <Td >{user.email}</Td>
                                           </Tr>
                                        </>
                                    )
                        })} 
                    </Tbody>
                </Table>
            </TableContainer>:<h1>click on profile to view content</h1 >}
           
        </div>
    )
}
export default FetchData