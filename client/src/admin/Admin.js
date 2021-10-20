import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Heading } from "@chakra-ui/layout";
import { MdOutlineLogout } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <Box
        bg="#fff"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="20px 30px"
        gridGap="30px"
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Heading
          as="h6"
          fontSize="2rem"
          fontStyle="italic"
          display="flex"
          alignItems="center"
        >
          <FaBars fontSize="1.5rem" style={{ marginRight: "10px" }} />
          <span style={{ color: "tomato" }}>My</span>
          <span>Blog</span>
        </Heading>
        <FormControl w="50%">
          <Input type="text" placeholder="Search post" mx="auto" />
        </FormControl>
        <Button bg="tomato" color="#fff" colorScheme="tomato">
          <MdOutlineLogout style={{ fontSize: "20px", fontWeight: "bold" }} />
          Logout
        </Button>
      </Box>
      <Box display="grid" gridTemplateColumns="300px auto">
        <Box borderRight="1px" borderColor="gray.200" minH="87.1vh">
          <Box
            w="100%"
            h="150px"
            // bg="tomato"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderBottom="1px"
            borderColor="gray.200"
          >
            <Link to="/create-blog">
              <Button w="150px" shadow="lg" bg="#fff">
                <AiOutlinePlus fontSize="20px" />
                Create post
              </Button>
            </Link>
          </Box>
          <Box w="100%" padding="40px">
            <Link>
              <Button w="200px" mb="20px">
                Posts
              </Button>
            </Link>
            <br />
            <Link>
              <Button w="200px" mb="20px">
                Comments
              </Button>
            </Link>
            <br />
            <Link>
              <Button w="200px" mb="20px">
                Setting
              </Button>
            </Link>
          </Box>
        </Box>

        {/* ========== right side ========== */}
        <Box minH="80vh">
          {/* <BrowserRouter>
            <Switch>
              <Route exact path="/create-post" component={CreateBlog} />
            </Switch>
          </BrowserRouter> */}
          {/* <CreateBlog /> */}
        </Box>
      </Box>
    </>
  );
};

export default Admin;
