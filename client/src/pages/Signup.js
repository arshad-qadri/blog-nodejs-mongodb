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

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { account_create } from "../redux/actions/users/signup";

const Signup = () => {
  const toast = useToast();
  const data = useSelector(state => state.createAccount);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("eff data", data);
  }, [data]);

  const signupData = {
    fullname: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const [signup, setSignup] = useState(signupData);

  const handleChange = e => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const hadleSubmit = () => {
    // if (data.validation) {
    //   console.log("msg", data.validation);
    // } else {
    //   console.log("val", data.message);
    // }
    if (data?.error) {
      // console.log("clicked");
      console.log("err");
      console.log("eff data", data);
    } else {
      console.log("data", data);
      console.log("clicked");
      dispatch(account_create(signup));
    }
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
              value={signup.fullname}
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
              value={signup.email}
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
              value={signup.password}
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
              value={signup.confirm_password}
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
