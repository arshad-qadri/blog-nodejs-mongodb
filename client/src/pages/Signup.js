import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  FormControl,
  Button,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Act_signup } from "../redux/actions/users/signup";

const Signup = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.createAccount);
  const toast = useToast();
  useEffect(() => {
    console.log("data", data?.data?.message);
    if (data?.data?.message) {
      toast({
        title: data?.data?.message,
        // description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else if (data?.error?.data?.message) {
      toast({
        title: data?.error?.data?.message,
        // description: "We've created your account for you.",
        position: "top",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [data]);
  const signupData = {
    fullname: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const [signUp, setSignUp] = useState(signupData);

  const handleChange = e => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };
  const hadleSubmit = () => {
    dispatch(Act_signup(signUp));
    // toast({
    //   title: data?.data?.message,
    //   // description: "We've created your account for you.",
    //   status: "success",
    //   duration: 9000,
    //   isClosable: true,
    // });
  };
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
              id="fullname"
              type="text"
              placeholder="Enter your full name"
              marginTop="30px"
              h="50px"
              w="100%"
              name="fullname"
              value={signUp.fullname}
              onChange={e => handleChange(e)}
            />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              marginTop="30px"
              h="50px"
              w="100%"
              name="email"
              value={signUp.email}
              onChange={e => handleChange(e)}
            />
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              marginTop="30px"
              h="50px"
              w="100%"
              name="password"
              value={signUp.password}
              onChange={e => handleChange(e)}
            />
            <Input
              id="cpassword"
              type="password"
              placeholder="Enter your confirm password"
              marginTop="30px"
              h="50px"
              w="100%"
              name="confirm_password"
              value={signUp.confirm_password}
              onChange={e => handleChange(e)}
            />
            <Button
              marginTop="30px"
              p="5px 50px"
              marginRight="0"
              bg="tomato"
              colorScheme="linkedin"
              onClick={hadleSubmit}
            >
              Register
            </Button>
          </FormControl>
          <Box
            display="flex"
            justifyContent="space-between"
            marginTop="20px"
            color="blue.300"
            className="link"
          >
            <Link to="/login">Already have an account?</Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Signup;
