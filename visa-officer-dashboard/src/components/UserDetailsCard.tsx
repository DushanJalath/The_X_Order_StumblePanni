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
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

interface UserDetails {
  refNo: string;
  passportNo: string;
  name: string;
  country: string;
}

const UserDetailsCard: React.FC = () => {
  const [modalType, setModalType] = useState(""); 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [interpolRecordFound, setInterpolRecordFound] = useState(true);
  const [status, setStatus] = useState(""); // New state to handle status
  const navigate = useNavigate(); // Use useNavigate to route

  // Example user data, can be dynamic
  const userDetails: UserDetails = {
    refNo: "36123",
    passportNo: "340907612",
    name: "John Doe",
    country: "USA",
  };

  const handleManualCheck = () => {
    // Navigate to Interpol Check page with user details as state
    navigate("/Interpolepage", { state: { userDetails } });
  };

  const handleButtonClick = (type: string) => {
    setModalType(type);
    onOpen();
  };

  const handleApprove = () => {
    setStatus("Approved"); // Set the status to Approved when the button is clicked
  };

  const handleSendEmail = () => {
    if (modalType === "Reject") {
      setStatus("Rejected"); // Set status to Rejected
    } else if (modalType === "Further Inquiry") {
      setStatus("Further Inquiry"); // Set status to Further Inquiry
    }
    onClose(); // Close the modal after sending the email
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
            <Text>{userDetails.refNo}</Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold" width="75px">Passport No</Text>
            <Text>:</Text>
            <Text>{userDetails.passportNo}</Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold" width="75px">Name</Text>
            <Text>:</Text>
            <Text>{userDetails.name}</Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold" width="75px">Country</Text>
            <Text>:</Text>
            <Text>{userDetails.country}</Text>
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
                <Button 
                  colorScheme="red" 
                  size="sm" 
                  width="120px" 
                  borderRadius="60px" 
                  margin={0} 
                  onClick={handleManualCheck} // Handle Manual Check navigation
                >
                  Manual Check
                </Button>
              </VStack>
            ) : (
              <Icon as={FiCheckCircle} color="green.500" boxSize={6} margin="48px" />
            )}
          </VStack>
        </Flex>

        <Divider orientation="vertical" height="auto" mx={4} />

        {/* Right section with status actions */}
        <VStack spacing={2}>
          <Text fontSize="sm" align="center">Status</Text>
          {status ? (
            <Button
              colorScheme={status === "Approved" ? "green" : status === "Rejected" ? "red" : "yellow"}
              size="sm"
              width="120px"
              borderRadius="60px"
              margin={0}
            >
              {status} {/* Display the current status */}
            </Button>
          ) : (
            <>
              <Button 
                colorScheme="green" 
                size="sm" 
                width="120px" 
                borderRadius="60px" 
                margin={0} 
                onClick={handleApprove} // Handle Approve button click
              >
                Approve
              </Button>
              <Button 
                colorScheme="red" 
                size="sm" 
                width="120px" 
                borderRadius="60px" 
                margin={0} 
                onClick={() => handleButtonClick("Reject")} // Handle Reject button click
              >
                Reject
              </Button>
              <Button 
                colorScheme="yellow" 
                size="sm" 
                width="120px" 
                borderRadius="60px" 
                margin={0} 
                onClick={() => handleButtonClick("Further Inquiry")} // Handle Further Inquiry button click
              >
                Further Inquiry
              </Button>
            </>
          )}
        </VStack>
      </Flex>

      {/* Modal for Reject or Further Inquiry */}
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
            <Button colorScheme="green" mr={2} onClick={handleSendEmail} borderRadius={60} fontSize="sm">
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
};

export default UserDetailsCard;
