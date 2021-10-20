import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Container } from "@chakra-ui/layout";
import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button } from "@chakra-ui/button";
import { IoSendSharp } from "react-icons/io5";

const CreateBlog = () => {
  const [val, setVal] = useState("");
  return (
    <>
      <Box>
        <Container
          bg="white"
          maxW="container.xl"
          p={{ lg: "40px", md: "40px", sm: "20px" }}
        >
          <Button
            float="right"
            bg="tomato"
            colorScheme="tomato"
            color="white"
            mb="10px"
          >
            Publish&nbsp;
            <IoSendSharp />
          </Button>
          <FormControl>
            <Input
              type="text"
              placeholder="Title here..."
              mb="20px"
              border="0"
              borderBottom="1px solid gray"
              borderRadius="0"
              borderColor="gray.200"
            />
            <CKEditor
              editor={ClassicEditor}
              data={val}
              onChange={(e, editor) => setVal(editor.getData())}
              style={{ heigh: "500px" }}
            />
          </FormControl>
        </Container>
      </Box>
    </>
  );
};

export default CreateBlog;
