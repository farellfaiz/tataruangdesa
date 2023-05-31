import {
    Box,
    ButtonGroup,
    Container,
    HStack,
    IconButton,
    Image,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import { FaGithub, FaInstagram } from "react-icons/fa";
  
  const Footer = () => (
    <Box bg="white" w="100%" shadow="lg">
      <Container py="3rem" maxW="60%">
        <Stack
          spacing={{
            base: "4",
            md: "5",
          }}
        >
          <Box w="100%" justify="space-between" direction="row" align="center">
            <Box>
              <HStack
                spacing="7"
                // bg='white'
                py="30px"
                borderRadius="lg"
                // shadow='lg'
                justify="space-between"
                // bgImage={{
                //     base: 'none',
                //     md: 'url(/footer.png)'
                //   }}
              >
                <Box
                  display="flex"
                  flexDir="row"
                  alignItems="center"
                  justifyContent="flex-start"
                  // bg='white'
                  // shadow='sm'
                  // p='30px'
                  // borderRadius='lg'
                >
                  <Image src="/aksitaru.png" alt="" w="45px" h="auto" />
                  <Box ml="15px" textAlign="left">
                    <Text fontSize="xl" fontWeight="bold">
                      Tata Ruang Desa
                    </Text>
                    <Text fontSize="sm">AKSITARU Indonesia (Akademi Kader Teknik, Konstruksi, dan Tata Ruang)</Text>
                  </Box>
                </Box>
              </HStack>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDir="row"
            justifyContent="space-between"
            alignContent="center"
          >
            <Text fontSize="sm" color="subtle">
              &copy; {new Date().getFullYear()} AKSITARU Indonesia. All rights
              reserved.
            </Text>
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="https://www.instagram.com/aksitaru.id/"
                aria-label="Instagram"
                icon={<FaInstagram fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Box>
        </Stack>
      </Container>
      <Box w="100%" h="8px" bgGradient="linear(to-br, #61B2DD, #0047A1)">
        {" "}
      </Box>
    </Box>
  );
  
  export default Footer;
  