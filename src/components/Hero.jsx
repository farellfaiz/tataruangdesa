import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Text,
  chakra,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaFileContract, FaGlobeAsia } from "react-icons/fa";
import * as React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
//   import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box
      as="section"
      overflow="hidden"
      h="90vh"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignContent="center"
    >
      <Box
        maxW={{
          base: "xl",
          md: "7xl",
        }}
        mx="auto"
        px={{
          base: "6",
          md: "8",
        }}
      >
        <Flex
          align="flex-start"
          direction={{
            base: "column",
            lg: "row",
          }}
          justify="space-between"
          // mb="20"
        >
          <Box
            flex="1"
            maxW={{
              lg: "xl",
            }}
            pt="6"
          >
            <Heading as="h1" size="2xl" mt="12" fontWeight="black">
              Platform
              <chakra.span
                bgGradient="linear(to-br, #61B2DD, #0047A1)"
                bgClip="text"
              >
                {" "}
                Tata Ruang Desa{" "}
              </chakra.span>{" "}
              Indonesia
            </Heading>
            <Text color={mode("gray.600", "gray.400")} mt="6" fontSize="xl">
              Platform GIS tata ruang untuk kemajuan desa melalui peta potensi
              dan rencana investasi desa-desa di Indonesia
            </Text>
            {/* <Link to='/dashboard'> */}
            <Button
              bgGradient="linear(to-br, #0047A1, #61B2DD)"
              _hover={{ bgGradient: "linear(to-br, #61B2DD, #0047A1)" }}
              _active={{ bgGradient: "linear(to-br, #4781a1, #053878)" }}
              leftIcon={<FaGlobeAsia />}
              color="white"
              size="lg"
              mt="6"
            >
              Dashboard
            </Button>
            {/* </Link> */}
            {/* <Link to="/research"> */}
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                leftIcon={<FaFileContract />}
                size='lg'
                ml='15px'
                mt="6"
              >
                Data
              </MenuButton>
              <MenuList>
                <MenuItem>Cari Peta Resolusi Tinggi</MenuItem>
                <MenuItem>Cari Peluang Investasi</MenuItem>
              </MenuList>
            </Menu>
            {/* </Link> */}
          </Box>
          <Box
            boxSize={{
              base: "20",
              lg: "8",
            }}
          />
          <Img
            pos="relative"
            marginEnd="-16rem"
            w="60rem"
            src="/demo3.png"
            alt="Multihazard mitigation dashboard"
            borderRadius="lg"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
