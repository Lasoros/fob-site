import './App.css'
import Cards from './card'
import { Box, Container, Image } from '@chakra-ui/react'
import FAQ from './FAQ'

function App() {


  return (
    <>

    <Container>

      <h1>BEAVERCREEK KEY FOBS</h1>


      <Container>
        <Box boxSize={'contain'}>
          <Image borderRadius={'25%'} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Farticle.images.consumerreports.org%2Fprod%2Fcontent%2Fdam%2FCRO%2520Images%25202019%2FCars%2FMay%2FCR-Cars-InlineHero-Key-Fobs-pile-5-19&f=1&nofb=1&ipt=bfdfe0964cd3b2cfbf8cab9992f0c165dd0b4a907c81b176b35e8cb7aafe1602&ipo=images' ></Image>
        </Box>
      </Container>




      <Container maxW="container.xl" py={6}>
        <Cards>
        </Cards>
        
      </Container>

      <FAQ></FAQ>

      <Container width={'100%'}>
        <FAQ></FAQ>
      </Container>
 
    </Container>
          

      






    </>
  )
}

export default App
