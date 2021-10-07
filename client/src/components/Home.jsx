import {
  Box,
  Container,
  Heading,
  Text,
  FormControl,
  Button,
  Input,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  // console.log(history);
  return (
    <>
      <Navbar />
      <Box bg="gray.100">
        <Container
          bg="white"
          maxW="container.xl"
          p={{ lg: "40px", md: "40px", sm: "20px" }}
        >
          <Box minH="91.6vh">
            <FormControl>
              <Input
                type="text"
                placeholder="Search here..."
                w="100%"
                h="70px"
                fontSize="1.1rem"
                focusBorderColor="tomato"
                color="tomato"
              />
            </FormControl>
            <Box paddingTop="40px">
              <Heading as="h4" fontSize="1.7rem">
                What is Lorem Ipsum ?
              </Heading>
              <Text marginTop="20px" textAlign="justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like... <br />
                <Button
                  colorScheme="white"
                  bg="tomato"
                  color="#fff"
                  size="sm"
                  mt="10px"
                  letterSpacing="1px"
                  className="_hover"
                >
                  Read more...
                </Button>
              </Text>
            </Box>
            <Box paddingTop="40px">
              <Heading as="h4" fontSize="1.7rem">
                What is Lorem Ipsum ?
              </Heading>
              <Text marginTop="20px" textAlign="justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like...
                <br />
                <Button
                  colorScheme="white"
                  bg="tomato"
                  color="#fff"
                  size="sm"
                  mt="10px"
                  letterSpacing="1px"
                  className="_hover"
                >
                  Read more...
                </Button>
              </Text>
            </Box>
            <Box paddingTop="40px">
              <Heading as="h4" fontSize="1.7rem">
                What is Lorem Ipsum ?
              </Heading>
              <Text marginTop="20px" textAlign="justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like...
                <br />
                <Button
                  colorScheme="white"
                  bg="tomato"
                  color="#fff"
                  size="sm"
                  mt="10px"
                  letterSpacing="1px"
                  className="_hover"
                >
                  Read more...
                </Button>
              </Text>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
