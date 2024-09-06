import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
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
import { FiCheckCircle,FiXCircle} from "react-icons/fi";


function UserDetailsCard({ refNo, passportNo, name, country }:{
    refNo: string;
    passportNo: string;
    name: string;
    country: string;
  }) {
  const [modalType, setModalType] = useState(""); 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [interpolRecordFound, setInterpolRecordFound] = useState(false);

  const handleButtonClick = (type: string) => {
    setModalType(type);
    onOpen();
  };

  return (
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
        <VStack marginTop="22.4px" align="start" spacing={1} flex="1">
          <HStack>
            <Text fontWeight="bold" width="75px">Ref No</Text>
            <Text>:</Text>
            <Text>{refNo}</Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold" width="75px">Passport No</Text>
            <Text>:</Text>
            <Text>{passportNo}</Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold" width="75px">Name</Text>
            <Text>:</Text>
            <Text>{name}</Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold" width="75px">Country</Text>
            <Text>:</Text>
            <Text>{country}</Text>
          </HStack>
        </VStack>

        <Divider orientation="vertical" height="auto" mx={4} />

        {/* Middle section with document actions */}
        <Flex flex="3" justify="space-around" align="center">
          <VStack>
            <Text fontSize="sm" align="center">Document verification</Text>
            <Button padding="0px" width="40px" margin="40px">
              <Image
                boxSize="40px"
                objectFit="contain"
                src="https://toppng.com/uploads/preview/pdf-icon-11549528510ilxx4eex38.png"
                alt="Document"
              />
            </Button>
          </VStack>
          <VStack>
            <Text fontSize="sm" align="center">View the application</Text>
            <Button padding="0px" width="40px" margin="40px">
              <Image
                boxSize="40px"
                objectFit="contain"
                src="https://toppng.com/uploads/preview/pdf-icon-11549528510ilxx4eex38.png"
                alt="Document"
              />
            </Button>
          </VStack>
          <VStack>
            <Text fontSize="sm" align="center">Interpol record status</Text>
            {interpolRecordFound ? (
              <VStack>
                <Icon as={FiXCircle} color="red.500" boxSize={6} margin="27px" />
                <Button colorScheme="red" size="sm" width="120px" borderRadius="60px" margin={0}>
                  Manual Check
                </Button>
              </VStack>
            ) : (
              <Icon as={FiCheckCircle} color="green.500" boxSize={6} margin="48px" />
            )}
            {/*<Icon as={FiCheckCircle} color="green.500" boxSize={6} margin="48px" />*/}
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
  );
}

export default UserDetailsCard;
