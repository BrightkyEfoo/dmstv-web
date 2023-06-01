import { Box, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import CommonHeader from '../components/CommonHeader';
import MainAbout from '../components/MainAbout';
import Foot from '../components/Footer';
import MainAboutSection4 from '../components/MainAboutSection4';
import MainAboutSection3 from '../components/MainAboutSection3';
import MainAboutSection1 from '../components/MainAboutSection1';

const About = () => {
  return (
    <VStack align={'stretch'}>
      <CommonHeader title="A propos" />
      {/* <MainAbout />
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
      </Box> */}
      <MainAboutSection1 />

      <VStack>
        <Image src={"https://websitedemos.net/church-04/wp-content/uploads/sites/452/2019/06/about-02-free-img.jpg"} />
      </VStack>
      <MainAboutSection3 />
      <MainAboutSection4 />
      <Foot />
    </VStack>
  );
};

export default About;
