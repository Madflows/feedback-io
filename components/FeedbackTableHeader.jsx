import React from "react";
import NextLink from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Flex,
  Box,
} from "@chakra-ui/react";

const FeedbackTableHeader = ({ siteName }) => (
  <Box mx={4}>
    <Breadcrumb>
      <BreadcrumbItem>
          <BreadcrumbLink as={NextLink} href="/feedback">
            Feedback
          </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between">
      <Heading mb={8}>All Feedback</Heading>
    </Flex>
  </Box>
);

export default FeedbackTableHeader;
