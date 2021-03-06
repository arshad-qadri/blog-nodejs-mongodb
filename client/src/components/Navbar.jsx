import {
  Box,
  Heading,
  Container,
  UnorderedList,
  ListItem,
  Flex,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";

const Navbar = () => {
  const [show, setShow] = useState("");

  const handleShowMenu = () => {
    show ? setShow("") : setShow("showMenu");
  };
  return (
    <>
      <Box w="100%" py="5" bg="white" boxShadow="lg" position="relative">
        <Container maxW="container.xl">
          <Flex
            justifyContent={{ lg: "space-between", md: "space-between" }}
            alignItems={{ lg: "center", md: "center" }}
            className={` flex-480 ${show}`}
          >
            <Heading as="h6" fontSize="2rem" fontStyle="italic">
              <span style={{ color: "tomato" }}>My</span>
              <span>Blog</span>
            </Heading>

            <div className={`menu ${show}`}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  columnGap: "20px",
                }}
                className={`${show}`}
              >
                <UnorderedList listStyleType="none" marginLeft="0">
                  <Flex
                    w="100%"
                    // justifyContent={{ lg: "center", md: "center" }}
                    // alignItems={{
                    //   lg: "center",
                    //   md: "center",
                    // }}
                    style={{ columnGap: "30px" }}
                    className={`menu ${show}`}
                  >
                    <ListItem
                      fontSize="1.3rem"
                      fontWeight="500"
                      className="listItem"
                    >
                      <NavLink to="/">Blog</NavLink>
                    </ListItem>
                    <ListItem
                      fontSize="1.3rem"
                      fontWeight="500"
                      className="listItem"
                    >
                      <NavLink to="/about">About</NavLink>
                    </ListItem>
                    <ListItem
                      fontSize="1.3rem"
                      fontWeight="500"
                      className="listItem"
                    >
                      <NavLink to="/contact">Contact</NavLink>
                    </ListItem>
                    <ListItem
                      fontSize="1.3rem"
                      fontWeight="500"
                      className="listItem"
                    >
                      <NavLink to="/login">
                        <Button
                          bg="tomato"
                          color="#fff"
                          colorScheme="tomato"
                          letterSpacing="1px"
                        >
                          Login
                        </Button>
                      </NavLink>
                    </ListItem>
                  </Flex>
                </UnorderedList>
                {/* <Box
                  display={{ lg: "none", md: "none", sm: "block" }}
                  // w={{ lg: "250px", md: "250px", sm: "100%" }}
                  width="100%"
                  mt="10px"
                >
                  <FormControl
                    h="40px"
                    position="relative"
                    borderRadius="10px"
                    overflow="hidden"
                    className="formControl"
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
                </Box> */}
              </div>
            </div>
            {/* ===================== toggler ===== */}
            <Box
              display={{ lg: "none", md: "none", sm: "block" }}
              onClick={handleShowMenu}
              position="absolute"
              right="20px"
            >
              <Box
                w="40px"
                h="40px"
                fontSize="1.8rem"
                borderRadius="5px"
                border="solid black"
                borderWidth="1px"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <GoThreeBars />
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
