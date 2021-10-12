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
import { Link } from "react-router-dom";

const Signup = () => {
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
          gridGap="30px"
        >
          <Heading as="h5" textAlign="center" fontWeight="600">
            <span style={{ color: "tomato" }}>Sign</span>
            <span>up</span>
          </Heading>
          <FormControl
            w={{ lg: "600px", md: "600px", sm: "100%" }}
            h="400px"
            p="20px"
          >
            <Input
              type="text"
              placeholder="Enter your full name"
              marginTop="30px"
              h="50px"
              w="100%"
            />
            <Input
              type="email"
              placeholder="Enter your email"
              marginTop="30px"
              h="50px"
              w="100%"
            />
            <Input
              type="password"
              placeholder="Enter your password"
              marginTop="30px"
              h="50px"
              w="100%"
            />
            <Input
              type="password"
              placeholder="Enter your confirm password"
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
              Register
            </Button>
            <Box
              display="flex"
              justifyContent="space-between"
              marginTop="20px"
              color="blue.300"
              className="link"
            >
              <Link to="/login">Already have an account?</Link>
            </Box>
          </FormControl>
        </Container>
      </Box>
    </>
  );
};

export default Signup;
