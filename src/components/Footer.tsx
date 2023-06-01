import { Box, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import { Layout } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { FaYelp } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

const Foot = () => {
  return (
    <VStack>
      <HStack
        color={'#153243'}
        maxW={1280}
        w="full"
        justify={'space-between'}
        gap={35}
        paddingTop={35}
        paddingBottom={35}
      >
        <VStack
          fontWeight={'bold'}
          maxW={380}
          flex={1}
          align={'start'}
          padding={15}
          gap={18}
        >
          <Link href="/">
            <Image
              src="assets/images/logo-tv.jpg"
              height={50}
              objectFit={'contain'}
            />
          </Link>
          <Text fontSize={'lg'} textAlign={'justify'}>
            1600 Pennsylvania Ave Nw, Washington, Dc 20500
          </Text>
          <HStack>
            <AiFillFacebook size={25} /> <FaYelp size={25} />
            <GoMail size={25} />
          </HStack>
        </VStack>
        <VStack align={'start'} flex={1}>
          <Text fontSize={'xl'} paddingBottom={15}>
            about us
          </Text>
          <Link href="#">Company Profile</Link>
          <Link href="#">CSR Initiatives</Link>
          <Link href="#">About Us</Link>
          <Link href="#">About Us</Link>
        </VStack>
        <VStack align={'start'} flex={1}>
          <Text fontSize={'xl'} paddingBottom={15}>
            connect
          </Text>
          <Link href="#">Company Profile</Link>
          <Link href="#">CSR Initiatives</Link>
          <Link href="#">About Us</Link>
          <Link href="#">About Us</Link>
        </VStack>
      </HStack>
      <VStack
        w={'full'}
        padding={25}
        borderTop={'1px rgb(26, 108, 122) solid'}
        color={'rgb(26, 108, 122)'}
      >
        <Text maxW={1280} w="full">
          Copyright © 2023 Dmservices | Powered by Dmservices
        </Text>
      </VStack>
    </VStack>
  );
};

export default Foot;
