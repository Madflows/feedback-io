import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useAuth } from "lib/auth";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import LoginButtons from "./LoginButtons";

function HeroSection() {
  const auth = useAuth();

  return (
    <Box bg="gray.100" py={16} px={4}>
      <Flex as="main" direction="column" maxW="700px" margin="0 auto">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if (document.cookie && document.cookie.includes('feedback-auth')) {
                window.location.href = "/sites"
              }
            `,
            }}
          />
        </Head>
        <Image src="/assets/logo.svg" name="logo" w="48px" h="48px" mb={2} />
        <Text mb={4} fontSize="lg" py={4}>
          <Text as="span" fontWeight="bold" display="inline">
            Capture feedbacks easily
          </Text>
          {`. Our platform helps you to simplify
        the process of getting customer feedbacks by collecting it all in one place.`}
        </Text>
        {auth.user ? (
          <Button
            as="a"
            href="/sites"
            backgroundColor="gray.900"
            color="white"
            fontWeight="medium"
            mt={4}
            maxW="200px"
            _hover={{ bg: "gray.700" }}
            _active={{
              bg: "gray.800",
              transform: "scale(0.95)",
            }}
          >
            View Dashboard
          </Button>
        ) : (
          <LoginButtons />
        )}
      </Flex>
    </Box>
  );
}

export default HeroSection;
