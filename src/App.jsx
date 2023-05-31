import { Box } from '@chakra-ui/react'
import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Features from './components/Features.jsx'
import Background from './components/Background.jsx'
import CTA from './components/CTA.jsx'

function App() {
  return (
    <Box bgColor='gray.50' w='100vw'>
      <Navigation />
      <Hero />
      <Features />
      <Background />
      <CTA />
      <Footer />
    </Box>
  )
}

export default App
