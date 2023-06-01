import { Box, Button, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const MainAboutSection4 = () => {
  return (
    <Box
      position={'relative'}
      padding={'100px'}
      color={'white'}
      backgroundImage={
        'URL("https://websitedemos.net/church-04/wp-content/uploads/sites/452/2019/11/bg-01-free-img.jpg")'
      }
    >
      <Box
        height={'full'}
        w={'100vw'}
        top={0}
        left={0}
        zIndex={1}
        position={'absolute'}
        backgroundImage={
          'radial-gradient(circle at center, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.6) 60%,rgba(0,0,0,0.85) 100%)'
        }
      ></Box>
      <HStack zIndex={5} position={'relative'}>
        <VStack flex={1} padding={'100px'} align={'flex-start'} gap={"8px"}>
          <Box h={0} border={'2px solid gray'} w={'50px'} />
          <Text fontSize={'16px'}>GIVE</Text>
          <Text fontSize={'40px'} textAlign={'left'} fontWeight={'bold'}>Your Generosity. Our Mission.</Text>
          <Text fontSize={'16px'} textAlign={'left'} marginBottom={"25px"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Text>
          <Button
            rounded={'none'}
            padding={'20px 40px'}
            h={'59px'}
            border={'1px solid white'}
            backgroundColor={'transparent'}
            fontSize={'15px'}
            _hover={{
              color: 'black',
              backgroundColor: 'White',
            }}
          >
            GIVE NOW
          </Button>
        </VStack>

        <VStack flex={1} justifyContent={'space-between'} alignSelf={'stretch'} alignItems={'flex-start'} paddingLeft={"100px"}>
          <VStack alignItems={'flex-start'}>
            <Text fontSize={'16px'}>HOURS & ADDRESS</Text>
            <Text fontSize={'40px'} fontWeight={'bold'}>Sundays at 10:30 am</Text>
            <Text fontSize={'16px'}>213 Bevington Rd. Dallas, TX 43257</Text>
          </VStack>
          <VStack alignItems={'flex-start'}>
            <Box h={0} border={'2px solid gray'} w={'50px'} />
            <Text fontSize={'16px'}>CONTACT</Text>
            <Text fontSize={'40px'} fontWeight={'bold'}>929-242-6868</Text>
            <Text fontSize={'16px'}>church@domain.com</Text>
            <HStack gap={15}>
              <Button
                borderRadius={'50%'}
                height={'fit-content'}
                aspectRatio={'1/1'}
                padding={5}
                backgroundColor={'white'}
              >
                <FaFacebookF color="red" size={25} />
              </Button>
              <Button
                borderRadius={'50%'}
                height={'fit-content'}
                aspectRatio={'1/1'}
                padding={5}
                backgroundColor={'white'}
              >
                <FaYoutube color="red" size={25} />
              </Button>
              <Button
                borderRadius={'50%'}
                height={'fit-content'}
                aspectRatio={'1/1'}
                padding={5}
                backgroundColor={'white'}
              >
                <FaInstagram color="red" size={25} />
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default MainAboutSection4;
