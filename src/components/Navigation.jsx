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

const Navigation = () => {
  return (
    <Box w="100%" bg="white" shadow="sm">
      <Box w="100%" h="3px" bgGradient="linear(to-br, #F09819, #FF512F)">
        {" "}
      </Box>
      <Container py="15px" maxW="80%">
        <HStack justify="space-between">
          <Image src="/login.png" alt="Logo Login" cursor="pointer" h="40px" />
          <HStack spacing={4}>
            {/* <Link to="/"> */}
            <Button variant="ghost" fontWeight="normal">
              Beranda
            </Button>
            {/* </Link> */}
            {/* <Link to="/research"> */}
            <Button variant="ghost" fontWeight="normal">
              Panduan
            </Button>
            {/* </Link> */}
            {/* <Link to="/about"> */}
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
                <MenuItem>Cari Peta Resolusi Tinggi</MenuItem>
                <MenuItem>Cari Peluang Investasi</MenuItem>
              </MenuList>
            </Menu>
            {/* </Link> */}
          </HStack>
          {/* <Link to={"/dashboard"}> */}
          <HStack spacing='10px'>
            <Button
              bgGradient="linear(to-br, #FF512F, #F09819)"
              _hover={{ bgGradient: "linear(to-br, #F09819, #FF512F)" }}
              _active={{ bgGradient: "linear(to-br, #bd7713, #cc4025)" }}
              leftIcon={<FaGlobeAsia />}
              color="white"
            >
              Dashboard
            </Button>
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
          {/* </Link> */}
        </HStack>
      </Container>
    </Box>
  );
};

export default Navigation;
