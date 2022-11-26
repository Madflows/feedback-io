import React from "react";
import NextLink from "next/link";
import { Box, Button, IconButton, Flex, Link, Avatar, Icon, Image } from "@chakra-ui/react";
import { VscSignIn } from "react-icons/vsc";

import { useAuth } from "lib/auth";

const DashboardShell = ({ children }) => {
  const { user } = useAuth();

  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex
        backgroundColor="white"
        mb={[8, 16]}
        w="full"
        borderTop="5px solid #0AF5F4"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
          h="60px"
        >
          <Flex align="center">
            <Link href="/">
              <Box
                as="img"
                mr="4"
                src="/assets/logo.svg"
                width={"50"}
                height={"50"}
              />
            </Link>
            <Link href="/sites" mr={4}>
              Sites
            </Link>
            <Link href="/feedback">Feedback</Link>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            {user ? (
              <>
                <NextLink href="/account">
                  <Avatar size="sm" src={user?.photoUrl} />
                </NextLink>
              </>
            ) : (
              <IconButton
                icon={<VscSignIn />}
                as={NextLink}
                href="/"
                variant="ghost"
                ml={2}
              />
            )}
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={[0, 8, 8]}>
        {children}
      </Flex>
    </Box>
  );
};

export default DashboardShell;
