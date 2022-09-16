import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
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
};

export const Login = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const { email, password, onInputChange } = useForm(formData);

  // const onSubmit = e => {
  //   e.preventDefault();

  //   dispatch(startLoginWithEmailPassword({ email, password }));
  // };

  const onGoogleSubmit = e => {
    e.preventDefault();
    dispatch(startGoogleSignIn());
  };
  return (
    <AuthLayout>
      <div>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={({ email, password }, { resetForm }) => {
            dispatch(startLoginWithEmailPassword({ email, password }));
            resetForm();
          }}
        >
          {({ values, errors, touched, handleSubmit, handleBlur }) => (
            <form onSubmit={handleSubmit}>
              <FormControl
                my="6"
                p="1"
                isInvalid={!!errors.email && touched.email}
              >
                <FormLabel htmlFor="email" color="black">
                  Email
                </FormLabel>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  variant="flushed"
                  color="black"
                  borderBottom="2px solid"
                  borderColor="blackAlpha.600"
                  placeholder="ejemplo@cuenta.com"
                  _placeholder={{ color: 'blackAlpha.600' }}
                  value={values.email}
                  onBlur={handleBlur}
                  validate={value => {
                    let error;
                    if (!value) {
                      error = 'Por favor ingrese un Correo';
                    } else if (
                      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                        value
                      )
                    ) {
                      error =
                        'Por favor ingrese un Correo con un formato válido';
                    }
                    return error;
                  }}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                p="1"
                isInvalid={!!errors.password && touched.password}
              >
                <FormLabel htmlFor="password" color="black">
                  Contraseña
                </FormLabel>
                <Field
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                  variant="flushed"
                  color="black"
                  borderBottom="2px solid"
                  borderColor="blackAlpha.600"
                  placeholder="Escriba su contraseña aquí"
                  _placeholder={{ color: 'blackAlpha.600' }}
                  value={values.password}
                  onBlur={handleBlur}
                  validate={value => {
                    let error;
                    if (value.length < 6) {
                      error = 'La contraseña debe poseer mínimo 6 caracteres';
                    }
                    return error;
                  }}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <Box display="flex" justifyContent="center" w="100%" mt="6">
                <Button
                  boxShadow="lg"
                  type="submit"
                  bgColor="blue.400"
                  width="50%"
                  mx="1"
                  _hover={{}}
                  color="white"
                  disabled={isAuthenticating}
                >
                  <Text>Ingresar</Text>
                </Button>
                <Button
                  boxShadow="md"
                  bgColor="blackAlpha.100"
                  color="black"
                  width="50%"
                  mx="1"
                  _hover={{}}
                  onClick={onGoogleSubmit}
                  disabled={isAuthenticating}
                >
                  <FcGoogle size="30px" />
                  <Text pl="1">Google</Text>
                </Button>
              </Box>
            </form>
          )}
        </Formik>
        {errorMessage && (
          <Alert
            bgColor="red.500"
            borderRadius="md"
            mt="4"
            status="error"
            className="animate__animated animate__bounceIn"
          >
            <AlertIcon color="white" />
            <Text color="white" fontWeight="semibold">
              {errorMessage}
            </Text>
          </Alert>
        )}
        <Box display="flex" justifyContent="end" mt="4">
          <Link
            as={LinkRouter}
            to="/auth/register"
            color="blue.500"
            textDecoration="underline"
          >
            Crear Cuenta
          </Link>
        </Box>
      </div>
    </AuthLayout>
  );
};
