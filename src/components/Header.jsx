import { ChevronDownIcon, MoonIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from '@chakra-ui/react';
import { Link as LinkRouter } from 'react-router-dom';
export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
          _hover={'none'}
          mr="4"
          _light={{ bg: 'whiteAlpha.200' }}
          _dark={{ bg: 'blackAlpha.400' }}
        >
          <MoonIcon size="50px" color="white" />
        </Button>
        {/* <Menu minHeight="min-content">
          <ButtonGroup as={MenuButton}>
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <ChevronDownIcon />
          </ButtonGroup>

          <MenuList>
            <Link as={LinkRouter} to="/">
              <MenuItem>Create</MenuItem>
            </Link>
            <Link as={LinkRouter} to="/">
              <MenuItem>Task List</MenuItem>
            </Link>

            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu> */}
      </Box>
    </Box>
  );
};
