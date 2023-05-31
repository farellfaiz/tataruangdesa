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
        url="https://khadijahnurul.maps.arcgis.com/apps/dashboards/6c85b090c71c43c09d8a7db1aa6a28cb"
        width="100%"
        height="700px"
        display="initial"
      />
    </Box>
  );
};

export default Dashboard;
