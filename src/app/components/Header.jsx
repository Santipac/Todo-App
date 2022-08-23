import { Link as LinkRouter } from 'react-router-dom';
import { ChevronDownIcon, MoonIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Heading,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';


export const Header = () => {
  const {displayName, photoURL} = useSelector(state => state.auth)
  
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch()

  const onLogout = () =>{
    dispatch(startLogout())
  }
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      w={{ base: '100%', md: '70%', lg: '50%' }}
    >
      <Heading
        as="h1"
        fontSize={{ base: '2xl', sm: '4xl' }}
        my="12"
        _light={{ color: 'white' }}
      >
        TodoApp
      </Heading>
      <Box display="flex" alignItems="center">
        <Button
          onClick={() => toggleColorMode()}
          boxShadow="base"
          bg="none"
          _hover={{}}
          mr="4"
          _light={{ bg: 'whiteAlpha.200' }}
          _dark={{ bg: 'blackAlpha.400' }}
        >
          <MoonIcon size="50px" color="white" />
        </Button>
         <Menu minHeight="min-content">
          <ButtonGroup as={MenuButton}>
            
            <Tooltip label={displayName}>
            <Avatar referrerPolicy="no-referrer"  name={displayName} src={`${photoURL}`}  />
            </Tooltip>
            <ChevronDownIcon />
          </ButtonGroup>

          <MenuList >
          <Text textAlign='center' py="2">{displayName}</Text>
           
            <MenuItem as={LinkRouter} to="/auth/login" onClick={onLogout}>Logout</MenuItem>
           
          </MenuList>
        </Menu> 
      </Box>
    </Box>
  );
};
