import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Container } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CreateBlog = () => {
  const [val, setVal] = useState("");
  return (
    <>
      <Box bg="gray.100">
        <Container
          bg="white"
          maxW="container.xl"
          p={{ lg: "40px", md: "40px", sm: "20px" }}
        >
          <Box textAlign="center">Create blog</Box>
          <FormControl>
            <Input type="text" placeholder="Title here" />
            <CKEditor
              style={{ padding: "20px" }}
              editor={ClassicEditor}
              data={val}
              onChange={(e, editor) => setVal(editor.getData())}
            />
          </FormControl>
        </Container>
      </Box>
    </>
  );
};

export default CreateBlog;
