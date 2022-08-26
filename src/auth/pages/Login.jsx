import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  Spinner,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import {
  checkingAuth,
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from '../../store/auth';
import { AuthLayout } from '../layout/AuthLayout';



//TODO: AGREGAR FORGOTTEN PASSWORD



const formData = {
  email: '',
  password: '',
}


export const Login = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const { email, password, onInputChange } = useForm(formData);

  const onSubmit = e => {
    e.preventDefault();
   
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const googleSubmit = e => {
    e.preventDefault();
    dispatch(startGoogleSignIn());
  };
  return (
    <AuthLayout>
      <form onSubmit={onSubmit}>
        <FormControl isRequired>
          <FormLabel color="black">Email</FormLabel>
          <Input
          autoComplete="on"
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
            id="email"
          />
          <FormLabel color="black" my="4">
            Password
          </FormLabel>
          <Input
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
            id="password"
          />
        </FormControl>
        <Box display="flex" justifyContent="center" w="100%" mt="6">
          <Button
            type="submit"
            bgColor="blue.600"
            width="50%"
            mx="1"
            _hover={false}
            color="white"
            disabled={isAuthenticating}
          >
            <Text>Login</Text>
          </Button>
          <Button
            bgColor="blackAlpha.100"
            color="black"
            width="50%"
            mx="1"
            _hover={false}
            onClick={googleSubmit}
            disabled={isAuthenticating}
          >
            <FcGoogle size="30px" />
            <Text pl="1">Google</Text>
          </Button>
        </Box>
      </form>
      {errorMessage && (
        <Alert
          bgColor="red.500"
          borderRadius="md"
          mt="4"
          status="error"
          className="animate__animated animate__bounceIn"
        >
          <AlertIcon color="#a42f2f"/>
          <Text color="white">{errorMessage}</Text>
        </Alert>
      )}
      <Box alignSelf="end" mt="4">
        <Link
          as={LinkRouter}
          to="/auth/register"
          color="black"
          textDecoration="underline"
        >
          Create Account
        </Link>
      </Box>
    </AuthLayout>
  );
};
