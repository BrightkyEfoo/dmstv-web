import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const MainAboutSection1 = () => {
  return (
    <VStack w={'100vw'}>
      <VStack maxW={1280} w={'full'} alignItems={'flex-start'} padding={'100px'} gap = {'25px'}>
        <Box h={0} border={'2px solid gray'} w={'50px'} />
        <Text>OUR STORY</Text>
        <Text fontSize={'50px'} fontWeight={600}>A few words about us</Text>
        <VStack w={'full'} alignSelf={'stretch'} gap={'30px'}>
          <Text width={570} textAlign={'justify'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </Text>
          <Text width={570} textAlign={'justify'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </Text>
          <Text width={570} textAlign={'justify'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default MainAboutSection1;
