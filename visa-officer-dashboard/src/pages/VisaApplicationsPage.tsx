import React,{useState} from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  //Avatar,
  Image,
  Icon,
  VStack,
  HStack,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  useDisclosure,

} from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";
import Layout from "../layouts/layout";

const data=Array();
const itemsPerPage = 10;

function VisaApplicationPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalType, setModalType] = useState(""); 
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Calculate the index of the first and last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (newPage:number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleButtonClick = (type: string) => {
    setModalType(type);
    onOpen();
  };

  return (
    <Layout>
      <Box
      p={4}
      boxShadow="lg"
      borderRadius="md"
      bg="#D9D9D9"
      width="100%"
      maxW="900px"
      mx="auto"
    >
      <Text fontWeight="bold" fontSize="lg" color="#008080">
        Visa Application Management
      </Text >
        
      <Text fontSize="sm">
        Approve, Reject or Request Further Information for Visa Applications
      </Text>

      <Box
      p={4}
      margin="5"
      boxShadow="lg"
      borderRadius="md"
      bg="gray.100"
      width="100%"
      maxW="900px"
      mx="auto"
    >
      <Flex align="center">
        {/* Left section with Avatar and info */}
        {/*<Avatar size="lg" name="Name" src="avatar.jpg" mr={4} />*/}
        <VStack marginTop="22.4px" align="start" spacing={1} flex="1">
          <HStack>
            <Text fontWeight="bold" width="75px">Ref No</Text>
            <Text>:</Text>
            <Text>36123</Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold" width="75px">Passport No</Text>
            <Text>:</Text>
            <Text>340907612</Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold" width="75px">Name</Text>
            <Text>:</Text>
            <Text>Name</Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold" width="75px">Country</Text>
            <Text>:</Text>
            <Text>Country</Text>
          </HStack>
        </VStack>
        <Divider orientation="vertical" height="auto" mx={4} />

        {/* Middle section with document actions */}
        <Flex flex="3" justify="space-around" align="center">
          <VStack>
            <Text fontSize="sm" align="center">Document verification</Text>
            <Button padding="0px" margin="40px" width="40px">
            <Image
              margin="40px"
              boxSize="40px"
              objectFit="contain"
              src="https://toppng.com/uploads/preview/pdf-icon-11549528510ilxx4eex38.png"
              alt="Document"
            />
            </Button>
            
          </VStack>
          <VStack>
            <Text fontSize="sm" align="center">View the application</Text>
            <Button padding="0px" margin="40px" width="40px">
            <Image
              margin="40px"
              boxSize="40px"
              objectFit="contain"
              src="https://toppng.com/uploads/preview/pdf-icon-11549528510ilxx4eex38.png"
              alt="Document"
            />
            </Button>
          </VStack>
          <VStack>
            <Text fontSize="sm"align="center">Interpol record status</Text>
            <Icon as={FiCheckCircle} color="green.500" boxSize={6} margin="48px" />
          </VStack>
        </Flex>

        <Divider orientation="vertical" height="auto" mx={4} />

        {/* Right section with actions */}
        <VStack spacing={2}>
          <Text fontSize="sm" align="center">Action</Text>
          <Button colorScheme="green" size="sm" width="120px" borderRadius="60px" margin={0}>
            Approve
          </Button>
          <Button colorScheme="red" size="sm" width="120px" borderRadius="60px" margin={0} onClick={() => handleButtonClick("Reject")}>
            Reject
          </Button>
          <Button colorScheme="yellow" size="sm" width="120px" borderRadius="60px" margin={0} onClick={() => handleButtonClick("Further Inquiry")}>
            Further Inquiry
          </Button>
        </VStack>
      </Flex>
    </Box>
    <Flex justify="center" mt={4}>
        <Button margin="0" size="sm"  onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} mr={2}>
          Previous
        </Button>
        <Text mx={2} bg="gray.100" height="8" width="8" align="center" borderRadius="100" paddingTop="1">
          {currentPage}
        </Text>
        <Button margin="0" size="sm" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} ml={2}>
          Next
        </Button>
      </Flex>

      {/* Modal for Decline or Further Inquiry */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalType === "Reject" ? "Reason for Rejection" : "Further Inquiry Details"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              placeholder={
                modalType === "Reject"
                  ? "Enter the reason for rejection..."
                  : "Enter your message..."
              }
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={2} onClick={onClose} borderRadius={60} fontSize="sm">
              Send Email
            </Button>
            <Button variant="ghost" onClick={onClose} borderRadius={60} fontSize="sm">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Box>
    </Layout>

    
  );
}

export default VisaApplicationPage;
