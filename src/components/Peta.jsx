import {
    Container,
    Box,
    chakra,
    Text,
    Heading,
    SimpleGrid,
    Flex,
    Icon,
    Badge,
    Center,
  } from "@chakra-ui/react";
  import { FaSatellite, FaLaptopCode, FaGlobeAsia, FaMap, FaMapMarkedAlt, FaSitemap } from "react-icons/fa";
  
  const features = [
    {
      heading: "Peta Dasar",
      content:
        "Peta dasar desa melingkupi administrasi, toponim, kontur, transportasi, dan lain-lain.",
      icon: FaMap,
      data: 'dasar',
    },
    {
      heading: "Peta Tematik",
      content:
        "Peta tematik mengenai jaringan prasarana, fisik, sosial, data status, dan lain-lain.",
      icon: FaMapMarkedAlt,
      data: 'dasar',
    },
    {
      heading: "Masterplan",
      content:
        "Masterplan pengembangan potensi dan infrastruktur di desa melingkupi struktur dan pola ruang.",
      icon: FaSitemap,
      data: 'dasar',
    },
  ];

  const dasar = [
    {
      nama: 'Administrasi',
    },
    {
      nama: 'Toponim',
    },
    {
      nama: 'Kontur',
    },
    {
      nama: 'Transportasi',
    },
    {
      nama: 'Perairan',
    },
    {
      nama: 'Penggunaan Lahan',
    },
    {
      nama: 'Lainnya',
    },
  ]

  const tematik = [
    {
      nama: 'Jaringan Prasarana',
    },
    {
      nama: 'Jaringan Fisik dan Sosial',
    },
    {
      nama: 'Data Status',
    },
    {
      nama: 'Lainnya',
    },
  ]

  const masterplan = [
    {
      nama: 'Struktur Ruang',
    },
    {
      nama: 'Pola Ruang',
    },
    {
      nama: 'Kawasan Strategis',
    },
    {
      nama: 'Lainnya',
    },
  ]

  const jaringan = [
    {
      nama: 'Jaringan Infrastruktur Telekomunikasi'
    },
    {
      nama: 'Jaringan Infrastruktur Energi dan Kelistrikan'
    },
    {
      nama: 'Jaringan Infrastruktur Sumber Daya Air'
    },
    {
      nama: 'Jaringan Infrastruktur Transportasi'
    },
    {
      nama: 'Jaringan Infrastruktur Lainnya'
    },
  ]

  const fisos = [
    {
      nama: 'Guna Lahan'
    },
    {
      nama: 'Kepadatan Penduduk'
    },
    {
      nama: 'Kawasan Risiko Bencana'
    },
    {
      nama: 'Kesesuaian Lahan'
    },
    {
      nama: 'Satuan Kemampuan Lahan'
    },
    {
      nama: 'Curah Hujan'
    },
    {
      nama: 'Daerah Aliran Sungai'
    },
    {
      nama: 'Topografi'
    },
    {
      nama: 'Jenis Tanah'
    },
    {
      nama: 'Geologi'
    },
    {
      nama: 'Morfologi dan Kelerengan'
    },
  ]

  const status = [
    {
      nama: 'Kawasan Lahan Pertanian'
    },
    {
      nama: 'Kawasan Pariwisata'
    },
    {
      nama: 'Kawasan Pertambangan, Mineral, dan Migas'
    },
    {
      nama: 'Kawasan Hutan'
    },
    {
      nama: 'Perizinan Pemanfaatan Ruang'
    },
  ]

  const rencana = [
    {
      nama: 'Sistem Perkotaan'
    },
    {
      nama: 'Rencana Pembangunan Sistem Infrastruktur'
    },
    {
      nama: 'Rencana Tata Ruang Wilayah'
    },
    {
      nama: 'Rencana Pengembangan Kawasan Strategis'
    },
  ]
  
  const Peta = () => {
    return (
      <Box w="100%" bg="white" py="5vh" shadow="inner">
        <Container maxW="6xl" p={{ base: 5, md: 10 }}>
          <Heading fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
            Cari&nbsp;
            <chakra.span
              bgGradient="linear(to-br, #61B2DD, #0047A1)"
              bgClip="text"
            >
              Peta&nbsp;
            </chakra.span>
            Resolusi Tinggi
          </Heading>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            placeItems="center"
            spacing='60px'
            mb={4}
          >
            {/* Dasar */}
            <Box
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
                  <Icon as={FaMap} boxSize={6} />
                </Flex>
                <chakra.h3 fontWeight="bold" fontSize="2xl" mt={6}>
                  Peta Dasar
                </chakra.h3>
                <Text fontSize="md" color="gray.600" mt={4} mb={5}>
                  Peta dasar desa melingkupi administrasi, toponim, kontur, transportasi, dan lain-lain.
                </Text>
                {dasar.map((item) => (
                  <Badge colorScheme='blue' mx='5px'>{item.nama}</Badge>
                ))}
              </Box>
              {/* Tematik */}
              <Box
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
                  <Icon as={FaMapMarkedAlt} boxSize={6} />
                </Flex>
                <chakra.h3 fontWeight="bold" fontSize="2xl" mt={6}>
                  Peta Tematik
                </chakra.h3>
                <Text fontSize="md" color="gray.600" mt={4} mb={5}>
                  Peta tematik mengenai jaringan prasarana, fisik, sosial, data status, dan lain-lain.
                </Text>
                {tematik.map((item) => (
                  <Badge colorScheme='blue' mx='5px'>{item.nama}</Badge>
                ))}
              </Box>
              {/* Masterplan */}
              <Box
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
                  <Icon as={FaSitemap} boxSize={6} />
                </Flex>
                <chakra.h3 fontWeight="bold" fontSize="2xl" mt={6}>
                  Masterplan
                </chakra.h3>
                <Text fontSize="md" color="gray.600" mt={4} mb={5}>
                  Masterplan pengembangan potensi dan infrastruktur di desa melingkupi struktur dan pola ruang.
                </Text>
                {masterplan.map((item) => (
                  <Badge colorScheme='blue' mx='5px'>{item.nama}</Badge>
                ))}
              </Box>
          </SimpleGrid>
          <Heading fontSize="4xl" fontWeight="bold" mt={20} mb={5} textAlign="center">
            Kategori&nbsp;
            <chakra.span
              bgGradient="linear(to-br, #61B2DD, #0047A1)"
              bgClip="text"
            >
              Turunan&nbsp;
            </chakra.span>
          </Heading>
          {jaringan.map((item) => (
            <Badge colorScheme='orange' mx='5px'>{item.nama}</Badge>
          ))}
          {fisos.map((item) => (
            <Badge colorScheme='purple' mx='5px'>{item.nama}</Badge>
          ))}
          {status.map((item) => (
            <Badge colorScheme='green' mx='5px'>{item.nama}</Badge>
          ))}
          {rencana.map((item) => (
            <Badge colorScheme='teal' mx='5px'>{item.nama}</Badge>
          ))}
        </Container>
      </Box>
    );
  };
  
  export default Peta;
  