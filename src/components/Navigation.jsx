import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Container, HStack } from "@chakra-ui/layout";
import { FaGlobeAsia } from "react-icons/fa";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { IconButton } from "@chakra-ui/button";
import { FaUser } from "react-icons/fa";
import { MenuGroup } from "@chakra-ui/menu";
import { HiAcademicCap } from "react-icons/hi";
import { RiGovernmentFill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Box w="100%" bg="white" shadow="sm">
      <Box w="100%" h="3px" bgGradient="linear(to-br, #61B2DD, #0047A1)">
        {" "}
      </Box>
      <Container py="15px" maxW="80%">
        <HStack justify="space-between">
          <Image src="/aksitaru.png" alt="Logo Aksitaru" cursor="pointer" h="40px" />
          <HStack spacing={4}>
            <Link to="/">
            <Button variant="ghost" fontWeight="normal">
              Beranda
            </Button>
            </Link>
            <Link to="/panduan">
            <Button variant="ghost" fontWeight="normal">
              Panduan
            </Button>
            </Link>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                fontWeight="normal"
                variant="ghost"
              >
                Data
              </MenuButton>
              <MenuList>
                <Link to='/peta'><MenuItem>Cari Peta Resolusi Tinggi</MenuItem></Link>
                <Link to='/investasi'><MenuItem>Cari Peluang Investasi</MenuItem></Link>
              </MenuList>
            </Menu>
          </HStack>
          <HStack spacing='10px'>
          <Link to={"/dashboard"}>
            <Button
              bgGradient="linear(to-br, #0047A1, #61B2DD)"
              _hover={{ bgGradient: "linear(to-br, #61B2DD, #0047A1)" }}
              _active={{ bgGradient: "linear(to-br, #4781a1, #053878)" }}
              leftIcon={<FaGlobeAsia />}
              color="white"
            >
              Dashboard
            </Button>
          </Link>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<FaUser />}
                variant="outline"
              />
              <MenuList>
                <MenuGroup title="Registrasi/Masuk">
                  <MenuItem icon={<HiAcademicCap />}>Akademisi</MenuItem>
                  <MenuItem icon={<RiGovernmentFill />}>Pemerintah</MenuItem>
                  <MenuItem icon={<BsPeopleFill />}>Umum</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navigation;
