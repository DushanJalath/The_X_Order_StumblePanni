
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  useToast,
  VStack,
  Link,
} from "@chakra-ui/react";
import { useForm, FieldValues } from "react-hook-form";
import "../styles/global.css";
import { useNavigate } from "react-router-dom";

function fakeApiSignIn(data: FieldValues) {
  return { success: true }; // Replace with actual API request
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const toast = useToast();
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    try {
      // Simulate an API request
      const response = await fakeApiSignIn(data);

      if (response.success) {
        toast({
          title: "Sign in successful.",
          description: "You've signed in successfully.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });

        navigate("/example"); // Replace '/dashboard' with the desired route
      } else {
        toast({
          title: "Sign in failed.",
          description: "Invalid credentials.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: "There was an issue with the sign-in process.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleForgotPassword = () => {
    toast({
      title: "Forgot Password",
      description: "Contact admin@visa.lk for resetting the password.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (

    <div className="center-both">
      <Box maxW="md" mx="auto" p={4}>
        <VStack spacing={4} align="stretch">
          <Heading textAlign="center">Sign In</Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl isInvalid={!!errors.email}>
                {/* <FormLabel htmlFor="email">Email</FormLabel> */}
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  borderColor="gray.400"
                  {...register("email", { required: "Email is required" })}
                />
              </FormControl>
              <FormControl isInvalid={!!errors.password}>
                {/* <FormLabel htmlFor="password">Password</FormLabel> */}
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  borderColor="gray.400"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </FormControl>
              <Button type="submit" colorScheme="teal">
                Sign In
              </Button>
              <Link
                color="teal"
                _hover={{
                  color: "teal", // Darken on hover
                }}
                onClick={handleForgotPassword}
                fontSize="sm"
                textAlign="center"
              >
                Forgot Password?
              </Link>
            </Stack>
          </form>
        </VStack>
      </Box>
    </div>
  );
};


export default Login;
