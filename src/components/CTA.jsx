import { chakra, Stack, Container, Box, Button, MenuButton, Menu, MenuList, MenuItem } from "@chakra-ui/react";
import { FaFileContract, FaGlobeAsia } from "react-icons/fa";
import * as React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
// import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <Container maxW="5xl" p="6">
      <Banner />
    </Container>
  );
};

const Banner = () => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={5}
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent="space-between"
      rounded="lg"
      boxShadow="md"
      bg="white"
      p={{ base: 8, md: 16 }}
      mb="60px"
    >
      <Box>
        <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
          Pahami lebih dalam
        </chakra.h1>
        <chakra.h2
          fontSize="2xl"
          lineHeight={1.2}
          fontWeight="bold"
          bgGradient="linear(to-l, #0047A1, #61B2DD)"
          bgClip="text"
        >
          Kondisi desa dan ragamnya potensi yang dimiliki untuk bisa lebih maju
        </chakra.h2>
      </Box>
      <Stack
        direction={{ base: "column", sm: "row" }}
        spacing={{ base: 0, sm: 3 }}
        w={{ base: "100%", sm: "auto" }}
      >
        {/* <Link to="/dashboard"> */}
          <Button
            color="white"
            variant="solid"
            size="lg"
            rounded="md"
            mb={{ base: 2, sm: 0 }}
            lineHeight={1}
            bgGradient="linear(to-br, #0047A1, #61B2DD)"
            _hover={{ bgGradient: "linear(to-br, #61B2DD, #0047A1)" }}
            _active={{ bgGradient: "linear(to-br, #4781a1, #053878)" }}
            leftIcon={<FaGlobeAsia />}
          >
            Lihat dashboard
          </Button>
        {/* </Link> */}
        {/* <Link to="/research"> */}
          <Menu>
            <MenuButton as={Button} size='lg' rounded='md' rightIcon={<ChevronDownIcon />} leftIcon={<FaFileContract />} lineHeight={1} mb={{ base:2, sm:0 }} >Cari data</MenuButton>
            <MenuList>
              <MenuItem>Cari Peta Resolusi Tinggi</MenuItem>
              <MenuItem>Cari Peluang Investasi</MenuItem>
            </MenuList>
          </Menu>
        {/* </Link> */}
      </Stack>
    </Stack>
  );
};

export default CTA;
