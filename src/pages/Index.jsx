import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, List, ListItem, VStack, Image, Icon, Text } from "@chakra-ui/react";
import { FaFolder, FaFile, FaUpload, FaPlus } from "react-icons/fa";

const Index = () => {
  const [files, setFiles] = useState([
    // This would be populated with file data
    { name: "Document.pdf", type: "file" },
    { name: "Photos", type: "folder" },
  ]);

  const handleUpload = (event) => {
    // This is a placeholder for the upload functionality
    alert("File upload functionality is not implemented in this mock.");
  };

  return (
    <VStack p={10}>
      <Heading mb={6}>My Drive</Heading>
      <Flex width="100%" justify="space-between" align="center" mb={4}>
        <Button leftIcon={<FaPlus />} colorScheme="blue">
          New Folder
        </Button>
        <Input type="file" onChange={handleUpload} hidden id="file-upload" />
        <Button leftIcon={<FaUpload />} colorScheme="blue" as="label" htmlFor="file-upload">
          Upload Files
        </Button>
      </Flex>
      <List spacing={3} width="100%">
        {files.map((file, index) => (
          <ListItem key={index} p={3} borderWidth="1px" borderRadius="md" display="flex" alignItems="center" justifyContent="space-between">
            <Flex align="center">
              <Icon as={file.type === "folder" ? FaFolder : FaFile} mr={2} />
              <Text>{file.name}</Text>
            </Flex>
            <Button size="sm">Open</Button>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;
