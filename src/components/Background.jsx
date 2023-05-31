// import { Link } from 'react-router-dom';
import {
  Container,
  Stack,
  Text,
  Image,
  Skeleton,
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
} from "@chakra-ui/react";

const QnAs = [
  {
    heading: "Mengenai Desa di Indonesia",
    content:
      "Pedesaan di Indonesia memiliki kondisi yang sangat beragam dan memiliki banyak potensi. Dari pesisir hingga pegunungan, dari dataran rendah hingga pulau terpencil, setiap daerah pedesaan menawarkan kekayaan alam, budaya, dan sumber daya manusia yang dapat dikembangkan untuk pembangunan ekonomi, pariwisata, pertanian, dan industri kreatif. Dengan pemanfaatan yang tepat, potensi pedesaan Indonesia dapat berkontribusi secara signifikan terhadap pertumbuhan dan kesempatan ekonomi bagi masyarakat di seluruh negeri.",
    // icon: FaSatellite,
  },
  {
    heading: "Pentingnya Informasi Geospasial",
    content:
      "Informasi geospasial memiliki peranan penting dalam perencanaan tata ruang desa dan memiliki potensi investasi yang signifikan. Informasi geospasial memberikan data dan pemetaan yang akurat tentang aspek fisik dan geografis suatu wilayah, seperti batas lahan, topografi, tata guna lahan, dan infrastruktur yang ada. Dengan memiliki informasi ini, pengambil kebijakan dapat melakukan analisis yang mendalam untuk merencanakan tata ruang desa secara efisien dan efektif. Selain itu, informasi geospasial juga memberikan peluang investasi yang menarik, terutama dalam pengembangan properti, sektor pertanian, pariwisata, dan energi terbarukan. Dengan memanfaatkan informasi geospasial dengan baik, desa-desa dapat mengoptimalkan potensi investasi mereka dan mendorong pertumbuhan ekonomi yang berkelanjutan.",
    // icon: FaLaptopCode,
  },
  {
    heading: "Peta, Potensi, Rencana, dan Investasi",
    content:
      "Peta memiliki peran penting dalam meningkatkan investasi dan memaksimalkan potensi desa untuk mencapai rencana yang ada. Dengan menggunakan peta, informasi tentang sumber daya alam, infrastruktur, tata guna lahan, dan potensi ekonomi desa dapat ditampilkan dengan jelas dan terstruktur. Hal ini memungkinkan para investor dan pengambil keputusan untuk melakukan analisis yang mendalam, mengidentifikasi peluang investasi yang menjanjikan, dan merencanakan kegiatan pengembangan yang strategis. Selain itu, peta juga memfasilitasi komunikasi yang efektif antara pemerintah, masyarakat lokal, dan pemangku kepentingan lainnya, sehingga dapat mencapai konsensus dalam merencanakan dan melaksanakan program pengembangan desa. Dengan peta sebagai alat yang kuat, desa-desa dapat mengoptimalkan potensi mereka, menarik investasi yang lebih besar, dan mencapai tujuan pembangunan yang ada secara efisien dan berkelanjutan.      .",
    // icon: FaLaptopCode,
  },
];

const Background = () => {
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
      <Stack direction={{ base: "column", md: "row" }} justifyContent="center">
        <Box mr={{ base: 0, md: 9 }} pos="relative">
          <DottedBox />
          <Image
            boxShadow="lg"
            w="100%"
            h="100%"
            minW={{ base: "auto", md: "30rem" }}
            maxH="20rem"
            objectFit="cover"
            src={`https://thumbs.dreamstime.com/b/indonesia-city-lights-map-elements-image-furnished-nasa-35862993.jpg`}
            rounded="md"
            fallback={<Skeleton />}
          />
        </Box>
        <Stack direction="column" spacing={6} justifyContent="center">
          <Heading
            fontSize="4xl"
            lineHeight={1}
            fontWeight="normal"
            textAlign="left"
          >
            Sekilas tentang{" "}
            <Text color="#d65249" display="inline-block" fontWeight="bold">
              Desa di Indonesia
            </Text>
            
          </Heading>
          <Box>
            <Accordion
              defaultIndex={[0]}
              borderRadius="md"
              bg="white"
              shadow="md"
              w="600px"
            >
              {QnAs.map((QnA, index) => (
                <AccordionItem borderWidth="0" borderRadius="md">
                  <h2>
                    <AccordionButton
                      fontWeight="bold"
                      _expanded={{
                        fontWeight: "bold",
                        bg: "#d65249",
                        color: "white",
                      }}
                      borderRadius="md"
                    >
                      <Box as="span" flex="1" textAlign="left">
                        {QnA.heading}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel p={4}>
                    <Text align="justify" mx="10px">
                      {QnA.content}
                    </Text>
                    <Divider h="5px" borderColor="gray.200" mt="20px" />
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
          {/* <Link to='/research'> */}
          <Text fontSize="sm" color="blue.400">
            Pelajari lebih lengkap →
          </Text>
          {/* </Link> */}
        </Stack>
      </Stack>
    </Container>
  );
};

function DottedBox() {
  return (
    <Box
      position="absolute"
      left="-45px"
      top="-30px"
      height="full"
      maxW="700px"
      zIndex={-1}
    >
      <svg color="rgba(55,65,81, 0.1)" width="350" height="420" fill="none">
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        ></rect>
      </svg>
    </Box>
  );
}

export default Background;
