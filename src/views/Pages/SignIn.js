/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Switch,
  Text,
  DarkMode,
} from "@chakra-ui/react";

// Assets
import signInImage from "assets/img/signInImage.png";

// Custom Components
import AuthFooter from "components/Footer/AuthFooter";
import GradientBorder from "components/GradientBorder/GradientBorder";

function SignIn() {
  return (
    <Flex position="relative" flexDirection={{ base: "column", lg: "row" }}>
      {/* Left side with the image */}
      <Box
        display={{ base: "block", lg: "block" }}
        w={{ base: "100%", lg: "50%" }}
      >
        <Box
          bgImage={`url(${signInImage})`}
          h="100vh"
          bgSize="cover"
          bgPosition="center"
        />
      </Box>
      {/* Right side with the sign-in form */}
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={{ base: "0", md: "50px" }}
        w={{ base: "100%", lg: "50%" }}
        maxW="1044px"
        mx="auto"
      >
        <Heading color="white" fontSize="32px" mb="10px">
          Nice to see you!
        </Heading>
        <Text
          mb="36px"
          ms="4px"
          color="gray.400"
          fontWeight="bold"
          fontSize="14px"
        >
          Enter your email and password to sign in
        </Text>
        <Box w="100%" maxW="346px">
          <FormControl mb="24px">
            <FormLabel fontSize="sm" fontWeight="normal" color="white">
              Email
            </FormLabel>
            <GradientBorder borderRadius="20px">
              <Input
                color="white"
                bg="rgb(19,21,54)"
                border="transparent"
                borderRadius="20px"
                fontSize="sm"
                size="lg"
                h="46px"
                placeholder="Your email address"
              />
            </GradientBorder>
          </FormControl>
          <FormControl mb="24px">
            <FormLabel fontSize="sm" fontWeight="normal" color="white">
              Password
            </FormLabel>
            <GradientBorder borderRadius="20px">
              <Input
                color="white"
                bg="rgb(19,21,54)"
                border="transparent"
                borderRadius="20px"
                fontSize="sm"
                size="lg"
                h="46px"
                type="password"
                placeholder="Your password"
              />
            </GradientBorder>
          </FormControl>
          <FormControl
            display="flex"
            alignItems="center"
            justifyContent="flex-start" // Align items to start
            mb="24px"
            w="100%"
          >
            <DarkMode>
              <Switch id="remember-login" colorScheme="brand" />
            </DarkMode>
            <FormLabel
              htmlFor="remember-login"
              mb="0"
              ml="10px" // Add margin-left to the label for proper spacing
              fontWeight="normal"
              color="white"
            >
              Remember me
            </FormLabel>
          </FormControl>
          <Button
            variant="brand"
            fontSize="10px"
            type="submit"
            w="100%"
            maxW="346px"
            h="45px"
            mb="20px"
            mt="20px"
          >
            SIGN IN
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;


