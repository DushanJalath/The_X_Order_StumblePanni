import React,{useState} from "react";
import UserDetailsCard from "../components/UserDetailsCard";
import {
  Box,
  Flex,
  Text,
  Button,

} from "@chakra-ui/react";

import UserDetailsCard from "../components/UserDetailsCard";
import Layout from "../layouts/layout";

interface VisaApplication {
  refNo: string;
  passportNo: string;
  name: string;
  country: string;
}

const itemsPerPage = 10;

function VisaApplicationPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<VisaApplication[]>([]);

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

      {currentItems.map((item, index) => (
          <UserDetailsCard
            key={index}
            refNo={item.refNo}
            passportNo={item.passportNo}
            name={item.name}
            country={item.country}
          />
        ))}

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

    </Box>
    </Layout>

    
  );
}

export default VisaApplicationPage;
