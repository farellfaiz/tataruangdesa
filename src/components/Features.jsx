import {
  Container,
  Box,
  chakra,
  Text,
  Heading,
  SimpleGrid,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaSatellite, FaLaptopCode, FaGlobeAsia, FaMap, FaMapMarkedAlt, FaSitemap } from "react-icons/fa";

const features = [
  {
    heading: "Remote Sensing",
    content:
      "Penggunaan data satelit untuk sebagai parameter untuk pengolahan data.",
    icon: FaSatellite,
  },
  {
    heading: "Machine Learning",
    content:
      "Training dan testing data untuk menentukan LULC, potensi, dan lain-lain.",
    icon: FaLaptopCode,
  },
  {
    heading: "GIS",
    content:
      "Integrasi data dan informasi geospasial tata ruang desa dalam dashboard.",
    icon: FaGlobeAsia,
  },
  {
    heading: "Peta Dasar",
    content:
      "Peta dasar desa melingkupi administrasi, toponim, kontur, transportasi, dan lain-lain.",
    icon: FaMap,
  },
  {
    heading: "Peta Tematik",
    content:
      "Peta tematik mengenai jaringan prasarana, fisik, sosial, data status, dan lain-lain.",
    icon: FaMapMarkedAlt,
  },
  {
    heading: "Masterplan",
    content:
      "Masterplan pengembangan potensi dan infrastruktur di desa melingkupi struktur dan pola ruang.",
    icon: FaSitemap,
  },
];

const Features = () => {
  return (
    <Box w="100%" bg="white" py="5vh" shadow="inner">
      <Container maxW="6xl" p={{ base: 5, md: 10 }}>
        <Heading fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
          Integrasi&nbsp;
          <chakra.span
            bgGradient="linear(to-br, #61B2DD, #0047A1)"
            bgClip="text"
          >
            Teknologi Geospasial
          </chakra.span>
        </Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          placeItems="center"
          spacing='60px'
          mb={4}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              bg="gray.50"
              p={6}
              mb="10px"
              rounded="lg"
              textAlign="center"
              pos="relative"
              shadow="md"
            >
              <Flex
                p="10px"
                w="max-content"
                color="white"
                bgGradient="linear(to-br, #0047A1, #61B2DD)"
                rounded="md"
                marginInline="auto"
                pos="absolute"
                left={0}
                right={0}
                top="-1.5rem"
                boxShadow="lg"
              >
                <Icon as={feature.icon} boxSize={6} />
              </Flex>
              <chakra.h3 fontWeight="bold" fontSize="2xl" mt={6}>
                {feature.heading}
              </chakra.h3>
              <Text fontSize="md" color="gray.600" mt={4} mb={5}>
                {feature.content}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Features;
