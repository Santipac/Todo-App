import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';
import { AuthLayout } from '../layout/AuthLayout';
import { useDispatch, useSelector } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useMemo } from 'react';
import { Formik, Field } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';

const formData = {
  displayName: '',
  email: '',
  password: '',
};

export const Register = () => {
  // const { displayName, email, password, onInputChange, formState } =
  //   useForm(formData);
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth);
  const isAuthenticating = useMemo(() => status === 'checking', [status]);
  const onSubmit = e => {
    e.preventDefault();
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout>
      <Box>
        <Formik
          initialValues={{
            displayName: '',
            email: '',
            password: '',
          }}
          onSubmit={({ displayName, email, password }, { resetForm }) => {
            dispatch(
              startCreatingUserWithEmailPassword({
                displayName,
                email,
                password,
              })
            );
            resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
          }) => (
            <form onSubmit={handleSubmit}>
              <FormControl
                mt="2"
                p="1"
                isInvalid={!!errors.displayName && touched.displayName}
              >
                <FormLabel htmlFor="displayName" color="black">
                  Nombre
                </FormLabel>
                <Field
                  as={Input}
                  type="text"
                  id="displayName"
                  name="displayName"
                  variant="flushed"
                  color="black"
                  placeholder="John Smith"
                  borderBottom="2px solid"
                  borderColor="blackAlpha.600"
                  _placeholder={{ color: 'blackAlpha.600' }}
                  value={values.displayName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  validate={value => {
                    let error;
                    if (value.length < 3) {
                      error = 'Nombre inválido, inserte mínimo 3 caracteres ';
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value)) {
                      error = 'Solo puede contener letras y espacios';
                    }
                    return error;
                  }}
                />

                <FormErrorMessage>{errors.displayName}</FormErrorMessage>
              </FormControl>
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
                  _focus={{ borderColor: 'blue.400' }}
                  placeholder="ejemplo@cuenta.com"
                  _placeholder={{ color: 'blackAlpha.600' }}
                  value={values.email}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  width="100%"
                  mx="1"
                  _hover={{}}
                  color="white"
                >
                  Crear cuenta
                </Button>
              </Box>
            </form>
          )}
        </Formik>
        <Box display="flex" justifyContent="end" mt="4">
          <Text pr="2" color="blackAlpha.700">
            ¿Ya tienes una cuenta?
          </Text>
          <Link
            as={LinkRouter}
            to="/auth/login"
            color="blue.500"
            textDecoration="underline"
          >
            Ingresar
          </Link>
        </Box>
      </Box>
    </AuthLayout>
  );
};
