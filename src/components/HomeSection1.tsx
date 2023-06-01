import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeSection1 = () => {
  const [isStreamMenuDisplayed, setIsStreamMenuDisplayed] = useState(false);
  const navigate = useNavigate();
  return (
    <VStack
      w={'full'}
      align={'center'}
      height={'100vh'}
      position={'relative'}
      backgroundImage={
        'https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/landscape-mountains-sky-4843193.jpg'
      }
      backgroundRepeat={'no-repeat'}
      backgroundSize={'cover'}
      backgroundAttachment={'fixed'}
      marginTop={0}
    >
      <HStack
        w={'full'}
        justifyContent={'center'}
        paddingTop={10}
        paddingBottom={10}
        zIndex={20}
        // backgroundImage={
        //   'https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/landscape-mountains-sky-4843193.jpg'
        // }
        color={'white'}
        marginTop={0}
        fontSize={'16px'}
      >
        <HStack
          w={'full'}
          maxW={1280}
          align={'center'}
          justifyContent={'space-between'}
          paddingLeft={15}
          marginTop={0}
          paddingRight={15}
        >
          <Link href="/">
            <Image src="assets/images/logo-tv.jpg" h={70} />
          </Link>
          <HStack gap={25}>
            <Link href="/" _hover={{ textDecoration: 'none' }}>
              Acceuil
            </Link>
            <Box position={'relative'} cursor={'pointer'}>
              <Text
                onClick={() => {
                  setIsStreamMenuDisplayed(!isStreamMenuDisplayed);
                }}
              >
                Stream
              </Text>
              <VStack
                backgroundColor={'rgba(0,0,0,0.5)'}
                width={'100px'}
                align={'flex-start'}
                padding={'8px'}
                rounded={'md'}
                transition={'all ease 300ms'}
                position={'absolute'}
                display={isStreamMenuDisplayed ? 'flex' : 'none'}
              >
                <Link href="live">Live</Link>
                <Link href="vod">VOD</Link>
              </VStack>
            </Box>
            <Link href="about" _hover={{ textDecoration: 'none' }}>
              A Propos
            </Link>
            <Link href="contact" _hover={{ textDecoration: 'none' }}>
              Contact
            </Link>
            <Button
              color={'white'}
              textTransform={'uppercase'}
              fontSize={'smaller'}
              bgColor={'rgb(26, 108, 122)'}
              rounded={'none'}
              _hover={{ backgroundColor: 'rgb(21, 50, 67)' }}
              onClick={() => {
                navigate('/give-a-coffee');
              }}
            >
              Faire un Don
            </Button>
          </HStack>
        </HStack>
      </HStack>

      <Box
        w={'100%'}
        h={'100vh'}
        position={'absolute'}
        top={0}
        backgroundImage={
          'radial-gradient(at center center,#153243 0%,#1a6c7a 100%)'
        }
        opacity={0.5}
        left={0}
        marginTop={0}
      ></Box>

      <VStack
        position={'absolute'}
        top={0}
        left={0}
        marginTop={0}
        w="100%"
        h="100vh"
        justifyContent={'center'}
      >
        <VStack maxW={500} marginTop={0} color={'white'} gap={15}>
          <Text fontSize={'28px'}>Multi-purpose Template</Text>
          <Text fontSize={'50px'} fontWeight={'bold'}>
            Create Your Website
          </Text>
          <Text fontSize={'16px'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Text>
          <HStack fontSize={'smaller'} fontWeight={'light'}>
            <Button
              border={'1px solid white'}
              backgroundColor={'transparent'}
              rounded={'none'}
              color="white"
              transition={'all ease 300ms'}
              _hover={{
                border: '2px solid #153243',
                backgroundColor: '#153243',
              }}
            >
              SERVICES
            </Button>
            <Button
              //   border={'1px solid white'}
              //   backgroundColor={'transparent'}
              rounded={'none'}
              color="#153243"
              transition={'all ease 300ms'}
              onClick={() => {
                navigate('/about');
              }}
              _hover={{
                color: 'white',
                border: '2px solid #153243',
                backgroundColor: '#153243',
              }}
            >
              ABOUT US
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default HomeSection1;
