import {
  Box,
  Heading,
  Container,
  UnorderedList,
  ListItem,
  Flex,
  FormControl,
  Input,
  Center,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { GoSearch, GoThreeBars } from "react-icons/go";

const Navbar = () => {
  return (
    <>
      <Box w="100%" py="5" bg="white" boxShadow="lg">
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading as="h6" fontSize="2rem">
              <span style={{ color: "tomato" }}>My</span>
              <span>Blog</span>
            </Heading>

            <Flex
              justifyContent="center"
              display={{ lg: "block", md: "block", sm: "none" }}
            >
              <UnorderedList listStyleType="none">
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  style={{ columnGap: "30px" }}
                >
                  <ListItem fontSize="1.3rem" fontWeight="500">
                    <NavLink to="/">Home</NavLink>
                  </ListItem>
                  <ListItem fontSize="1.3rem" fontWeight="500">
                    <NavLink to="/about">About</NavLink>
                  </ListItem>
                  <ListItem fontSize="1.3rem" fontWeight="500">
                    <NavLink to="/contact">Contact</NavLink>
                  </ListItem>
                </Flex>
              </UnorderedList>
              <Box>
                <FormControl
                  w="300px"
                  h="40px"
                  position="relative"
                  borderRadius="10px"
                  overflow="hidden"
                >
                  <Input
                    type="text"
                    borderRadius="10px"
                    placeholder="Search..."
                  />
                  <Flex
                    position="absolute"
                    right="0"
                    top="50%"
                    transform="translateY(-50%)"
                    w="40px"
                    h="100%"
                    bg="tomato"
                    justifyContent="center"
                    fontSize="1.5rem"
                    color="white"
                    fontWeight="600"
                  >
                    <Center>
                      <GoSearch />
                    </Center>
                  </Flex>
                </FormControl>
              </Box>
            </Flex>

            {/* ===================== toggler ===== */}
            <Flex
              w="40px"
              h="40px"
              //   bg="gray"
              justifyContent="center"
              alignItems="center"
              fontSize="1.8rem"
              borderRadius="5px"
              border="solid black"
              borderWidth="1px"
            >
              <GoThreeBars />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
