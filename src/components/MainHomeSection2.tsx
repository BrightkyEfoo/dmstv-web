import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Button1 from './Button1';

const MainHomeSection2 = () => {
  return (
    <HStack
      h={580}
      justifyContent={'center'}
      position={'relative'}
      backgroundImage={
        'https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/fogs-on-green-mountain-1054222.jpg'
      }
      backgroundAttachment={'fixed'}
      backgroundSize={'cover'}
      w={'100%'}
    >
      <VStack maxW={1280} w="100%" zIndex={2} color={'white'}>
        <VStack minW={'300px'} w={600} gap={8}>
          <Text fontSize={'28px'} fontWeight={'bold'}>
            Call To Action
          </Text>
          <Text fontSize={'16px'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Text>
          <Button1
            text="CONTACT"
            color="white"
            backColor="transparent"
            hovBackColor="white"
            hovColor="#153243"
            link="#"
          />
        </VStack>
      </VStack>
      <Box
        w={'100%'}

        h={'100%'}
        position={'absolute'}
        top={0}
        marginStart={0}
        marginInlineStart={'0px'}
        backgroundImage={
          'radial-gradient(at center center,#153243aa 0%,#1a6c7add 100%)'
        }
        zIndex={1}
        opacity={0.5}
        left={0}
      ></Box>
    </HStack>
  );
};

export default MainHomeSection2;
