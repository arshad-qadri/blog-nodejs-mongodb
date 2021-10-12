import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  FormControl,
  Button,
  Input,
} from "@chakra-ui/react";

const ForgotPassword = () => {
  return (
    <>
      <Box bg="gray.100" w="100%" h="100vh" className="login">
        <Container
          maxW="container.xl"
          bg="#fff"
          h="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          //   gridGap="30px"
        >
          <Heading as="h5" mt="50px" textAlign="center" fontWeight="600">
            <span style={{ color: "tomato" }}>Forgot </span>
            <span>Password</span>
          </Heading>
          <Text mt="15px">Search your account</Text>
          <FormControl
            w={{ lg: "600px", md: "600px", sm: "100%" }}
            h="400px"
            p="20px"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              marginTop="30px"
              h="50px"
              w="100%"
            />

            <Button
              marginTop="30px"
              p="5px 50px"
              marginRight="0"
              bg="tomato"
              colorScheme="linkedin"
            >
              Submit
            </Button>
          </FormControl>
        </Container>
      </Box>
    </>
  );
};

export default ForgotPassword;
