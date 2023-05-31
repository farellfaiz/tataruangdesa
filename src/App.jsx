import { Box } from '@chakra-ui/react'
import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Features from './components/Features.jsx'
import Background from './components/Background.jsx'
import CTA from './components/CTA.jsx'
import Dashboard from './components/Dashboard.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Peta from './components/Peta.jsx'
import Scroll from './components/Scroll.jsx'

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Background />
      <CTA />
    </>
  );
};

function App() {
  return (
    <Box bgColor='gray.50' w='100vw'>
      {/* <Navigation />
      <Hero />
      <Features />
      <Background />
      <CTA />
      <Footer /> */}
      <BrowserRouter>
        <Navigation />
        <Scroll />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/peta" element={<Peta />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Box>
  )
}

export default App
