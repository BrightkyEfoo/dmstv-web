import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import CommonHeader from '../components/CommonHeader'
import Foot from '../components/Footer'
import MainAboutSection4 from '../components/MainAboutSection4'
import ContactMainSection1 from '../components/ContactMainSection1'

const Contact = () => {
  return (
    <VStack align={'stretch'}>
      <CommonHeader title="Contact" />

      <ContactMainSection1 />
        
      <Box
        position={'relative'}
        h={400}
        w={'100vw'}
        backgroundImage={'assets/images/map.png'}
        // backgroundAttachment={'fixed'}
        backgroundRepeat={'no-repeat'}
        // backgroundSize={'cover'}
      >
        <Box
          h={400}
          w={'100vw'}
          position="absolute"
          top={0}
          left={0}
          background="rgba(0,0,0,0.5)"
          transition={'all ease 300ms'}
          _hover={{ background: 'rgba(0,0,0,0)' }}
        ></Box>
      </Box>
      <MainAboutSection4 />
      <Foot />
    </VStack>
  )
}

export default Contact