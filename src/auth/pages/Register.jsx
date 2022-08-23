import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';
import { AuthLayout } from '../layout/AuthLayout';

const formData = {
  displayName: '',
  email: '',
  password: '',
};

export const Register = () => {
  const { displayName, email, password, onInputChange, formState } =
    useForm(formData);
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth);
  const isAuthenticating = useMemo(() => status === 'checking', [status]);
  const onSubmit = e => {
    e.preventDefault();
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout>
      <form onSubmit={onSubmit}>
        <FormControl isRequired>
          <FormLabel color="black">Name</FormLabel>
          <Input
          id='registerName'
            type="text"
            name="displayName"
            onChange={onInputChange}
            color="black"
            border="2px solid"
            borderColor="blackAlpha.600"
            placeholder="John Smith"
            _placeholder={{ color: 'blackAlpha.600' }}
            _hover={{ borderColor: 'blackAlpha.700' }}
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
            title="Insert only letters"
          />
          <FormLabel my="4" color="black">
            Email
          </FormLabel>
          <Input
           id='registerEmail'
            type="email"
            name="email"
            onChange={onInputChange}
            color="black"
            border="2px solid"
            borderColor="blackAlpha.600"
            placeholder="example@example.com"
            _placeholder={{ color: 'blackAlpha.600' }}
            _hover={{ borderColor: 'blackAlpha.700' }}
            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
          />
          <FormLabel color="black" my="4">
            Password
          </FormLabel>
          <Input
           id='registerPassword'
          autoComplete="on"
            type="password"
            name="password"
            onChange={onInputChange}
            color="black"
            border="2px solid"
            borderColor="blackAlpha.600"
            placeholder="Insert your password here"
            _placeholder={{ color: 'blackAlpha.600' }}
            _hover={{ borderColor: 'blackAlpha.700' }}
            minLength="6"
          />
        </FormControl>
        <Box display="flex" justifyContent="center" w="100%" mt="6">
          <Button
            type="submit"
            bgColor="blue.600"
            width="100%"
            mx="1"
            _hover={false}
            color="white"
            disabled={isAuthenticating}
          >
            Create Account
          </Button>
        </Box>
      </form>
      {errorMessage && (
        <Alert
          bgColor="red.600"
          borderRadius="md"
          mt="4"
          status="error"
          className="animate__animated animate__bounceIn"
        >
          <AlertIcon />
          {errorMessage}
        </Alert>
      )}
      <Box alignSelf="end" mt="4" display="flex">
        <Text pr="2" color="black">
          Already have an account?
        </Text>
        <Link
          as={LinkRouter}
          to="/auth/login"
          color="black"
          textDecoration="underline"
        >
          Login
        </Link>
      </Box>
    </AuthLayout>
  );
};
