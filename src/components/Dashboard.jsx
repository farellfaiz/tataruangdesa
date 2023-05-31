import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  chakra,
  Text,
} from "@chakra-ui/react";
import Iframe from "react-iframe";
import React from "react";

const Dashboard = () => {
  return (
    <Box
      bg="#2B2B2B"
      w="100%"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      color="white"
    >
      <Iframe
        url="https://www.arcgis.com/apps/instant/sidebar/index.html?appid=dea8d0110beb433cbf55e0c27cb50434"
        width="100%"
        height="700px"
        display="initial"
      />
    </Box>
  );
};

export default Dashboard;
