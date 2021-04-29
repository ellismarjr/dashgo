import { Button, Flex, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/form/Input';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = Yup.object().shape({
  email: Yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
  password: Yup.string().required('Senha é obrigatória')
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values)
  }

  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        background="gray.800"
        padding="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={formState.errors.email}
            {...register('email')}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={formState.errors.password}
            {...register('password')}
          />
        </Stack>
        <Button
          type="submit"
          marginTop={6}
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >Entrar</Button>
      </Flex>
    </Flex>
  )
}
